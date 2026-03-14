import { FormEvent, useState } from "react";
import { Mail, RefreshCw } from "lucide-react";
import LinkedInIcon from "@/components/LinkedInIcon";
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
  captcha: string;
};

type CaptchaChallenge = {
  answer: number;
  label: string;
};

const createCaptchaChallenge = (): CaptchaChallenge => {
  const first = Math.floor(Math.random() * 7) + 2;
  const second = Math.floor(Math.random() * 6) + 3;

  return {
    answer: first + second,
    label: `What is ${first} + ${second}?`,
  };
};

const emptyForm = (): FormState => ({
  fullName: "",
  email: "",
  subject: "",
  message: "",
  captcha: "",
});

const ContactSection = () => {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [captchaChallenge, setCaptchaChallenge] = useState<CaptchaChallenge>(createCaptchaChallenge);

  const resetForm = () => {
    setForm(emptyForm());
    setCaptchaChallenge(createCaptchaChallenge());
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.fullName || !form.email || !form.subject || !form.message || !form.captcha) {
      toast.error("Please complete all fields before sending your request.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (Number(form.captcha) !== captchaChallenge.answer) {
      toast.error("Captcha answer is incorrect. Please try again.");
      setCaptchaChallenge(createCaptchaChallenge());
      setForm((current) => ({ ...current, captcha: "" }));
      return;
    }

    const mailtoSubject = encodeURIComponent(`[Website inquiry] ${form.subject}`);
    const mailtoBody = encodeURIComponent(
      [
        `Full name: ${form.fullName}`,
        `Email: ${form.email}`,
        "",
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:kat@scariot.fr?subject=${mailtoSubject}&body=${mailtoBody}`;
    toast.success("Your email draft is opening.");
    resetForm();
  };

  return (
    <section id="contact" className="w-full py-20 md:py-24">
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">Contact</p>
            <h2 className="font-display mb-5 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-5xl">
              Let’s talk about growth, operations, or a potential collaboration.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Send a message directly through the form and I will get back to you personally.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="https://www.linkedin.com/in/khan-ekaterina/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <LinkedInIcon className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="section-panel mesh-glow p-6 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full name</Label>
                <Input
                  id="fullName"
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
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  placeholder="Tell me a little about your request."
                  className="min-h-[180px] rounded-2xl bg-background/90"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="captcha">Captcha</Label>
                <div className="flex items-center gap-3">
                  <Input
                    id="captcha"
                    inputMode="numeric"
                    value={form.captcha}
                    onChange={(event) => setForm((current) => ({ ...current, captcha: event.target.value }))}
                    placeholder={captchaChallenge.label}
                    className="h-12 rounded-2xl bg-background/90"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 rounded-2xl"
                    onClick={() => setCaptchaChallenge(createCaptchaChallenge())}
                    aria-label="Refresh captcha"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">{captchaChallenge.label}</p>
              </div>

              <div className="flex items-end md:justify-end">
                <Button type="submit" size="lg" className="h-12 w-full rounded-full md:w-auto">
                  <Mail className="h-4 w-4" />
                  Send message
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
