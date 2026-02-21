import { Code, Database, Globe, Settings, Layers, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "Backend Technologies",
    icon: Code,
    skills: [
      { name: "C#", url: "https://learn.microsoft.com/dotnet/csharp/" },
      { name: "ASP.NET MVC", url: "https://learn.microsoft.com/aspnet/mvc" },
      { name: "ASP.NET Core", url: "https://learn.microsoft.com/aspnet/core" },
      { name: "Web API", url: "https://learn.microsoft.com/aspnet/web-api/" },
      { name: "REST Services", url: "https://restfulapi.net/" },
      { name: "ASP.NET Web Forms", url: "https://learn.microsoft.com/aspnet/web-forms/" },
    ],
  },
  {
    title: "Frontend Technologies",
    icon: Globe,
    skills: [
      { name: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "jQuery", url: "https://jquery.com/" },
      { name: "AJAX", url: "https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX" },
      { name: "React", url: "https://react.dev/" },
    ],
  },
  {
    title: "Database & Tools",
    icon: Database,
    skills: [
      { name: "SQL Server", url: "https://www.microsoft.com/sql-server" },
      { name: "SSMS", url: "https://learn.microsoft.com/sql/ssms/" },
      { name: "Database Design", url: "https://www.geeksforgeeks.org/database-design/" },
      { name: "Query Optimization", url: "https://learn.microsoft.com/sql/relational-databases/performance/" },
    ],
  },
  {
    title: "Development Practices",
    icon: Layers,
    skills: [
      { name: "OOPS", url: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/" },
      { name: "SDLC", url: "https://www.tutorialspoint.com/sdlc/index.htm" },
      { name: "Agile Methodology", url: "https://www.agilealliance.org/agile101/" },
      { name: "Jira", url: "https://www.atlassian.com/software/jira" },
      { name: "Scrum", url: "https://www.scrum.org/resources/what-is-scrum" },
    ],
  },
  {
    title: "Additional Skills",
    icon: Settings,
    skills: [
      { name: "Version Control (Git)", url: "https://git-scm.com/" },
      { name: "Deployment", url: "https://www.redhat.com/en/topics/devops/what-is-deployment" },
      { name: "CI/CD", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" },
      { name: "AI Prompt Engineering", url: "https://www.promptingguide.ai/" },
    ],
  },
  {
    title: "Security",
    icon: Shield,
    skills: [
      { name: "API Security", url: "https://owasp.org/www-project-api-security/" },
      { name: "Authentication", url: "https://auth0.com/learn/authentication/" },
      { name: "Authorization", url: "https://auth0.com/docs/get-started/identity-fundamentals/authorization" },
      { name: "Secure Application Design", url: "https://owasp.org/www-project-top-ten/" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">Technical Skills</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for building scalable, enterprise-grade web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:animate-pulse-glow">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-badge hover:scale-105 hover:bg-primary hover:text-white transition duration-300 cursor-pointer"
                  >
                    {skill.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold gradient-text">5.5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold gradient-text">15+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold gradient-text">4</div>
            <div className="text-sm text-muted-foreground">Companies Worked</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold gradient-text">10+</div>
            <div className="text-sm text-muted-foreground">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;