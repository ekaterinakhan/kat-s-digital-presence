import { Building2 } from "lucide-react";

const companies = [
  {
    name: "Fanatics",
    logo: "/fanatics.png",
    role: "Expansion / Commercial Operations",
    years: "2024 — Present",
    points: [
      "Led expansion initiatives for Fanatics Live in Europe.",
      "Worked on commercial partnerships, marketplace growth and creator ecosystem.",
      "Built operational frameworks for scaling live commerce across new markets.",
    ],
  },
  {
    name: "Voggt",
    logo: "/voggt.png",
    role: "Commercial Operations / Marketplace Growth",
    years: "2022 — 2024",
    points: [
      "Helped scale Voggt, a live shopping marketplace for collectibles.",
      "Worked on seller acquisition, marketplace supply growth and operational scaling.",
      "Collaborated closely with creators, collectors and internal teams to grow the platform.",
    ],
  },
  {
    name: "Bolt",
    logo: "/bolt.png",
    role: "Operations / Expansion",
    years: "2020 — 2021",
    points: [
      "Worked on operational growth and market expansion.",
      "Managed cross-functional projects between operations, partnerships and product teams.",
      "Focused on scaling marketplace supply and improving operational efficiency.",
    ],
  },
  {
    name: "ZenRooms / Rocket Internet",
    logo: "/rocketinternet.png",
    role: "Expansion / Operations",
    years: "2018 — 2020",
    points: [
      "Worked on international expansion and operational scaling.",
      "Supported market launch and growth initiatives across multiple geographies.",
      "Focused on building operational processes and partnerships.",
    ],
  },
  {
    name: "Doc+",
    logo: "/docplus.png",
    role: "Business Development / Operations",
    years: "2017 — 2018",
    points: [
      "Worked on growth and operational development for digital health services.",
      "Supported partnerships and market development initiatives.",
    ],
  },
  {
    name: "KPMG",
    logo: "/kpmg.png",
    role: "Consultant",
    years: "2014 — 2016",
    points: [
      "Worked on strategy and operational consulting projects.",
      "Focused on financial analysis, market research and business process improvement.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="container py-16 md:py-20">
      <h2 className="font-display text-2xl md:text-3xl text-center mb-4 max-w-2xl mx-auto leading-snug">
        Experience
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        10+ years of experience building and scaling international tech companies across Europe.
      </p>
      <div className="grid gap-6 max-w-3xl mx-auto">
        {companies.map((company) => (
          <div
            key={company.name}
            className="bg-card rounded-xl border border-border p-6 md:p-8 flex gap-5 md:gap-6"
          >
            <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg bg-secondary flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={company.logo}
                alt={company.name}
                className="w-full h-full object-contain p-1.5"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.remove("hidden");
                }}
              />
              <Building2 className="hidden w-6 h-6 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-display text-lg">{company.name}</h3>
                <span className="text-xs text-muted-foreground font-medium">{company.years}</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground mb-3">{company.role}</p>
              <ul className="space-y-1.5">
                {company.points.map((point, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-accent mt-1 shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
