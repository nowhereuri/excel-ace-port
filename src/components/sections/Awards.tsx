import { Card } from "@/components/ui/card";
import { Trophy, Award, BookOpen } from "lucide-react";
import awardsData from "@/data/awards.json";

const iconMap = {
  award: Trophy,
  certification: Award,
  training: BookOpen,
};

const colorMap = {
  award: "text-yellow-500",
  certification: "text-blue-500",
  training: "text-green-500",
};

const bgMap = {
  award: "bg-yellow-500/10",
  certification: "bg-blue-500/10",
  training: "bg-green-500/10",
};

export const Awards = () => {
  return (
    <section id="awards" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Awards & Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition and continuous professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awardsData.map((item) => {
            const Icon = iconMap[item.type as keyof typeof iconMap];
            const iconColor = colorMap[item.type as keyof typeof colorMap];
            const bgColor = bgMap[item.type as keyof typeof bgMap];

            return (
              <Card
                key={item.id}
                className="p-6 card-glass hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${bgColor} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-6 w-6 ${iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg mb-1 line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="font-medium">{item.institution}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.details}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
