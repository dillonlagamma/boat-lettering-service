import { NextResponse } from "next/server";
import { buildInquiryEmail, type InquiryPayload } from "@/lib/inquiry";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  const payload = (await request.json()) as InquiryPayload;

  if (!payload?.name || !payload?.email || !payload?.kind) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const email = buildInquiryEmail(payload);
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (accessKey) {
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

    if (!response.ok) {
      return NextResponse.json(
        { error: "Could not send the request.", mailto: email.mailto },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({
    ok: true,
    mailto: email.mailto,
  });
}
