import { ArrowDown, Mail, Linkedin, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen hero-gradient overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* ===== CONTENT ===== */}
      <div className="section-container relative z-10 pt-24 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Available for new opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I&apos;m <span className="gradient-text">Prafull Sharma</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          <span className="text-primary font-mono">
            Asp Dot Net Full Stack Developer
          </span>
        </p>

        {/* Experience */}
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          5.8+ years of hands-on experience in designing, developing, and deploying
          scalable web applications using ASP.NET Core, Web API, SQL Server, and React.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <a
            href="mailto:prafullsharma0524@outlook.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            prafullsharma0524@outlook.com
          </a>

          <a
            href="https://www.linkedin.com/in/prafull-sharma-0222b71a5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>

          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            India
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
          <a href="#experience" className="btn-outline">
            View Experience
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#skills"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
