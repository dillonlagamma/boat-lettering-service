import { site } from "@/lib/site";

export const formLabels = {
  quote: "Homepage quote",
  contact: "Contact page",
  design: "Design lettering",
  striping: "Boat striping",
} as const;

export type InquiryKind = keyof typeof formLabels;

export type InquiryPayload = {
  kind: InquiryKind;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  fields?: Record<string, string | number | boolean>;
};

const fieldLabels: Record<string, string> = {
  boat: "Boat",
  service: "Service needed",
  boatName: "Boat name",
  hailingPort: "Hailing port",
  registrationMode: "Registration numbers",
  font: "Font",
  bold: "Bold",
  italic: "Italic",
  spacing: "Letter spacing",
  align: "Alignment",
  color: "Stripe / lettering color",
  outline: "Outline",
  shadow: "Shadow",
  arch: "Arched",
  dome: "Domed",
  graphicNote: "Graphic notes",
  heightIn: "Height (in)",
  widthIn: "Width (in)",
  portHeightIn: "Port height (in)",
  vinyl: "Vinyl",
  quantity: "Quantity",
  fulfillment: "Fulfillment",
  size: "Stripe width",
  length: "Roll length",
};

function labelField(key: string) {
  return fieldLabels[key] ?? key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
}

function formatValue(value: string | number | boolean) {
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return String(value);
}

export function formLabel(kind: InquiryKind) {
  return formLabels[kind];
}

export function buildInquiryEmail(payload: InquiryPayload) {
  const form = formLabels[payload.kind];
  const boatName = payload.fields?.boatName;
  const stripeBits = [payload.fields?.color, payload.fields?.size, payload.fields?.quantity]
    .filter((value) => value !== undefined && value !== "")
    .join(" · ");

  const subject =
    payload.kind === "design"
      ? `[Design lettering] ${boatName || "New design"}`
      : payload.kind === "striping"
        ? `[Boat striping] ${stripeBits || "Roll request"}`
        : payload.kind === "quote"
          ? `[Homepage quote] ${payload.name}`
          : `[Contact] ${payload.name}`;

  const details = Object.entries(payload.fields ?? {})
    .filter(([, value]) => value !== "" && value !== undefined)
    .map(([key, value]) => `${labelField(key)}: ${formatValue(value)}`);

  const lines = [
    `This message was sent from the ${form} form on ${site.url.replace("https://www.", "").replace("https://", "")}.`,
    "",
    `Form: ${form}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
  ];
  if (payload.phone) lines.push(`Phone: ${payload.phone}`);
  if (payload.message) lines.push(`Message: ${payload.message}`);
  if (details.length) lines.push("", ...details);

  const body = lines.join("\n");

  return {
    to: site.email,
    subject,
    body,
  };
}
