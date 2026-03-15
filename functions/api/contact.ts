type ContactRequest = {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
  company?: string;
  turnstileToken?: string;
};

type Env = {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL: string;
  TURNSTILE_SECRET_KEY: string;
};

const json = (body: Record<string, string>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });

const sanitize = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let payload: ContactRequest;

  try {
    payload = (await request.json()) as ContactRequest;
  } catch {
    return json({ error: "Invalid request payload." }, 400);
  }

  const fullName = sanitize(payload.fullName);
  const email = sanitize(payload.email);
  const subject = sanitize(payload.subject);
  const message = sanitize(payload.message);
  const company = sanitize(payload.company);
  const turnstileToken = sanitize(payload.turnstileToken);

  if (company) {
    return json({ ok: "Message accepted." });
  }

  if (!fullName || !email || !subject || !message) {
    return json({ error: "Please complete all form fields." }, 400);
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return json({ error: "Please provide a valid email address." }, 400);
  }

  if (!turnstileToken) {
    return json({ error: "Captcha verification is required." }, 400);
  }

  if (!env.TURNSTILE_SECRET_KEY) {
    return json({ error: "Captcha is not configured yet." }, 500);
  }

  const ipAddress =
    request.headers.get("CF-Connecting-IP") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    undefined;

  const turnstileResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      secret: env.TURNSTILE_SECRET_KEY,
      response: turnstileToken,
      remoteip: ipAddress,
    }),
  });

  const turnstilePayload = (await turnstileResponse.json().catch(() => null)) as
    | { success?: boolean; "error-codes"?: string[] }
    | null;

  if (!turnstilePayload?.success) {
    console.error("Turnstile verification failed:", turnstilePayload?.["error-codes"]);
    return json({ error: "Captcha verification failed. Please try again." }, 400);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
    return json({ error: "Email delivery is not configured yet." }, 500);
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `[Website inquiry] ${subject}`,
      text: [
        `Full name: ${fullName}`,
        `Email: ${email}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!resendResponse.ok) {
    const resendError = await resendResponse.text();
    console.error("Resend error:", resendError);
    return json({ error: "Message delivery failed. Please try again later." }, 502);
  }

  return json({ ok: "Message sent." });
};
