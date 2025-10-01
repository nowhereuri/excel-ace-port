import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import experienceData from "@/data/experience.json";

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of continuous learning and impactful contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

            {experienceData.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background z-10 hidden md:block" />

                <Card className="p-6 card-glass hover:shadow-[var(--shadow-medium)] transition-all duration-300 ml-8 md:ml-0">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 md:hidden" />
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <span className="text-sm text-muted-foreground font-medium px-3 py-1 bg-primary/10 rounded-full w-fit">
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="text-lg text-primary font-semibold mb-3">
                        {exp.organization}
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground/90">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
