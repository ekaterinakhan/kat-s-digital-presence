import { Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-secondary/50 py-16 md:py-20">
      <div className="container text-center">
        <h2 className="font-display text-2xl md:text-3xl mb-8">
          Get in touch
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            kat@scariot.fr
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
