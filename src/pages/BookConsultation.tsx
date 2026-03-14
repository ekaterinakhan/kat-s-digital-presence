import { ArrowLeft, CalendarDays, CheckCircle2, Clock3, MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";

const consultationAreas = [
  "GTM and international expansion strategy",
  "Commercial operations and marketplace scaling",
  "Leadership coaching for operators and managers",
  "Career transitions into tech and startup environments",
];

const process = [
  {
    title: "Share your request",
    description: "Send a short brief with your goals, context, and the challenge you want to work through.",
    icon: MessageSquareText,
  },
  {
    title: "Confirm the format",
    description: "I’ll reply to confirm fit, timing, and the most useful consultation format for your situation.",
    icon: CalendarDays,
  },
  {
    title: "Meet and execute",
    description: "We use the session to solve the problem in a practical way, with clear next steps afterward.",
    icon: CheckCircle2,
  },
];

const BookConsultation = () => {
  return (
    <main className="min-h-screen">
      <section className="w-full px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Consultation
              </p>
              <h1 className="font-display mb-6 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-5xl lg:text-6xl">
                Book a strategic consultation for growth, expansion, or leadership questions.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                These sessions are designed for founders, operators, and teams who want practical support on
                growth, international rollout, team structure, or career decisions in tech.
              </p>
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-background/80 p-8 shadow-[0_24px_70px_rgba(110,78,45,0.08)]">
              <div className="mb-6 flex items-center gap-3 text-foreground">
                <Clock3 className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Typical format
                </span>
              </div>
              <p className="mb-3 text-2xl font-semibold text-foreground">45-60 minute session</p>
              <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                Remote consultation with follow-up notes and clear action points. Scheduling is confirmed manually
                after reviewing your request.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Request a consultation
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <section className="rounded-[2rem] border border-border/70 bg-background/72 p-8">
              <h2 className="font-display mb-6 text-2xl font-semibold">Topics we can cover</h2>
              <ul className="space-y-4">
                {consultationAreas.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 shrink-0 text-accent">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2rem] border border-border/70 bg-background/72 p-8">
              <h2 className="font-display mb-6 text-2xl font-semibold">How it works</h2>
              <div className="space-y-6">
                {process.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/80">
                        <Icon className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-foreground">{step.title}</h3>
                        <p className="text-base leading-relaxed text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookConsultation;
