import { Heart, Code } from 'lucide-react';
import { FaReact } from "react-icons/fa";
import { SiCloudflare } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left - Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Prafull Sharma. All rights reserved.</span>
          </div>

          {/* Center - Made with */}
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
  <span>Built with</span>

  <div className="flex items-center gap-1 font-medium">
    <FaReact className="text-blue-500" />
    <span>React</span>
  </div>

  <span>• Hosted on</span>

  <div className="flex items-center gap-1 font-medium">
    <SiCloudflare className="text-orange-500" />
    <span>Cloudflare</span>
  </div>
</div>

          {/* Right - Quick Links */}
          <div className="flex items-center gap-4">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
