import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "🍔 Food Website",
    description: "An online food ordering platform featuring modern UI and responsive design.",
    liveUrl: "https://medical-assistance-by-niyatbeks.vercel.app/",
    sourceUrl: "https://github.com/Niyatbeks/medical-assistance",
    gradient: "from-orange-400 to-red-500"
  },
  {
    title: "💫 Whirl Website",
    description: "A sleek landing page designed with CSS animations and reusable components.",
    liveUrl: "https://whirl-website-by-niyatbeks.vercel.app/",
    sourceUrl: "https://github.com/Niyatbeks/Whirl-website",
    gradient: "from-blue-400 to-purple-500"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent works showcasing my skills in frontend development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card border-0 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} mb-4 group-hover:shadow-glow transition-all duration-300`} />
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Button 
                    variant="default"
                    className="flex-1 bg-gradient-to-r from-secondary to-primary hover:shadow-glow transition-all duration-300"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 glass-card border-border/50 hover:bg-white/80 transition-all duration-300"
                    onClick={() => window.open(project.sourceUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
