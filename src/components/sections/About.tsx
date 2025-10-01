import { Card } from "@/components/ui/card";
import { Calendar, Briefcase, Users, Clock, Mail, Phone, MapPin } from "lucide-react";
import aboutData from "@/data/about.json";

const iconMap = {
  calendar: Calendar,
  briefcase: Briefcase,
  users: Users,
  clock: Clock,
};

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {aboutData.tagline}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <div className="space-y-6">
            <Card className="p-8 card-glass">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                {aboutData.bio}
              </p>
            </Card>

            {/* Contact Info */}
            <Card className="p-8 card-glass">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>{aboutData.email}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>{aboutData.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{aboutData.location}</span>
                </div>
              </div>
            </Card>
          </div>

          {/* KPIs */}
          <div className="grid sm:grid-cols-2 gap-6">
            {aboutData.kpis.map((kpi, index) => {
              const Icon = iconMap[kpi.icon as keyof typeof iconMap];
              return (
                <Card
                  key={index}
                  className="p-6 card-glass hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {kpi.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        {kpi.label}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
