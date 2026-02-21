import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Sr Software Engineer",
    company: "Swaran Soft",
    companyUrl: "https://www.swaransoft.com",
    location: "Gurgaon, Haryana, India",
    period: "Aug 2024 – Feb 2026",
    type: "Full-time",
    description:
      "Leading project analysis and requirement gathering to design scalable application architectures. Working on both backend and frontend development using ASP.NET Core, MVC, Web API, and JavaScript-based UI.",
    responsibilities: [
      "Led project analysis and requirement gathering to design scalable application architectures",
      "Developed backend and frontend using ASP.NET Core, MVC, Web API, and JavaScript",
      "Managed database design, optimization, and API integrations",
      "Collaborated with cross-functional teams following Agile/Scrum practices",
      "Implemented application security, authentication, and authorization mechanisms",
      "Handled version control, deployment, and production support",
      "Worked as EXL Vendor Developer on enterprise-level projects",
    ],
    projects: [
      "EXL Reinsurance Management System (RMS)",
      "Fortis Queue Management System (QMS)",
      "Honda 2 Wheelers India",
      "Honda BigWing",
      "Honda IDTR",
      "Gignaati",
    ],
    technologies: [
      "ASP.NET Core",
      "MVC",
      "Web API",
      "JavaScript",
      "SQL Server",
    ],
  },
  {
    title: ".NET Full Stack Developer",
    company: "Diva Enterprises Private Limited",
    companyUrl: "http://www.indianjournals.com",
    location: "New Delhi, India",
    period: "Aug 2023 – Jul 2024",
    type: "Full-time",
    description:
      "Involved in analysis, design, and frontend development using HTML, CSS, jQuery, and AJAX. Developed interactive and responsive web applications.",
    responsibilities: [
      "Involved in analysis, design, and frontend development using HTML, CSS, jQuery, and AJAX",
      "Developed interactive and responsive web applications using AJAX-based components",
      "Integrated backend APIs with frontend modules for seamless data flow",
      "Quickly adapted to new technologies and project requirements",
      "Worked independently with minimal supervision while meeting tight deadlines",
    ],
    projects: ["Indian Journals"],
    technologies: ["HTML", "CSS", "jQuery", "AJAX", ".NET"],
  },
  {
    title: ".NET MVC Developer",
    company: "Green Trans ERP",
    companyUrl: "https://greentrans.in",
    location: "New Delhi, India",
    period: "Jul 2022 – Jul 2023",
    type: "Full-time",
    description:
      "Designed and developed web modules using ASP.NET MVC, jQuery, AJAX, HTML, and CSS. Built reusable UI components and optimized application performance.",
    responsibilities: [
      "Designed and developed web modules using ASP.NET MVC, jQuery, AJAX, HTML, and CSS",
      "Built reusable UI components and optimized application performance",
      "Actively involved in requirement analysis and feature implementation",
      "Maintained and enhanced logistics and transport management systems",
    ],
    projects: ["Green Trans ERP", "Green Trans Commercials"],
    technologies: ["ASP.NET MVC", "jQuery", "AJAX", "HTML", "CSS"],
  },
  {
    title: ".NET Application Developer",
    company: "Biz-Glide Web Solutions",
    companyUrl: "https://bizglide.in",
    location: "New Delhi, India",
    period: "Jul 2020 – Jun 2022",
    type: "Full-time",
    description:
      "Participated in end-to-end web application development including analysis, design, and implementation. Developed unit test cases and performed application testing.",
    responsibilities: [
      "Participated in end-to-end web application development including analysis, design, and implementation",
      "Developed unit test cases and performed application testing",
      "Learned and applied SDLC best practices as a fresher",
      "Troubleshooting and resolving application defects and performance issues",
    ],
    projects: [
      "Call-2-Shift (Employee shift & transportation management)",
      "ReScheduler (Multi-user employee scheduling system)",
      "Customer Registration & Inquiry System",
    ],
    technologies: [".NET", "SDLC", "Unit Testing"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Professional Experience</h2>
          <p className="section-subtitle mx-auto">
            My journey building enterprise-grade applications
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border card-gradient hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.title}
                  </h3>

                  {/* Clickable Company Name */}
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    {exp.company}
                  </a>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <span className="mt-2 md:mt-0 text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {exp.type}
                </span>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Projects:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.projects.map((project, i) => (
                    <span key={i} className="skill-badge">
                      {project}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;