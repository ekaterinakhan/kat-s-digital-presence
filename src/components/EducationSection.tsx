import logoGsom from "@/assets/logo-gsom.png";
import logoCems from "@/assets/logo-cems.png";

const education = [
  {
    logo: logoGsom,
    school: "GSOM SPbU",
    degree: "Master's degree in International Business",
    year: "2016",
  },
  {
    logo: logoCems,
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
            <img
              src={item.logo}
              alt={item.school}
              className="h-14 w-14 object-contain shrink-0"
            />
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
