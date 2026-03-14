import { Building2 } from "lucide-react";

const companies = [
  {
    name: "Fanatics",
    logo: "/fanatics.png",
    url: "https://www.fanatics.live/",
    role: "Head of Expansion",
    location: "Paris - London",
    years: "Oct 2023 - Present",
    points: [
      "Launched Fanatics Live in the UK in 3 months and signed 15 top sellers for launch.",
      "Led 30+ promotional events and campaigns, including partnerships with WWE, Sidemen, and tennis and football athletes.",
      "Improved contribution margin by 20 percentage points over 5 months while overseeing DACH and UK P&Ls and a team of 8.",
    ],
  },
  {
    name: "Voggt",
    logo: "/voggt.png",
    url: "https://voggt.com/",
    role: "Regional Commercial Manager",
    location: "Paris, France",
    years: "2022 - 2023",
    points: [
      "Supported marketplace growth for a live shopping platform focused on collectibles.",
      "Worked on seller acquisition, supply growth, and operational scaling across the marketplace.",
      "Partnered closely with creators, collectors, and internal teams to strengthen platform growth.",
    ],
  },
  {
    name: "Bolt",
    logo: "/bolt.png",
    url: "https://bolt.eu/",
    role: "Regional Manager Baltic & CIS",
    location: "Moscow - Tallinn",
    years: "Jul 2018 - Apr 2021",
    points: [
      "Managed 6 country teams with 80+ employees and more than $300M ARR, covering 15% of global GMV and 23% of rides volume.",
      "Grew rides volume by 513% and reached the #1 ride-hailing position in Ukraine, outperforming Uber and Uklon.",
      "Increased Baltic market share from 82% to 85% during pauses between COVID waves.",
      "Led GTM for new markets and products, including the Russia launch in 2 months, 12 tier-2 cities in Ukraine, scooters, child seats, and COVID-protection categories.",
    ],
  },
  {
    name: "DOC+",
    logo: "/docplus.png",
    role: "Head of Regional Branch",
    location: "Saint Petersburg - Moscow",
    years: "Mar 2017 - Jun 2018",
    points: [
      "Built a regional business with $300K ARR from the core service and reached top-2 among on-demand clinics in the city.",
      "Signed 10 leading insurance companies and partnered with 7 of the largest medical centers.",
      "Launched new products including medical tests and newborn massage, while managing an on-demand marketplace with a 97% request-to-order completion rate versus an 80% industry average.",
    ],
  },
  {
    name: "Rocket Internet / ZenRooms",
    logo: "/rocketinternet.png",
    role: "Operations Manager",
    location: "Bangkok, Thailand",
    years: "2016 - 2017",
    points: [
      "Worked on operational scaling and international expansion initiatives in fast-growth markets.",
      "Supported market launch execution, local operations, and partnership development.",
      "Built hands-on experience in cross-border expansion inside a high-speed Rocket Internet environment.",
    ],
  },
  {
    name: "KPMG",
    logo: "/kpmg.png",
    url: "https://kpmg.com/xx/en.html",
    role: "Auditor",
    location: "Saint Petersburg, Russia",
    years: "2014 - 2016",
    points: [
      "Worked on strategy and operational consulting projects for corporate clients.",
      "Focused on financial analysis, market research, and business process improvement.",
      "Built a strong foundation in structured problem-solving and analytical decision-making.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="container py-16 md:py-20">
      <div className="mb-12 max-w-2xl">
        <h2 className="font-display text-2xl md:text-3xl mb-4 leading-snug">Experience</h2>
        <p className="text-left text-muted-foreground text-lg leading-relaxed">
          10+ years of experience building and scaling international tech companies across Europe.
        </p>
      </div>
      <div className="grid gap-0">
        {companies.map((company) => (
          <div
            key={company.name}
            className="grid items-start gap-6 border-b border-border/70 py-8 md:grid-cols-[190px_minmax(0,1fr)_170px] md:gap-10 md:py-10"
          >
            <div className="space-y-5">
              {company.url ? (
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={company.name}
                  className="flex h-16 w-16 items-center justify-center overflow-hidden grayscale transition-all duration-300 hover:scale-105 hover:grayscale-0 md:h-20 md:w-20"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                  <Building2 className="hidden h-8 w-8 text-muted-foreground" />
                </a>
              ) : (
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden grayscale transition-all duration-300 hover:grayscale-0 md:h-20 md:w-20">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                  <Building2 className="hidden h-8 w-8 text-muted-foreground" />
                </div>
              )}
              <div className="space-y-4">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Role
                  </p>
                  <p className="text-base font-medium text-foreground">{company.role}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Location
                  </p>
                  <p className="text-base text-muted-foreground">{company.location}</p>
                </div>
              </div>
            </div>
            <div className="min-w-0 max-w-4xl">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Results
                </p>
                <ul className="space-y-2.5">
                  {company.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 shrink-0 text-accent">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:justify-self-end md:text-right">
              <span className="text-sm font-medium text-muted-foreground">{company.years}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
