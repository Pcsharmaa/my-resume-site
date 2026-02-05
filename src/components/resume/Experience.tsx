import { Building2, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Sr Software Engineer',
    company: 'Swaran Soft',
    location: 'Gurgaon, Haryana, India',
    period: 'Aug 2024 – Present',
    type: 'Full-time',
    description: 'Leading project analysis and requirement gathering to design scalable application architectures. Working on both backend and frontend development using ASP.NET Core, MVC, Web API, and JavaScript-based UI.',
    responsibilities: [
      'Led project analysis and requirement gathering to design scalable application architectures',
      'Developed backend and frontend using ASP.NET Core, MVC, Web API, and JavaScript',
      'Managed database design, optimization, and API integrations',
      'Collaborated with cross-functional teams following Agile/Scrum practices',
      'Implemented application security, authentication, and authorization mechanisms',
      'Handled version control, deployment, and production support',
      'Worked as EXL Vendor Developer on enterprise-level projects',
    ],
    projects: [
      'EXL Reinsurance Management System (RMS)',
      'Fortis Queue Management System (QMS)',
      'Honda 2 Wheelers India',
      'Honda BigWing',
      'Honda IDTR',
      'Gignaati',
    ],
    technologies: ['ASP.NET Core', 'MVC', 'Web API', 'JavaScript', 'SQL Server'],
  },
  {
    title: '.NET Full Stack Developer',
    company: 'Diva Enterprises Private Limited',
    location: 'New Delhi, India',
    period: 'Aug 2023 – Jul 2024',
    type: 'Full-time',
    description: 'Involved in analysis, design, and frontend development using HTML, CSS, jQuery, and AJAX. Developed interactive and responsive web applications.',
    responsibilities: [
      'Involved in analysis, design, and frontend development using HTML, CSS, jQuery, and AJAX',
      'Developed interactive and responsive web applications using AJAX-based components',
      'Integrated backend APIs with frontend modules for seamless data flow',
      'Quickly adapted to new technologies and project requirements',
      'Worked independently with minimal supervision while meeting tight deadlines',
    ],
    projects: ['Indian Journals'],
    technologies: ['HTML', 'CSS', 'jQuery', 'AJAX', '.NET'],
  },
  {
    title: '.NET MVC Developer',
    company: 'Green Trans ERP',
    location: 'New Delhi, India',
    period: 'Jul 2022 – Jul 2023',
    type: 'Full-time',
    description: 'Designed and developed web modules using ASP.NET MVC, jQuery, AJAX, HTML, and CSS. Built reusable UI components and optimized application performance.',
    responsibilities: [
      'Designed and developed web modules using ASP.NET MVC, jQuery, AJAX, HTML, and CSS',
      'Built reusable UI components and optimized application performance',
      'Actively involved in requirement analysis and feature implementation',
      'Maintained and enhanced logistics and transport management systems',
    ],
    projects: ['Green Trans ERP', 'Green Trans Commercials'],
    technologies: ['ASP.NET MVC', 'jQuery', 'AJAX', 'HTML', 'CSS'],
  },
  {
    title: '.NET Application Developer',
    company: 'Biz-Glide Web Solutions',
    location: 'New Delhi, India',
    period: 'Jul 2020 – Jun 2022',
    type: 'Full-time',
    description: 'Participated in end-to-end web application development including analysis, design, and implementation. Developed unit test cases and performed application testing.',
    responsibilities: [
      'Participated in end-to-end web application development including analysis, design, and implementation',
      'Developed unit test cases and performed application testing',
      'Learned and applied SDLC best practices as a fresher',
      'Troubleshooting and resolving application defects and performance issues',
    ],
    projects: [
      'Call-2-Shift (Employee shift & transportation management)',
      'ReScheduler (Multi-user employee scheduling system)',
      'Customer Registration & Inquiry System',
    ],
    technologies: ['.NET', 'SDLC', 'Unit Testing'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">Work Experience</h2>
          <p className="section-subtitle mx-auto">
            A journey through building enterprise-grade applications and scalable systems
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="card-gradient p-6 md:p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-primary mt-1">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{exp.location}</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4">{exp.description}</p>

                {/* Key Responsibilities */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.slice(0, 4).map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Projects */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Projects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.projects.map((project, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {project}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
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
