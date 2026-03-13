import logoKpmg from "@/assets/logo-kpmg.png";
import logoDocplus from "@/assets/logo-docplus.png";
import logoBolt from "@/assets/logo-bolt.png";
import logoZenrooms from "@/assets/logo-zenrooms.png";
import logoRocket from "@/assets/logo-rocket-internet.png";
import logoVoggt from "@/assets/logo-voggt.png";
import logoFanatics from "@/assets/logo-fanatics.png";

const companies = [
  { name: "KPMG", logo: logoKpmg },
  { name: "Doc+", logo: logoDocplus },
  { name: "Bolt", logo: logoBolt },
  { name: "ZenRooms", logo: logoZenrooms },
  { name: "Rocket Internet", logo: logoRocket },
  { name: "Voggt", logo: logoVoggt },
  { name: "Fanatics", logo: logoFanatics },
];

const ExperienceSection = () => {
  return (
    <section className="container py-16 md:py-20">
      <h2 className="font-display text-2xl md:text-3xl text-center mb-12 max-w-2xl mx-auto leading-snug">
        10+ years of experience across international corporates, startups and scaleups.
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {companies.map((company) => (
          <div
            key={company.name}
            className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
