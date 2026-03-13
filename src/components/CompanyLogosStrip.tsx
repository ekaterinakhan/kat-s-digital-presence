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
    <section className="w-full border-y border-border/60 bg-secondary/20">
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
