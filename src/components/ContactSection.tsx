import { FormEvent, useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

type FormState = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  company: string;
};

const emptyForm = (): FormState => ({
  fullName: "",
  email: "",
  subject: "",
  message: "",
  company: "",
});

const ContactSection = () => {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileSiteKey, setTurnstileSiteKey] = useState("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const widgetContainerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  const resetForm = () => {
    setForm(emptyForm());
    setTurnstileToken("");
    if (window.turnstile && widgetIdRef.current) {
      window.turnstile.reset(widgetIdRef.current);
    }
  };

  useEffect(() => {
    let cancelled = false;

    const loadSiteKey = async () => {
      try {
        const response = await fetch("/api/contact");
        const payload = (await response.json().catch(() => null)) as
          | { siteKey?: string; error?: string }
          | null;

        if (!response.ok || !payload?.siteKey) {
          throw new Error(payload?.error ?? "Turnstile site key is unavailable.");
        }

        if (!cancelled) {
          setTurnstileSiteKey(payload.siteKey);
          setTurnstileReady(true);
        }
      } catch (error) {
        console.error(error);
        if (!cancelled) {
          setTurnstileReady(true);
        }
      }
    };

    loadSiteKey();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!turnstileSiteKey || !widgetContainerRef.current) {
      return;
    }

    const renderWidget = () => {
      if (!window.turnstile || !widgetContainerRef.current || widgetIdRef.current) {
        return;
      }

      widgetIdRef.current = window.turnstile.render(widgetContainerRef.current, {
        sitekey: turnstileSiteKey,
        theme: "light",
        size: "flexible",
        callback: (token: string) => setTurnstileToken(token),
        "expired-callback": () => {
          setTurnstileToken("");
          if (widgetIdRef.current) {
            window.turnstile?.reset(widgetIdRef.current);
          }
        },
        "error-callback": () => {
          setTurnstileToken("");
          toast.error("Captcha failed to load. Please refresh and try again.");
        },
      });
    };

    if (window.turnstile) {
      renderWidget();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src^="https://challenges.cloudflare.com/turnstile/v0/api.js"]',
    );

    if (existingScript) {
      existingScript.addEventListener("load", renderWidget, { once: true });
      return () => existingScript.removeEventListener("load", renderWidget);
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", renderWidget, { once: true });
    document.head.appendChild(script);

    return () => script.removeEventListener("load", renderWidget);
  }, [turnstileSiteKey]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (!form.fullName || !form.email || !form.subject || !form.message) {
      toast.error("Please complete all fields before sending your request.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!turnstileToken) {
      toast.error("Please complete the security check before sending your request.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          subject: form.subject,
          message: form.message,
          company: form.company,
          turnstileToken,
        }),
      });

      const payload = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        toast.error(payload?.error ?? "Something went wrong while sending your message.");
        return;
      }

      toast.success("Your message has been sent.");
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error("Unable to send your message right now. Please try again shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(300px,0.7fr)_minmax(0,0.95fr)] lg:items-start lg:gap-10">
          <div className="max-w-lg">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">Contact</p>
            <h2 className="font-display mb-5 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-5xl">
              Let’s talk about growth, operations, or a potential collaboration.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Send a message directly through the form and I will get back to you personally.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/khan-ekaterina/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center text-foreground transition-transform duration-200 hover:scale-105 hover:text-primary"
              >
                <CiLinkedin className="h-12 w-12" />
              </a>
              <a
                href="https://www.instagram.com/ekaterinakhan_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center text-foreground transition-transform duration-200 hover:scale-105 hover:text-primary"
              >
                <CiInstagram className="h-12 w-12" />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="section-panel mesh-glow w-full max-w-[920px] justify-self-end p-6 md:p-8"
          >
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))}
              className="hidden"
              aria-hidden="true"
            />
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full name</Label>
                <Input
                  id="fullName"
                  required
                  value={form.fullName}
                  onChange={(event) => setForm((current) => ({ ...current, fullName: event.target.value }))}
                  placeholder="Your full name"
                  className="h-12 rounded-2xl bg-background/90"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  placeholder="you@example.com"
                  className="h-12 rounded-2xl bg-background/90"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  required
                  value={form.subject}
                  onChange={(event) => setForm((current) => ({ ...current, subject: event.target.value }))}
                  placeholder="How can I help?"
                  className="h-12 rounded-2xl bg-background/90"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  required
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  placeholder="Tell me a little about your request."
                  className="min-h-[180px] rounded-2xl bg-background/90"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label>Security check</Label>
                {turnstileSiteKey ? (
                  <div ref={widgetContainerRef} className="min-h-[68px]" />
                ) : !turnstileReady ? (
                  <p className="text-sm text-muted-foreground">Loading security check...</p>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Turnstile is not configured yet. Please check Cloudflare Pages settings.
                  </p>
                )}
              </div>

              <div className="flex items-end md:justify-end">
                <Button type="submit" size="lg" disabled={isSubmitting} className="h-12 w-full rounded-full md:w-auto">
                  <Mail className="h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
