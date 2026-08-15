"use client";

import { useState } from "react";
import type { InquiryKind } from "@/lib/inquiry";

const services = [
  "Boat name",
  "Graphics / decals",
  "Registration / hailing port",
  "Vinyl wrap",
  "Boat sign",
  "Hull striping",
  "Not sure yet",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(event.currentTarget);
    const payload = {
      kind: "contact" as InquiryKind,
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      message: String(form.get("message") ?? ""),
      fields: {
        boat: String(form.get("boat") ?? ""),
        service: String(form.get("service") ?? ""),
      },
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(data.error ?? "Request failed");
      setStatus("sent");
      event.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-seaglass/10 p-6 text-navy">
        <p className="font-display text-2xl">Request received.</p>
        <p className="mt-2 text-sm leading-7 text-navy/70">
          We will review your notes and call or email to confirm design, timing, and
          whether you want dockside install or shipped lettering.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
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
        Boat make / model
        <input name="boat" placeholder="Contender 39, Hatteras 54…" className="field" />
      </label>
      <label className="grid gap-2 text-sm">
        What do you need?
        <select name="service" className="field" defaultValue="Boat name">
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm">
        Notes
        <textarea name="message" rows={5} className="field" />
      </label>
      {error && <p className="text-sm text-red-700">{error}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-blue w-full disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}
