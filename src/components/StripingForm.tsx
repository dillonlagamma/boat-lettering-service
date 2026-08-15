"use client";

import { useId, useState } from "react";
import { previewBackgrounds, stripeSizes, vinylColors } from "@/lib/site";

const hullColors = previewBackgrounds.filter((item) => item.id !== "transparent");

function mixHex(hex: string, toward: string, amount: number) {
  const read = (value: string) => [
    Number.parseInt(value.slice(1, 3), 16),
    Number.parseInt(value.slice(3, 5), 16),
    Number.parseInt(value.slice(5, 7), 16),
  ];
  const [r1, g1, b1] = read(hex);
  const [r2, g2, b2] = read(toward);
  const channel = (from: number, to: number) =>
    Math.round(from + (to - from) * amount)
      .toString(16)
      .padStart(2, "0");
  return `#${channel(r1, r2)}${channel(g1, g2)}${channel(b1, b2)}`;
}

function isDarkHex(hex: string) {
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 140;
}

function StripeHullPreview({
  hex,
  hullHex,
  hullName,
  inches,
  label,
}: {
  hex: string;
  hullHex: string;
  hullName: string;
  inches: number;
  label: string;
}) {
  const uid = useId().replace(/:/g, "");
  const stripeWidth = Math.max(2.4, inches * 7.4);
  const metallic = hex === "#c4a35a" || hex === "#b7b7b2";
  const darkHull = isDarkHex(hullHex);
  const hullLight = mixHex(hullHex, "#ffffff", darkHull ? 0.22 : 0.42);
  const hullMid = mixHex(hullHex, "#000000", darkHull ? 0.08 : 0.06);
  const hullShade = mixHex(hullHex, "#000000", darkHull ? 0.28 : 0.2);
  const cabin = mixHex(hullHex, "#ffffff", darkHull ? 0.18 : 0.55);
  const hull =
    "M52 146C92 112 148 88 214 78c78-12 168-8 258 2 62 7 128 10 168 2l10 10 2 78c-48 12-118 16-198 12-102-6-208-22-292-6-48 10-86 30-114 54 8-54 22-104 50-152z";
  const stripe =
    "M98 138C188 118 312 112 438 120c86 6 158 12 206 6";

  return (
    <div className="overflow-hidden rounded-2xl bg-[#9ec4d4]">
      <svg viewBox="0 0 720 248" className="block h-auto w-full" aria-hidden>
        <defs>
          <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d7eaf3" />
            <stop offset="70%" stopColor="#b5d3e3" />
            <stop offset="100%" stopColor="#8fb8cc" />
          </linearGradient>
          <linearGradient id={`${uid}-water`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3d7a8c" />
            <stop offset="50%" stopColor="#245866" />
            <stop offset="100%" stopColor="#163944" />
          </linearGradient>
          <linearGradient id={`${uid}-hull`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={hullLight} />
            <stop offset="40%" stopColor={hullHex} />
            <stop offset="78%" stopColor={hullMid} />
            <stop offset="100%" stopColor={hullShade} />
          </linearGradient>
          <linearGradient id={`${uid}-sheen`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#000" stopOpacity="0.2" />
            <stop offset="26%" stopColor="#fff" stopOpacity="0.28" />
            <stop offset="54%" stopColor="#fff" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.18" />
          </linearGradient>
          <linearGradient id={`${uid}-bottom`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c3438" />
            <stop offset="100%" stopColor="#121618" />
          </linearGradient>
          <linearGradient id={`${uid}-vinyl`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity={metallic ? 0.5 : 0.3} />
            <stop offset="45%" stopColor="#fff" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity={metallic ? 0.3 : 0.24} />
          </linearGradient>
          <linearGradient id={`${uid}-rail`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#eceff2" />
            <stop offset="55%" stopColor="#8b9299" />
            <stop offset="100%" stopColor="#4e555c" />
          </linearGradient>
          <clipPath id={`${uid}-clip`}>
            <path d={hull} />
          </clipPath>
          <filter id={`${uid}-soft`} x="-8%" y="-20%" width="116%" height="150%">
            <feDropShadow dx="0" dy="7" stdDeviation="8" floodColor="#0b1c24" floodOpacity="0.3" />
          </filter>
        </defs>

        <rect width="720" height="248" fill={`url(#${uid}-sky)`} />
        <path d="M0 166c70-10 140 8 214 2 86-6 150-18 236-8 78 9 140 4 270 12v76H0z" fill={`url(#${uid}-water)`} />
        <path d="M0 178c88-8 168 10 252 2 92-8 164-16 248-6 72 8 128 2 220 10" fill="none" stroke="#b7e0ea" strokeOpacity="0.16" />
        <path d="M0 196c96 8 176-8 268-2 90 6 154 14 246 4 70-8 126-2 206 10" fill="none" stroke="#061318" strokeOpacity="0.18" />

        <g filter={`url(#${uid}-soft)`}>
          <path d={hull} fill={`url(#${uid}-hull)`} />
        </g>

        <g clipPath={`url(#${uid}-clip)`}>
          <rect x="40" y="60" width="640" height="160" fill={`url(#${uid}-sheen)`} />
          <path d="M40 168h640v80H40z" fill={`url(#${uid}-bottom)`} />
          <path d="M40 167h640" stroke="#f7f3ea" strokeWidth="1.4" strokeOpacity="0.28" />
          <path d={stripe} fill="none" stroke={hex} strokeWidth={stripeWidth} strokeLinecap="round" />
          <path d={stripe} fill="none" stroke={`url(#${uid}-vinyl)`} strokeWidth={stripeWidth} strokeLinecap="round" />
          <ellipse cx="228" cy="102" rx="10" ry="6.5" fill={darkHull ? "#0b1218" : "#1a2833"} opacity={darkHull ? 0.7 : 0.5} />
          <ellipse cx="258" cy="100" rx="10" ry="6.5" fill={darkHull ? "#0b1218" : "#1a2833"} opacity={darkHull ? 0.7 : 0.5} />
          <ellipse cx="288" cy="99" rx="10" ry="6.5" fill={darkHull ? "#0b1218" : "#1a2833"} opacity={darkHull ? 0.65 : 0.45} />
        </g>

        <path d="M58 142C108 108 168 86 220 78c80-12 170-8 258 2 64 7 130 10 172 3" fill="none" stroke={`url(#${uid}-rail)`} strokeWidth="4.2" strokeLinecap="round" />
        <path d="M292 74c34-16 78-24 116-16 24 5 42 16 54 28" fill="none" stroke={cabin} strokeWidth="8" strokeLinecap="round" />
        <path d="M304 68c26-8 58-10 84 4" fill="none" stroke="#2a333c" strokeWidth="2" strokeOpacity={darkHull ? 0.45 : 0.28} />

        <text x="28" y="230" fill="#e8f4f8" fillOpacity="0.7" fontSize="11" fontFamily="ui-sans-serif, system-ui">
          {label} vinyl on a {hullName.toLowerCase()}
        </text>
      </svg>
    </div>
  );
}

export function StripingForm() {
  const [color, setColor] = useState<string>(vinylColors[2].id);
  const [hullId, setHullId] = useState<string>("white");
  const [size, setSize] = useState<string>(stripeSizes[3].id);
  const [qty, setQty] = useState(1);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const selectedColor = vinylColors.find((item) => item.id === color) ?? vinylColors[0];
  const selectedHull = hullColors.find((item) => item.id === hullId) ?? hullColors[0];
  const selectedSize = stripeSizes.find((item) => item.id === size) ?? stripeSizes[0];

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
          kind: "striping",
          name: String(form.get("name") ?? ""),
          email: String(form.get("email") ?? ""),
          phone: String(form.get("phone") ?? ""),
          message: String(form.get("notes") ?? ""),
          fields: {
            color: selectedColor.name,
            size: selectedSize.label,
            quantity: qty,
            length: "150 ft per roll",
          },
        }),
      });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(data.error ?? "Request failed");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-seaglass/10 p-6">
        <p className="font-display text-2xl">Striping request sent.</p>
        <p className="mt-2 text-sm leading-7 text-navy/70">
          We will confirm color, size, and shipping or install.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <div>
        <p className="text-sm">Stripe color</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {vinylColors.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setColor(item.id)}
              title={item.name}
              className={`h-10 w-10 shrink-0 rounded-full border-2 ${
                color === item.id ? "border-navy" : "border-white"
              }`}
              style={{ backgroundColor: item.hex }}
            />
          ))}
        </div>
        <p className="mt-2 text-xs text-navy/50">{selectedColor.name} · one solid color per roll</p>
      </div>

      <div>
        <p className="text-sm">Hull color</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {hullColors.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setHullId(item.id)}
              title={item.name}
              className={`h-10 w-10 shrink-0 rounded-full border-2 ${
                hullId === item.id ? "border-navy" : "border-white"
              }`}
              style={{ backgroundColor: item.hex }}
            />
          ))}
        </div>
        <p className="mt-2 text-xs text-navy/50">{selectedHull.name} · preview only</p>
      </div>

      <StripeHullPreview
        hex={selectedColor.hex}
        hullHex={selectedHull.hex}
        hullName={selectedHull.name}
        inches={selectedSize.inches}
        label={selectedSize.label}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          Stripe width
          <select
            className="field"
            value={size}
            onChange={(event) => setSize(event.target.value)}
          >
            {stripeSizes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm">
          Quantity of 150 ft rolls
          <input
            className="field"
            type="number"
            min={1}
            max={8}
            value={qty}
            onChange={(event) => setQty(Number(event.target.value))}
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm">
        Name
        <input required name="name" className="field" />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          Email
          <input required type="email" name="email" className="field" />
        </label>
        <label className="grid gap-2 text-sm">
          Phone
          <input name="phone" className="field" />
        </label>
      </div>
      <label className="grid gap-2 text-sm">
        Notes
        <textarea name="notes" rows={3} className="field" />
      </label>
      {error && <p className="text-sm text-red-700">{error}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-blue w-full disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request these rolls"}
      </button>
    </form>
  );
}
