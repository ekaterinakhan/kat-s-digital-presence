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
    <section className="relative w-full overflow-hidden border-y border-border/60 bg-[rgba(255,255,255,0.24)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(9,63,180,0.04),rgba(255,255,255,0.12),rgba(9,63,180,0.04))]" />
      <div className="w-full px-6 py-7 md:px-10 md:py-8 lg:px-16">
        <div className="flex items-center justify-between gap-8 overflow-x-auto pb-2 md:gap-10 md:pb-0 lg:gap-14">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex h-20 min-w-[140px] shrink-0 items-center justify-center grayscale-[25%] opacity-75 transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-24 md:min-w-[160px] lg:h-28 lg:min-w-[180px]"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-12 w-full object-contain md:max-h-14 lg:max-h-16"
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
