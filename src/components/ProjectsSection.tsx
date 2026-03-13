import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "LAMPA",
    role: "Co-founder",
    description:
      "Coffee shop and educational space in Paris (17th arrondissement).",
    link: "https://www.instagram.com/lampa.paris",
    linkLabel: "Instagram",
  },
  {
    title: "Mentoring",
    role: "Mentor at Constructor University and privately",
    description:
      "Private mentoring for young professionals, managers and founders. At Constructor University I helped the team of CellKinetica develop their financial model, pitch deck and strategy. The team won the main €100k prize at Demo Day.",
    link: "https://www.linkedin.com/posts/konstantin-kostya-popadin-36104752_every-great-journey-starts-with-the-first-activity-7433229612027113472-n5Ps",
    linkLabel: "Reference",
  },
  {
    title: "Women in Tech — London",
    role: "Conference track lead (November 2025 and June 2026)",
    description:
      "Responsible for speaker outreach, program structure, content planning and final execution of the conference track.",
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-secondary/50 py-16 md:py-20">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl text-center mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-background rounded-xl p-6 md:p-8 border border-border flex flex-col"
            >
              <h3 className="font-display text-xl mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground font-medium mb-4">
                {project.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent mt-5 hover:underline"
                >
                  {project.linkLabel}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
