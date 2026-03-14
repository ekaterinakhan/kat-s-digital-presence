import { User } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="container py-12 md:py-18">
      <div className="relative overflow-hidden py-10 md:py-12">
        <div className="absolute left-[-3rem] top-[5rem] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(9,63,180,0.22),transparent_65%)] blur-2xl" />
        <div className="absolute right-[1rem] top-[-1rem] h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(75,128,255,0.16),transparent_62%)] blur-3xl" />

        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-border/80 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            UK - France based
          </span>
          <span className="rounded-full bg-[linear-gradient(90deg,rgba(9,63,180,0.14),rgba(75,128,255,0.12),rgba(148,200,255,0.14))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
            Available for advisory work
          </span>
          <span className="rounded-full border border-border/80 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Mentoring
          </span>
          <span className="rounded-full border border-border/80 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Entrepreneur
          </span>
        </div>

        <div className="relative flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
          <div className="shrink-0">
            <div className="mesh-glow flex h-56 w-56 items-center justify-center overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(34,24,66,0.12)] md:h-80 md:w-72 lg:h-[24rem] lg:w-[22rem]">
              <img
                src="/profile-photo.jpg"
                alt="Ekaterina Khan"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.remove("hidden");
                }}
              />
              <User className="hidden h-20 w-20 text-muted-foreground" />
            </div>
          </div>

          <div className="max-w-3xl text-center md:text-left">
            <h1 className="font-display mb-5 text-4xl font-semibold leading-[0.94] md:text-[3.4rem] lg:text-[4rem]">
              GTM and Commercial Operations leader scaling international tech companies.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-[1.45rem]">
              I build and lead teams with empathy, trust and clear execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
