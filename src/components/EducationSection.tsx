import { ArrowUpRight } from "lucide-react";

const education = [
  {
    school: "ACCA",
    degree: "In progress, 8/15 papers passed",
    year: "2011 - present",
    url: "https://www.accaglobal.com/gb/en.html",
  },
  {
    school: "CEMS",
    degree: "Master's degree in Management",
    year: "2017",
    url: "https://cems.org/",
  },
  {
    school: "GSOM SPbU",
    degree: "Master's degree in International Business",
    year: "2016",
    url: "https://gsom.spbu.ru/",
  },
];

const EducationSection = () => {
  return (
    <section className="w-full py-20 md:py-24">
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">Education</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {education.map((item) => (
            <a
              key={item.school}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[148px] items-start justify-between gap-6 rounded-[1.75rem] border border-border/60 bg-background/70 px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(110,78,45,0.10)] md:min-h-[160px] md:px-7 md:py-7"
            >
              <div className="min-w-0">
                <h3 className="font-display text-xl font-semibold md:text-2xl">{item.school}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground md:text-lg">{item.degree}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground md:text-sm">
                  {item.year}
                </p>
              </div>

              <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/90 text-foreground/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
