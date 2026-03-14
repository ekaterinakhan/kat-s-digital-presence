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
        <div className="mb-14 max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">Education</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {education.map((item) => (
            <a
              key={item.school}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[220px] items-end rounded-[2rem] border border-border/60 bg-background/70 px-7 py-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(110,78,45,0.10)] md:min-h-[260px] md:px-8 md:py-10"
            >
              <div className="min-w-0">
                <h3 className="font-display text-2xl font-semibold">{item.school}</h3>
                <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{item.degree}</p>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  {item.year}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
