import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Globe, 
  Brain, 
  Database, 
  Cloud, 
  BookOpen,
  Terminal,
  Cpu
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "C++", "Java", "Python", "JavaScript", "Go", "Rust"],
      color: "secondary"
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["HTML", "CSS", "React.js", "Next.js", "Node.js", "Express.js", "Django", "FastAPI"],
      color: "secondary"
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      skills: ["TensorFlow", "Scikit-learn", "OpenCV", "Generative AI", "MLOps", "Computer Vision"],
      color: "secondary"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Firebase", "Supabase", "PostgreSQL"],
      color: "secondary"
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["Git", "GitHub Actions", "Docker", "Kubernetes", "AWS", "CI/CD"],
      color: "secondary"
    },
    {
      title: "Core Computer Science",
      icon: BookOpen,
      skills: ["Operating Systems", "DBMS", "Computer Networks", "Data Structures", "Algorithms"],
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/30 hover:border-primary/60 hover:shadow-glow-primary';
      case 'secondary':
        return 'border-secondary/30 hover:border-secondary/60 hover:shadow-glow-secondary';
      case 'accent':
        return 'border-accent/30 hover:border-accent/60 hover:shadow-glow-accent';
      default:
        return 'border-primary/30 hover:border-primary/60 hover:shadow-glow-primary';
    }
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical expertise across multiple domains and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className={`p-6 bg-card/50 backdrop-blur transition-all duration-300 hover:-translate-y-1 group animate-fadeInUp ${getColorClasses(category.color)}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl ${
                    category.color === 'primary' ? 'bg-gradient-primary' :
                    category.color === 'secondary' ? 'bg-gradient-secondary' :
                    'bg-gradient-hero'
                  }`}>
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i}
                      variant="outline"
                      className={`text-sm transition-all duration-200 hover:scale-105 ${
                        category.color === 'primary' ? 'border-primary/40 hover:border-primary hover:bg-primary/10' :
                        category.color === 'secondary' ? 'border-secondary/40 hover:border-secondary hover:bg-secondary/10' :
                        'border-accent/40 hover:border-accent hover:bg-accent/10'
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-card/30 backdrop-blur border-primary/20 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <Terminal className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-primary">1500+</div>
                  <div className="text-sm text-muted-foreground">LeetCode Rating</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Cpu className="h-8 w-8 text-secondary" />
                <div>
                  <div className="text-2xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">DSA Problems Solved</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-accent" />
                <div>
                  <div className="text-2xl font-bold text-accent">Multiple</div>
                  <div className="text-sm text-muted-foreground">ML Certifications</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}