import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import homeData from "@/data/home.json";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left space-y-6 opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-delay-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Projects
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-delay-200">
              <span className="block text-foreground">{homeData.name}</span>
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-2">
                {homeData.title.split("&")[0]}
              </span>
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                & {homeData.title.split("&")[1]}
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl animate-delay-300">
              {homeData.tagline}
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start animate-delay-300">
              {homeData.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  {keyword}
                </span>
              ))}
            </div>

            <div className="flex gap-4 justify-center md:justify-start animate-delay-300">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="btn-hero group"
              >
                {homeData.ctaText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const aboutSection = document.getElementById("about");
                  aboutSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center md:justify-end opacity-0 animate-fade-in-up animate-delay-200">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse-glow" />
              
              {/* Profile image container */}
              <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-background shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-5xl font-bold">
                      {homeData.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <p className="text-foreground/70 text-sm px-4">
                      Profile photo coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
