import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground">
            Full Stack Developer with 5.5+ years of experience building
            scalable, enterprise-grade web applications.
          </p>
        </div>

        {/* Summary */}
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I am a results-driven Full Stack Developer specializing in
            <strong> ASP.NET Core, Web API, React, and SQL Server</strong>.
            I have extensive experience designing, developing, and deploying
            robust applications across domains such as
            <strong> banking, insurance/reinsurance, logistics, and ERP systems</strong>.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            My approach emphasizes clean architecture, performance optimization,
            and user-centric design while ensuring scalability, security,
            and long-term maintainability.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            🧩 Project Experience
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-foreground">
                Logistics & CRM Platforms
              </h3>
              <p className="text-muted-foreground">
                Developed CRM systems to manage customers, shipments, billing,
                and operational workflows with role-based access and reporting.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Tech:</strong> ASP.NET Core, Web API, SQL Server, React, IIS
              </p>
            </div>

            <div>
              <h3 className="font-medium text-foreground">
                ERP Applications
              </h3>
              <p className="text-muted-foreground">
                Built ERP modules including Inventory, HR, Sales, Finance,
                and Reporting with optimized database design.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Tech:</strong> ASP.NET Core MVC, C#, SQL Server, React
              </p>
            </div>

            <div>
              <h3 className="font-medium text-foreground">
                Banking & Insurance Systems
              </h3>
              <p className="text-muted-foreground">
                Architected secure, modular applications focusing on compliance,
                scalability, and enterprise-grade architecture.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Tech:</strong> ASP.NET Core, Web API, SQL Server
              </p>
            </div>

            <div>
              <h3 className="font-medium text-foreground">
                Custom Web Applications
              </h3>
              <p className="text-muted-foreground">
                Delivered tailored web solutions end-to-end with strong emphasis
                on performance, UX, and business alignment.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Tech:</strong> React, jQuery, HTML5, CSS3, REST APIs
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            🛠️ Technology Stack
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-foreground">
                Backend & Architecture
              </h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>ASP.NET Core / MVC</li>
                <li>C# & Web API</li>
                <li>SQL Server (Stored Procedures, Optimization)</li>
                <li>Enterprise Architecture Design</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-foreground">
                Frontend & Tools
              </h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>React & jQuery</li>
                <li>Razor Views</li>
                <li>HTML5 / CSS3</li>
                <li>IIS, AJAX, Jira</li>
                <li>AI Prompt Engineering</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            🎯 How I Work
          </h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Clean, maintainable, and scalable code</li>
            <li>User-focused and responsive UI</li>
            <li>Strong alignment with business goals</li>
            <li>Continuous learning mindset</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;
