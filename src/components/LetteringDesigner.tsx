"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { DesignerFontLoader } from "@/components/DesignerFontLoader";
import {
  estimateWidthInches,
  formatRegistration,
  letteringFonts,
} from "@/lib/fonts";
import { previewBackgrounds, vinylColors } from "@/lib/site";

const tabs = [
  { id: "text", label: "Text" },
  { id: "color", label: "Color" },
  { id: "effects", label: "Effects" },
  { id: "graphic", label: "Graphic" },
  { id: "dome", label: "Dome It" },
] as const;

type TabId = (typeof tabs)[number]["id"];
type VinylId = "standard" | "premium" | "hightack";
type Align = "left" | "center" | "right";

const SIZE_MIN = 0.25;

export function LetteringDesigner() {
  const [tab, setTab] = useState<TabId>("text");
  const [boatName, setBoatName] = useState("Your Boat Name");
  const [hailingPort, setHailingPort] = useState("");
  const [registrationMode, setRegistrationMode] = useState(false);
  const [fontId, setFontId] = useState("cinzel");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [spacing, setSpacing] = useState(0.02);
  const [align, setAlign] = useState<Align>("center");
  const [colorId, setColorId] = useState("black");
  const [outline, setOutline] = useState(false);
  const [outlineId, setOutlineId] = useState("white");
  const [shadow, setShadow] = useState(false);
  const [shadowId, setShadowId] = useState("black");
  const [arch, setArch] = useState(false);
  const [dome, setDome] = useState(false);
  const [graphicNote, setGraphicNote] = useState("");
  const [heightIn, setHeightIn] = useState(6);
  const [widthIn, setWidthIn] = useState(47.2);
  const [heightDraft, setHeightDraft] = useState("6");
  const [widthDraft, setWidthDraft] = useState("47.2");
  const [portDraft, setPortDraft] = useState("2.5");
  const [maintain, setMaintain] = useState(true);
  const [portHeightIn, setPortHeightIn] = useState(2.5);
  const [vinyl, setVinyl] = useState<VinylId>("premium");
  const [quantity, setQuantity] = useState(1);
  const [fulfillment, setFulfillment] = useState<"install" | "ship">("install");
  const [backgroundId, setBackgroundId] = useState("transparent");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const font = letteringFonts.find((item) => item.id === fontId) ?? letteringFonts[0];
  const color = vinylColors.find((item) => item.id === colorId) ?? vinylColors[1];
  const outlineColor = vinylColors.find((item) => item.id === outlineId) ?? vinylColors[0];
  const shadowColor = vinylColors.find((item) => item.id === shadowId) ?? vinylColors[1];
  const background =
    previewBackgrounds.find((item) => item.id === backgroundId) ?? previewBackgrounds[0];
  const portWidthIn = estimateWidthInches(hailingPort, portHeightIn, 0.58);
  const transparent = background.id === "transparent";

  const textStyle = useMemo(() => {
    const shadows: string[] = [];
    if (shadow) shadows.push(`5px 6px 0 ${shadowColor.hex}`);
    if (dome) {
      shadows.push(
        "0 1px 0 rgba(255,255,255,0.45)",
        "1px 2px 0 rgba(0,0,0,0.16)",
        "2px 5px 10px rgba(0,0,0,0.28)",
      );
    }
    return {
      color: color.hex,
      fontFamily: font.family,
      fontWeight: bold ? 700 : 500,
      fontStyle: italic ? "italic" : "normal",
      letterSpacing: `${spacing}em`,
      WebkitTextStroke: outline ? `2px ${outlineColor.hex}` : "0",
      textShadow: shadows.length ? shadows.join(", ") : "none",
      paintOrder: outline ? ("stroke fill" as const) : undefined,
    };
  }, [
    bold,
    color.hex,
    dome,
    font.family,
    italic,
    outline,
    outlineColor.hex,
    shadow,
    shadowColor.hex,
    spacing,
  ]);

  function onNameChange(value: string) {
    setBoatName(registrationMode ? formatRegistration(value) : value);
  }

  function applyHeight(next: number) {
    const height = roundSize(Math.max(SIZE_MIN, next));
    if (maintain && heightIn > 0) {
      const width = roundSize(widthIn * (height / heightIn));
      setWidthIn(width);
      setWidthDraft(String(width));
    }
    setHeightIn(height);
  }

  function applyWidth(next: number) {
    const width = roundSize(Math.max(SIZE_MIN, next));
    if (maintain && widthIn > 0) {
      const height = roundSize(heightIn * (width / widthIn));
      setHeightIn(height);
      setHeightDraft(String(height));
    }
    setWidthIn(width);
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const form = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "design",
          name: String(form.get("name") ?? ""),
          email: String(form.get("email") ?? ""),
          phone: String(form.get("phone") ?? ""),
          message: String(form.get("notes") ?? ""),
          fields: {
            boatName,
            hailingPort,
            registrationMode,
            font: font.name,
            bold,
            italic,
            spacing,
            align,
            color: color.name,
            outline: outline ? outlineColor.name : "none",
            shadow: shadow ? shadowColor.name : "none",
            arch,
            dome,
            graphicNote,
            heightIn,
            widthIn,
            portHeightIn,
            vinyl:
              vinyl === "premium"
                ? "Premium marine"
                : vinyl === "hightack"
                  ? "High tack"
                  : "Standard",
            quantity,
            fulfillment: fulfillment === "install" ? "South Florida install" : "Ship DIY",
          },
        }),
      });
      const data = (await response.json()) as { mailto?: string; error?: string };
      if (!response.ok) throw new Error(data.error ?? "Request failed");
      if (data.mailto) window.location.href = data.mailto;
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <div className="grid gap-5">
      <DesignerFontLoader />

      <section className="overflow-hidden rounded-lg border border-navy/10 bg-white">
        <div className="flex items-center justify-between gap-3 border-b border-navy/10 px-3 py-2.5 sm:px-4">
          <p className="shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy/45">
            Preview
          </p>
          <p className="min-w-0 truncate text-right text-[0.68rem] uppercase tracking-[0.12em] text-navy/40">
            {heightIn}&quot; H · ~{widthIn}&quot; W
            {dome ? " · Domed" : ""}
          </p>
        </div>
        <PreviewBoard
          transparent={transparent}
          backgroundHex={background.hex}
          widthIn={widthIn}
          heightIn={heightIn}
          portHeightIn={portHeightIn}
          showPort={Boolean(hailingPort && !registrationMode)}
          align={align}
          darkBoard={isDarkHex(background.hex) && !transparent}
          fitKey={[
            boatName,
            hailingPort,
            font.family,
            bold,
            italic,
            spacing,
            outline,
            shadow,
            arch,
            dome,
            color.hex,
          ].join("|")}
        >
          {arch ? (
            <svg viewBox="0 0 800 240" className="h-auto w-full overflow-visible">
              <path id="name-arc" d="M 40 180 Q 400 24 760 180" fill="none" />
              <text style={{ ...textStyle, fontSize: 56 }}>
                <textPath href="#name-arc" startOffset="50%" textAnchor="middle">
                  {boatName || "Your Boat Name"}
                </textPath>
              </text>
            </svg>
          ) : (
            <p className="whitespace-nowrap leading-none" style={textStyle}>
              {boatName || "Your Boat Name"}
            </p>
          )}
          {hailingPort && !registrationMode && (
            <p
              className="whitespace-nowrap uppercase"
              style={{
                color: color.hex,
                fontFamily: '"Montserrat", sans-serif',
                letterSpacing: "0.18em",
                opacity: 0.9,
              }}
            >
              {hailingPort}
            </p>
          )}
        </PreviewBoard>
      </section>

      <section className="overflow-hidden rounded-lg border border-navy/10 bg-white">
        <div className="grid lg:grid-cols-12 lg:items-stretch">
          <div className="flex h-full min-h-0 flex-col lg:col-span-8 lg:border-r lg:border-navy/10">
            <div className="flex shrink-0 gap-0 overflow-x-auto border-b border-navy/10">
              {tabs.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTab(item.id)}
                  className={`min-h-12 shrink-0 px-4 text-[0.72rem] font-semibold uppercase tracking-[0.12em] sm:px-5 ${
                    tab === item.id
                      ? "border-b-2 border-blue text-blue"
                      : "border-b-2 border-transparent text-navy/45 hover:text-navy"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
              {tab === "text" && (
                <div className="flex min-h-0 flex-1 flex-col gap-4">
                  <p className="text-xs text-navy/45">Preview updates as you type.</p>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={registrationMode}
                      onChange={(event) => {
                        setRegistrationMode(event.target.checked);
                        if (event.target.checked) {
                          setBoatName(formatRegistration(boatName));
                          applyHeight(3);
                          setHeightDraft("3");
                          setHailingPort("");
                        }
                      }}
                    />
                    Registration number helper (FL 1234 AB)
                  </label>
                  <label className="grid gap-2 text-sm">
                    {registrationMode ? "Registration numbers" : "Boat name"}
                    <textarea
                      className="field min-h-[5.5rem] resize-y"
                      value={boatName}
                      onChange={(event) => onNameChange(event.target.value)}
                      placeholder="Your Boat Name"
                    />
                  </label>
                  {!registrationMode && (
                    <label className="grid gap-2 text-sm">
                      Hailing port (optional)
                      <input
                        className="field"
                        value={hailingPort}
                        onChange={(event) => setHailingPort(event.target.value)}
                        placeholder="FORT LAUDERDALE, FL"
                      />
                    </label>
                  )}
                  <label className="grid gap-2 text-sm">
                    Font
                    <select
                      className="field"
                      value={fontId}
                      onChange={(event) => setFontId(event.target.value)}
                    >
                      {letteringFonts.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <div className="flex flex-wrap items-center gap-2">
                    <ToggleChip active={bold} onClick={() => setBold((value) => !value)}>
                      Bold
                    </ToggleChip>
                    <ToggleChip active={italic} onClick={() => setItalic((value) => !value)}>
                      Italic
                    </ToggleChip>
                    <button
                      type="button"
                      className="min-h-11 rounded-md border border-navy/10 px-3 text-xs uppercase tracking-[0.1em] text-navy/70"
                      onClick={() => setSpacing((value) => Number((value + 0.02).toFixed(2)))}
                    >
                      + Spacing
                    </button>
                    <button
                      type="button"
                      className="min-h-11 rounded-md border border-navy/10 px-3 text-xs uppercase tracking-[0.1em] text-navy/70"
                      onClick={() => setSpacing((value) => Number(Math.max(-0.08, value - 0.02).toFixed(2)))}
                    >
                      − Spacing
                    </button>
                    {(["left", "center", "right"] as const).map((item) => (
                      <ToggleChip key={item} active={align === item} onClick={() => setAlign(item)}>
                        {item}
                      </ToggleChip>
                    ))}
                  </div>
                  <div className="grid min-h-64 flex-1 grid-cols-2 content-start gap-2 overflow-auto pr-1 lg:min-h-0">
                    {letteringFonts.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFontId(item.id)}
                        className={`rounded-md border px-3 py-3 text-left ${
                          fontId === item.id ? "border-blue bg-foam" : "border-navy/10 bg-white"
                        }`}
                      >
                        <span className="block text-[0.62rem] uppercase tracking-[0.12em] text-navy/40">
                          {item.name}
                        </span>
                        <span className="mt-1 block truncate text-lg" style={{ fontFamily: item.family }}>
                          {boatName.slice(0, 14) || "Aa"}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {tab === "color" && (
                <SwatchGrid
                  label="Lettering color"
                  value={colorId}
                  onChange={setColorId}
                  selectedName={color.name}
                />
              )}

              {tab === "effects" && (
                <div className="grid gap-5">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={outline} onChange={(e) => setOutline(e.target.checked)} />
                    Outline
                  </label>
                  {outline && (
                    <SwatchGrid label="Outline color" value={outlineId} onChange={setOutlineId} />
                  )}
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={shadow} onChange={(e) => setShadow(e.target.checked)} />
                    Drop shadow
                  </label>
                  {shadow && (
                    <SwatchGrid label="Shadow color" value={shadowId} onChange={setShadowId} />
                  )}
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={arch} onChange={(e) => setArch(e.target.checked)} />
                    Arch the name
                  </label>
                </div>
              )}

              {tab === "graphic" && (
                <div className="grid gap-3">
                  <p className="text-sm leading-7 text-navy/65">
                    Have a logo, fish, flag, or other artwork? Describe it here or
                    mention that you will email a file. We will cut or print it
                    with the lettering.
                  </p>
                  <label className="grid gap-2 text-sm">
                    Graphic notes
                    <textarea
                      className="field min-h-28"
                      value={graphicNote}
                      onChange={(event) => setGraphicNote(event.target.value)}
                      placeholder="Marlin graphic on the left, matching the name color…"
                    />
                  </label>
                </div>
              )}

              {tab === "dome" && (
                <div className="grid gap-4">
                  <p className="text-sm leading-7 text-navy/65">
                    Dome the letters with a clear outdoor resin so they read
                    raised and rounded on the hull. We will confirm size and
                    color before we run a domed job.
                  </p>
                  <label className="flex items-center gap-2 text-sm font-medium">
                    <input type="checkbox" checked={dome} onChange={(e) => setDome(e.target.checked)} />
                    Make lettering domed
                  </label>
                  {dome && (
                    <p className="rounded-md bg-foam px-3 py-3 text-xs leading-6 text-navy/55">
                      Preview is a stand-in for the raised finish. Clipart is not
                      domed. Very small or very tall letters may need to stay
                      flat vinyl.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          <aside className="bg-foam/60 p-5 sm:p-6 lg:col-span-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy/45">
              Background color
            </p>
            <p className="mt-1 text-xs text-navy/40">Preview only — not printed.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {previewBackgrounds.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  title={item.name}
                  onClick={() => setBackgroundId(item.id)}
                  className={`h-9 w-9 rounded-full border-2 ${
                    backgroundId === item.id ? "border-blue" : "border-white"
                  } ${item.id === "transparent" ? "design-board-check" : ""}`}
                  style={{ backgroundColor: item.id === "transparent" ? undefined : item.hex }}
                />
              ))}
            </div>

            <p className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy/45">
              Vinyl type
            </p>
            <div className="mt-3 grid gap-2">
              {(
                [
                  ["standard", "Standard", "Outdoor-rated film, up to 5 years."],
                  ["premium", "Premium marine", "3M / Avery / Oracal cast vinyl."],
                  ["hightack", "High tack", "For textured hulls, RIBs, and plastics."],
                ] as const
              ).map(([id, title, body]) => (
                <label key={id} className="flex cursor-pointer items-start gap-2 text-sm">
                  <input
                    type="radio"
                    name="vinyl"
                    checked={vinyl === id}
                    onChange={() => setVinyl(id)}
                    className="mt-1"
                  />
                  <span>
                    <span className="block font-medium">{title}</span>
                    <span className="block text-xs leading-5 text-navy/50">{body}</span>
                  </span>
                </label>
              ))}
            </div>

            <p className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy/45">
              Quantity
            </p>
            <div className="mt-2 flex items-center gap-2">
              <button
                type="button"
                className="h-11 w-11 rounded-md border border-navy/10 bg-white text-lg"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              >
                −
              </button>
              <input
                className="field h-11 w-16 px-2 text-center"
                type="number"
                min={1}
                max={6}
                value={quantity}
                onChange={(event) => setQuantity(clamp(Number(event.target.value), 1, 6))}
              />
              <button
                type="button"
                className="h-11 w-11 rounded-md border border-navy/10 bg-white text-lg"
                onClick={() => setQuantity((value) => Math.min(6, value + 1))}
              >
                +
              </button>
            </div>

            <p className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy/45">
              Size of lettering
            </p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <label className="grid gap-1 text-xs text-navy/50">
                H (in)
                <input
                  className="field"
                  type="number"
                  min={SIZE_MIN}
                  step="any"
                  inputMode="decimal"
                  value={heightDraft}
                  onChange={(event) => {
                    const raw = event.target.value;
                    setHeightDraft(raw);
                    const next = Number(raw);
                    if (Number.isFinite(next) && next > 0) applyHeight(next);
                  }}
                  onBlur={() => setHeightDraft(String(heightIn))}
                />
              </label>
              <label className="grid gap-1 text-xs text-navy/50">
                W (in)
                <input
                  className="field"
                  type="number"
                  min={SIZE_MIN}
                  step="any"
                  inputMode="decimal"
                  value={widthDraft}
                  onChange={(event) => {
                    const raw = event.target.value;
                    setWidthDraft(raw);
                    const next = Number(raw);
                    if (Number.isFinite(next) && next > 0) applyWidth(next);
                  }}
                  onBlur={() => setWidthDraft(String(widthIn))}
                />
              </label>
            </div>
            <label className="mt-2 flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={maintain}
                onChange={(event) => setMaintain(event.target.checked)}
              />
              Maintain proportions
            </label>
            {!registrationMode && (
              <label className="mt-3 grid gap-1 text-xs text-navy/50">
                Port height (in)
                <input
                  className="field"
                  type="number"
                  min={SIZE_MIN}
                  step="any"
                  inputMode="decimal"
                  value={portDraft}
                  onChange={(event) => {
                    const raw = event.target.value;
                    setPortDraft(raw);
                    const next = Number(raw);
                    if (Number.isFinite(next) && next > 0) {
                      setPortHeightIn(roundSize(Math.max(SIZE_MIN, next)));
                    }
                  }}
                  onBlur={() => setPortDraft(String(portHeightIn))}
                />
                {hailingPort ? <span>Port width ~{portWidthIn}&quot;</span> : null}
              </label>
            )}

            <div className="mt-6 grid grid-cols-2 gap-2">
              <Choice
                active={fulfillment === "install"}
                title="Install"
                body="South Florida"
                onClick={() => setFulfillment("install")}
              />
              <Choice
                active={fulfillment === "ship"}
                title="Ship DIY"
                body="Pre-spaced"
                onClick={() => setFulfillment("ship")}
              />
            </div>

            {status === "sent" ? (
              <p className="mt-6 text-sm leading-7 text-navy/70">
                Design request sent. We will review the spec and follow up with
                timing and price.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 grid gap-3">
                <input required name="name" className="field" placeholder="Your name" />
                <input required type="email" name="email" className="field" placeholder="Email" />
                <input name="phone" className="field" placeholder="Phone" />
                <textarea name="notes" rows={2} className="field" placeholder="Notes for the shop" />
                {error && <p className="text-sm text-red-700">{error}</p>}
                <button type="submit" disabled={status === "sending"} className="btn-blue w-full disabled:opacity-60">
                  {status === "sending" ? "Sending…" : "Request this design"}
                </button>
              </form>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
}

function clamp(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

function roundSize(value: number) {
  return Number(value.toFixed(2));
}

function rulerExtent(value: number, minimum: number) {
  const padded = Math.max(value * 1.25, minimum);
  const steps = [12, 18, 24, 36, 48, 60, 72, 96, 120, 144, 180, 240, 360, 480];
  return steps.find((step) => step >= padded) ?? Math.ceil(padded / 60) * 60;
}

function rulerStep(max: number) {
  if (max <= 24) return { minor: 1, major: 6 };
  if (max <= 60) return { minor: 2, major: 12 };
  if (max <= 120) return { minor: 6, major: 24 };
  return { minor: 12, major: 48 };
}

function isDarkHex(hex: string) {
  if (!hex || hex === "transparent") return false;
  const raw = hex.replace("#", "");
  if (raw.length < 6) return false;
  const n = Number.parseInt(raw.slice(0, 6), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return (r * 299 + g * 587 + b * 114) / 1000 < 140;
}

function PreviewBoard({
  transparent,
  backgroundHex,
  widthIn,
  heightIn,
  portHeightIn,
  showPort,
  align,
  darkBoard,
  fitKey,
  children,
}: {
  transparent: boolean;
  backgroundHex: string;
  widthIn: number;
  heightIn: number;
  portHeightIn: number;
  showPort: boolean;
  align: Align;
  darkBoard: boolean;
  fitKey: string;
  children: React.ReactNode;
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState({ w: 0, h: 0 });
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setStage({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const totalHeightIn = showPort ? heightIn + portHeightIn + 1 : heightIn;
  const canvasW = rulerExtent(widthIn, 24);
  const canvasH = rulerExtent(totalHeightIn, 12);
  const inset = 20;
  const availW = Math.max(stage.w - inset * 2, 0);
  const availH = Math.max(stage.h - inset * 2, 0);
  const boxWpx = (widthIn / canvasW) * availW;
  const boxHpx = (totalHeightIn / canvasH) * availH;
  const baseFont = Math.max(10, boxHpx * (showPort ? 0.46 : 0.68));
  const portPx = Math.max(8, boxHpx * 0.16);
  const guide = darkBoard ? "rgba(255,255,255,0.55)" : "rgba(9,25,40,0.45)";

  useLayoutEffect(() => {
    const inner = innerRef.current;
    const content = contentRef.current;
    if (!inner || !content || boxWpx <= 0 || boxHpx <= 0) return;

    const fit = () => {
      const cw = Math.max(content.scrollWidth, content.offsetWidth);
      const ch = Math.max(content.scrollHeight, content.offsetHeight);
      const iw = inner.clientWidth;
      const ih = inner.clientHeight;
      if (cw <= 0 || ch <= 0 || iw <= 0 || ih <= 0) {
        setScale(1);
        return;
      }
      setScale(Math.min(iw / cw, ih / ch, 1) * 0.98);
    };

    fit();
    void document.fonts.ready.then(fit);
    const observer = new ResizeObserver(fit);
    observer.observe(content);
    return () => observer.disconnect();
  }, [fitKey, boxWpx, boxHpx, baseFont, showPort, align]);

  return (
    <div className="grid grid-cols-[24px_minmax(0,1fr)] grid-rows-[24px_minmax(220px,58vw)] sm:grid-cols-[36px_minmax(0,1fr)] sm:grid-rows-[28px_minmax(340px,34vw)]">
      <div className="flex items-end justify-center border-b border-r border-navy/10 bg-[#f3f4f6] pb-0.5 text-[0.5rem] uppercase tracking-[0.08em] text-navy/40">
        in
      </div>
      <RulerHorizontal max={canvasW} value={widthIn} />
      <RulerVertical max={canvasH} value={totalHeightIn} />
      <div
        ref={stageRef}
        className={`relative overflow-hidden ${transparent ? "design-board-check" : ""}`}
        style={{ backgroundColor: transparent ? undefined : backgroundHex }}
      >
        <div
          className="absolute overflow-hidden"
          style={{
            width: Math.max(boxWpx, 1),
            height: Math.max(boxHpx, 1),
            top: stage.h > 0 ? (stage.h - boxHpx) / 2 : inset,
            left:
              align === "left"
                ? inset
                : align === "right"
                  ? "auto"
                  : stage.w > 0
                    ? (stage.w - boxWpx) / 2
                    : inset,
            right: align === "right" ? inset : "auto",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 border border-dashed"
            style={{ borderColor: guide }}
          />
          <div
            className="pointer-events-none absolute left-1.5 top-1 z-10 text-[0.62rem] leading-none tabular-nums tracking-wide"
            style={{ color: guide }}
          >
            {widthIn}&quot; W × {heightIn}&quot; H
          </div>
          <div
            ref={innerRef}
            className="flex h-full w-full items-center justify-center overflow-hidden px-2.5 pb-2.5 pt-5"
            style={{
              justifyContent:
                align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center",
            }}
          >
            <div
              ref={contentRef}
              className="flex w-max max-w-none flex-col [&_p:first-child]:text-[1em] [&_p:last-child:not(:only-child)]:text-[length:var(--port-px)]"
              style={{
                alignItems: align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center",
                textAlign: align,
                fontSize: `${baseFont}px`,
                gap: `${Math.max(4, baseFont * 0.12)}px`,
                transform: `scale(${scale})`,
                transformOrigin:
                  align === "left" ? "left center" : align === "right" ? "right center" : "center",
                ["--port-px" as string]: `${portPx}px`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RulerHorizontal({ max, value }: { max: number; value: number }) {
  const { minor, major } = rulerStep(max);
  return (
    <div className="relative overflow-hidden border-b border-navy/10 bg-[#f3f4f6]">
      <div
        className="absolute inset-y-0 left-0 bg-blue/15"
        style={{ width: `${Math.min(100, (value / max) * 100)}%` }}
      />
      <div
        className="absolute bottom-0 left-0 h-1 bg-blue"
        style={{ width: `${Math.min(100, (value / max) * 100)}%` }}
      />
      {rulerMarks(max, minor).map((inch) => (
        <span
          key={inch}
          className={`absolute bottom-0 w-px ${inch % major === 0 ? "h-3 bg-navy/45" : "h-1.5 bg-navy/25"}`}
          style={{ left: `${(inch / max) * 100}%` }}
        />
      ))}
      {rulerMarks(max, major).map((inch) => (
        <span
          key={`label-${inch}`}
          className="absolute top-0.5 text-[0.55rem] tabular-nums text-navy/50"
          style={{ left: `${(inch / max) * 100}%`, transform: inch === 0 ? "none" : "translateX(-50%)" }}
        >
          {inch}
        </span>
      ))}
    </div>
  );
}

function RulerVertical({ max, value }: { max: number; value: number }) {
  const { minor, major } = rulerStep(max);
  return (
    <div className="relative overflow-hidden border-r border-navy/10 bg-[#f3f4f6]">
      <div
        className="absolute inset-x-0 top-0 bg-blue/15"
        style={{ height: `${Math.min(100, (value / max) * 100)}%` }}
      />
      <div
        className="absolute left-0 top-0 w-1 bg-blue"
        style={{ height: `${Math.min(100, (value / max) * 100)}%` }}
      />
      {rulerMarks(max, minor).map((inch) => (
        <span
          key={inch}
          className={`absolute left-0 h-px ${inch % major === 0 ? "w-3 bg-navy/45" : "w-1.5 bg-navy/25"}`}
          style={{ top: `${(inch / max) * 100}%` }}
        />
      ))}
      {rulerMarks(max, major).map((inch) => (
        <span
          key={`label-${inch}`}
          className="absolute left-1.5 text-[0.55rem] tabular-nums text-navy/50"
          style={{ top: `${(inch / max) * 100}%`, transform: inch === 0 ? "none" : "translateY(-50%)" }}
        >
          {inch}
        </span>
      ))}
    </div>
  );
}

function rulerMarks(max: number, step: number) {
  const marks: number[] = [];
  for (let inch = 0; inch <= max; inch += step) marks.push(inch);
  return marks;
}

function ToggleChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-11 rounded-md border px-3 text-xs uppercase tracking-[0.1em] ${
        active ? "border-blue bg-foam text-blue" : "border-navy/10 text-navy/70"
      }`}
    >
      {children}
    </button>
  );
}

function SwatchGrid({
  label,
  value,
  onChange,
  selectedName,
}: {
  label: string;
  value: string;
  onChange: (id: string) => void;
  selectedName?: string;
}) {
  return (
    <div>
      <p className="text-sm">
        {label}
        {selectedName ? <span className="text-navy/40"> — {selectedName}</span> : null}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {vinylColors.map((item) => (
          <button
            key={item.id}
            type="button"
            title={item.name}
            onClick={() => onChange(item.id)}
            className={`h-10 w-10 shrink-0 rounded-full border-2 ${
              value === item.id ? "border-navy" : "border-white shadow-sm"
            }`}
            style={{ backgroundColor: item.hex }}
          />
        ))}
      </div>
    </div>
  );
}

function Choice({
  active,
  title,
  body,
  onClick,
}: {
  active: boolean;
  title: string;
  body: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-11 rounded-md border px-3 py-2 text-left ${
        active ? "border-blue bg-white" : "border-navy/10 bg-white"
      }`}
    >
      <span className="block text-sm font-medium">{title}</span>
      <span className="block text-xs text-navy/50">{body}</span>
    </button>
  );
}
