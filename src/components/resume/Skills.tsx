import { Code, Database, Globe, Settings, Layers, Shield } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend Technologies',
    icon: Code,
    skills: ['C#', 'ASP.NET MVC', 'ASP.NET Core', 'Web API', 'REST Services', 'ASP.NET Web Forms'],
  },
  {
    title: 'Frontend Technologies',
    icon: Globe,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AJAX', 'React'],
  },
  {
    title: 'Database & Tools',
    icon: Database,
    skills: ['SQL Server', 'SSMS', 'Database Design', 'Query Optimization'],
  },
  {
    title: 'Development Practices',
    icon: Layers,
    skills: ['OOPS', 'SDLC', 'Agile Methodology', 'Jira', 'Scrum'],
  },
  {
    title: 'Additional Skills',
    icon: Settings,
    skills: ['Version Control (Git)', 'Deployment', 'CI/CD', 'AI Prompt Engineering'],
  },
  {
    title: 'Security',
    icon: Shield,
    skills: ['API Security', 'Authentication', 'Authorization', 'Secure Application Design'],
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
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
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
