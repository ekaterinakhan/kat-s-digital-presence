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
    title: "Ladies Who Tech — London",
    role: "Conference track lead (November 2025 and June 2026)",
    description:
      "Responsible for speaker outreach, program structure, content planning and final execution of the conference track.",
    link: "https://ladieswhotech.co.uk/",
    linkLabel: "Website",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-display section-title text-3xl md:text-4xl">Projects</h2>
        </div>
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group section-panel relative flex min-h-[340px] flex-col overflow-hidden rounded-[2rem] p-7 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-[hsl(324_42%_74%)] hover:shadow-[0_26px_70px_rgba(75,45,110,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:min-h-[360px] md:p-8 lg:min-h-[380px]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,173,112,0.26),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(237,125,198,0.22),transparent_28%),radial-gradient(circle_at_center,rgba(126,116,255,0.16),transparent_44%),radial-gradient(circle_at_80%_80%,rgba(97,226,255,0.12),transparent_24%)] opacity-75 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col">
                <h3 className="font-display mb-2 text-[2rem] font-semibold leading-tight tracking-[-0.04em]">
                  {project.title}
                </h3>
                <p className="mb-6 text-base font-medium leading-snug text-muted-foreground">
                  {project.role}
                </p>
                <p className="flex-1 text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                  {project.linkLabel}
                  <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
