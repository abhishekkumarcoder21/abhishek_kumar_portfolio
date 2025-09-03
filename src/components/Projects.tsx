import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Brain, Train, Gamepad2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Driver Drowsiness & Accident Prevention System",
      description: "Advanced machine learning system using computer vision to detect driver fatigue and prevent accidents. Implements real-time facial recognition and alerting mechanisms.",
      icon: Brain,
      technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "Real-time Processing"],
      highlights: ["Real-time drowsiness detection", "Alert system integration", "95% accuracy rate"],
      github: "https://github.com/abhishekkumarcoder21/Driver_Drowsiness_Detection_System",
      demo: "https://github.com/abhishekkumarcoder21/Driver_Drowsiness_Detection_System"
    },
    {
      title: "Patna Metro Web Application",
      description: "Comprehensive web platform for Patna Metro services featuring route planning, ticket booking, and real-time tracking with modern UI/UX design.",
      icon: Train,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      highlights: ["Interactive route mapping", "Real-time updates", "Mobile-responsive design"],
      github: "https://github.com/abhishekkumarcoder21/Patna-Metro-Web-App",
      demo: "https://patna-metro-web-app.vercel.app/"
    },
    {
      title: "Snake Game in C (Terminal Edition)",
      description: "Classic snake game implementation in C with terminal-based graphics, demonstrating core programming concepts and game development logic.",
      icon: Gamepad2,
      technologies: ["C Programming", "Terminal Graphics", "Game Logic", "Data Structures"],
      highlights: ["Terminal-based UI", "Score tracking", "Collision detection"],
      github: "https://github.com/abhishekkumarcoder21/snake_in_terminal",
      demo: "https://github.com/abhishekkumarcoder21/snake_in_terminal"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating problem-solving skills and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card group hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-xl">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2 text-accent">Key Highlights:</h4>
                  <ul className="text-sm text-foreground/80 space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="text-xs bg-secondary/50 hover:bg-secondary/70 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-primary/20">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-primary/30 hover:border-primary hover:shadow-glow-primary transition-all duration-300"
                    asChild
                  >
                    <a href={project.github}>
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                    asChild
                  >
                    <a href={project.demo}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}