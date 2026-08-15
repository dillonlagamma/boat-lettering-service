"use client";

import { useState } from "react";

export function QuoteForm({ variant = "light" }: { variant?: "light" | "hero" }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const dark = variant === "hero";
  const field = dark ? "field-dark" : "field";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const form = new FormData(event.currentTarget);
    const first = String(form.get("first") ?? "");
    const last = String(form.get("last") ?? "");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "quote",
          name: `${first} ${last}`.trim(),
          email: String(form.get("email") ?? ""),
          message: String(form.get("message") ?? ""),
        }),
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
      <p className={dark ? "text-white" : "text-navy"}>
        Thanks — we will get back to you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input required name="first" placeholder="First Name" className={field} />
        <input required name="last" placeholder="Last Name" className={field} />
      </div>
      <input required type="email" name="email" placeholder="Email" className={field} />
      <textarea name="message" rows={3} placeholder="Message" className={`${field} sm:min-h-24`} />
      {error && <p className="text-sm text-red-300">{error}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className={dark ? "btn-blue w-full" : "btn-gold"}
      >
        {status === "sending" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
