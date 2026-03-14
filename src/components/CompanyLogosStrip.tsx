import { Building2 } from "lucide-react";

const companies = [
  { name: "Fanatics", logo: "/fanatics.png" },
  { name: "Voggt", logo: "/voggt.png" },
  { name: "Bolt", logo: "/bolt.png" },
  { name: "ZenRooms / Rocket Internet", logo: "/rocketinternet.png" },
  { name: "Doc+", logo: "/docplus.png" },
  { name: "KPMG", logo: "/kpmg.png" },
];

const CompanyLogosStrip = () => {
  return (
    <section className="relative w-full overflow-hidden border-y border-border/60 bg-[linear-gradient(90deg,rgba(221,233,255,0.55),rgba(237,230,255,0.48),rgba(234,247,255,0.52))]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_50%,rgba(99,156,255,0.18),transparent_18%),radial-gradient(circle_at_88%_50%,rgba(230,117,210,0.16),transparent_18%)]" />
      <div className="w-full px-6 py-8 md:px-10 lg:px-16">
        <div className="flex items-center justify-between gap-8 overflow-x-auto pb-2 md:gap-10 md:pb-0 lg:gap-14">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex h-24 min-w-[150px] shrink-0 items-center justify-center grayscale opacity-65 transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-28 md:min-w-[170px] lg:h-32 lg:min-w-[190px]"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-14 w-full object-contain md:max-h-16 lg:max-h-20"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.remove("hidden");
                }}
              />
              <Building2 className="hidden h-8 w-8 text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogosStrip;
