import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Application (MCA)',
    institution: 'DIT University',
    location: 'Dehradun, Uttarakhand',
    period: 'Jun 2018 – Jul 2020',
    description: 'Advanced studies in computer applications, software development, and system design.',
  },
  {
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'Indraprastha Institute of Technology & Management',
    location: 'Delhi',
    period: 'Jun 2015 – Jul 2018',
    description: 'Foundation in computer science, programming fundamentals, and application development.',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">Education</h2>
          <p className="section-subtitle mx-auto">
            Academic foundation that shaped my technical expertise
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-3xl mx-auto grid gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="card-gradient p-6 md:p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:animate-pulse-glow">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications or Additional Info could go here */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <span className="text-sm text-muted-foreground">
              Continuously learning and staying updated with latest technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
