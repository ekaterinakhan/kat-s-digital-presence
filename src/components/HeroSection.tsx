import { Linkedin, Mail, User } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="container py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="shrink-0">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-secondary overflow-hidden bg-secondary flex items-center justify-center">
            <img
              src="/profile-photo.jpg"
              alt="Ekaterina Khan"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling?.classList.remove("hidden");
              }}
            />
            <User className="hidden w-16 h-16 text-muted-foreground" />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-4">
            GTM and Commercial Operations leader scaling international tech companies.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            I build and lead teams with empathy, trust and clear execution.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/khan-ekaterina/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-medium transition-all hover:opacity-90"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="mailto:kat@scariot.fr"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-body font-medium transition-all hover:bg-secondary"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
