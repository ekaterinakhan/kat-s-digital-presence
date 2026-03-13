const highlights = [
  {
    title: "Marketplace scaling",
    description:
      "Worked on scaling international tech marketplaces across Europe including Bolt, Voggt and Fanatics.",
  },
  {
    title: "Startup mentoring",
    description:
      "Mentored startup teams and young professionals, including supporting the CellKinetica team at Constructor University which won the €100k Demo Day prize.",
  },
  {
    title: "Community building",
    description:
      "Track lead for Women in Tech London conference editions (2025 and 2026), responsible for speaker outreach and program creation.",
  },
  {
    title: "Entrepreneurship",
    description:
      "Co-founded LAMPA, a coffee shop and educational space in Paris focused on community and learning.",
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl text-center mb-12">
          Selected Impact
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-secondary/50 rounded-xl p-6 md:p-8 border border-border"
            >
              <h3 className="font-display text-lg mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
