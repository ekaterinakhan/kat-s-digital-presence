import { GraduationCap } from "lucide-react";

const education = [
  {
    logo: "/logos/gsom.png",
    school: "GSOM SPbU",
    degree: "Master's degree in International Business",
    year: "2016",
  },
  {
    logo: "/logos/cems.png",
    school: "CEMS",
    degree: "Master's degree in Management",
    year: "2017",
  },
];

const EducationSection = () => {
  return (
    <section className="container py-16 md:py-20">
      <h2 className="font-display text-2xl md:text-3xl text-center mb-12">
        Education
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 max-w-2xl mx-auto">
        {education.map((item) => (
          <div key={item.school} className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-lg bg-secondary flex items-center justify-center overflow-hidden shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={item.logo}
                alt={item.school}
                className="h-full w-full object-contain p-1.5"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.remove("hidden");
                }}
              />
              <GraduationCap className="hidden w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-display text-lg">{item.school}</h3>
              <p className="text-sm text-muted-foreground">{item.degree}</p>
              <p className="text-xs text-muted-foreground">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
