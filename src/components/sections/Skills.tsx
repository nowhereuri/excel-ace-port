import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import skillsData from "@/data/skills.json";

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise across multiple domains and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <Card
              key={index}
              className="p-6 card-glass hover:shadow-[var(--shadow-medium)] transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 pb-3 border-b border-border">
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
