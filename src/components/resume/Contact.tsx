import { Mail, Linkedin, Phone, Download, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] gradient-overlay pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">Let's Connect</h2>
          <p className="section-subtitle mx-auto">
            I'm always open to discussing new opportunities, projects, or just having a great conversation about technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <a
              href="mailto:prafullsharma0524@outlook.com"
              className="card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <p className="text-sm text-muted-foreground break-all">
                prafullsharma0524@outlook.com
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:+917818085195"
              className="card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground">+91-7818085195</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/prafull-sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Connect with me</p>
            </a>
          </div>

          {/* CTA Section */}
          <div className="card-gradient p-8 md:p-12 rounded-2xl border border-border text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to work together?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Looking for a dedicated .NET Full Stack Developer to join your team? 
              Let's discuss how I can contribute to your next project.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:prafullsharma0524@outlook.com"
                className="btn-primary"
              >
                <Send className="w-4 h-4" />
                Send Message
              </a>
              <a
                href="/resume/prafull_sharma.pdf"
                download="Prafull_Sharma_Resume.pdf"
                className="btn-outline"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
