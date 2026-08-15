import { NextResponse } from "next/server";
import { buildInquiryEmail, type InquiryPayload } from "@/lib/inquiry";
import { site } from "@/lib/site";

function requestOrigin(request: Request) {
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") ?? "https";
  if (host) return `${proto}://${host.split(",")[0]!.trim()}`;
  return site.url;
}

async function sendViaWeb3Forms(
  accessKey: string,
  payload: InquiryPayload,
  email: ReturnType<typeof buildInquiryEmail>,
) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      to: email.to,
      subject: email.subject,
      from_name: `${payload.name} via ${site.name}`,
      email: payload.email,
      replyto: payload.email,
      message: email.body,
    }),
  });

  return response.ok;
}

async function sendViaFormSubmit(
  origin: string,
  payload: InquiryPayload,
  email: ReturnType<typeof buildInquiryEmail>,
) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(email.to)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: origin,
      Referer: `${origin}/`,
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone ?? "",
      _replyto: payload.email,
      _subject: email.subject,
      message: email.body,
      _captcha: "false",
      _template: "box",
    }),
  });

  const data = (await response.json()) as { success?: string | boolean; message?: string };
  return data.success === true || data.success === "true";
}

export async function POST(request: Request) {
  const payload = (await request.json()) as InquiryPayload;

  if (!payload?.name || !payload?.email || !payload?.kind) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const email = buildInquiryEmail(payload);
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  const sent = accessKey
    ? await sendViaWeb3Forms(accessKey, payload, email)
    : await sendViaFormSubmit(requestOrigin(request), payload, email);

  if (!sent) {
    return NextResponse.json({ error: "Could not send the request." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
