import { User } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="container py-12 md:py-18">
      <div className="py-6 md:py-8">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[rgba(9,63,180,0.14)] bg-[rgba(9,63,180,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
            UK - France based
          </span>
          <span className="rounded-full border border-[rgba(74,108,174,0.16)] bg-[rgba(107,138,204,0.11)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
            Available for advisory work
          </span>
          <span className="rounded-full border border-[rgba(58,113,154,0.16)] bg-[rgba(112,172,199,0.1)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
            Mentoring
          </span>
          <span className="rounded-full border border-[rgba(93,107,168,0.16)] bg-[rgba(138,147,209,0.1)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
            Entrepreneur
          </span>
        </div>

        <div className="relative flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
          <div className="shrink-0">
            <div className="flex h-56 w-56 items-center justify-center overflow-hidden rounded-[2rem] md:h-80 md:w-72 lg:h-[24rem] lg:w-[22rem]">
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
