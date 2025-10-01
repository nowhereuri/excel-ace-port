import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, CheckCircle2 } from "lucide-react";
import projectsData from "@/data/projects.json";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions delivering measurable impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden card-glass hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-500" />
                <div className="relative text-center p-6">
                  <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {project.title.split(" ").map(w => w[0]).join("")}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Image */}
                  <div className="h-64 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {selectedProject.title.split(" ").map(w => w[0]).join("")}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="font-semibold mb-2">Description</h4>
                    <p className="text-muted-foreground">{selectedProject.description}</p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-md bg-primary/10 text-primary font-medium text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Role & Contribution */}
                  <div>
                    <h4 className="font-semibold mb-2">Role & Contribution</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium text-foreground">Role:</span> {selectedProject.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {selectedProject.contribution}
                    </p>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold mb-3">Results & Impact</h4>
                    <div className="space-y-2">
                      {selectedProject.results.map((result, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/90">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {(selectedProject.links.demo || selectedProject.links.docs) && (
                    <div className="flex gap-3 pt-4">
                      {selectedProject.links.demo && (
                        <Button variant="default" size="sm" className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          View Demo
                        </Button>
                      )}
                      {selectedProject.links.docs && (
                        <Button variant="outline" size="sm" className="gap-2">
                          <FileText className="h-4 w-4" />
                          Documentation
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
