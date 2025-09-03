import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Award, 
  Star, 
  Target, 
  Users, 
  BookOpen,
  Code,
  Brain
} from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "LeetCode Excellence",
      description: "Achieved 1500+ rating on LeetCode with consistent problem-solving skills",
      icon: Trophy,
      category: "Competitive Programming",
      details: ["1500+ Rating", "500+ Problems Solved", "Multiple Platform Experience"],
      color: "secondary"
    },
    {
      title: "Machine Learning Mastery",
      description: "Completed comprehensive Coursera ML certification series",
      icon: Brain,
      category: "Artificial Intelligence",
      details: ["Regression Techniques", "Classification Models", "Reinforcement Learning"],
      color: "secondary"
    },
    {
      title: "Academic Excellence",
      description: "CBSE Merit Certificate in Mathematics for 100% score",
      icon: Award,
      category: "Academic Achievement",
      details: ["Class 10 Mathematics", "100/100 Score", "Merit Certificate"],
      color: "secondary"
    },
    {
      title: "Leadership Impact",
      description: "Core member of sponsorship team at Yuvaan IIIT Guwahati Cultural Fest",
      icon: Users,
      category: "Leadership",
      details: ["Raised 30% of Budget", "Team Leadership", "Event Management"],
      color: "secondary"
    },
    {
      title: "Community Service",
      description: "Volunteer at Festival of North East, IIIT Guwahati",
      icon: Star,
      category: "Community Service",
      details: ["Logistics Management", "Event Scheduling", "Team Coordination"],
      color: "secondary"
    },
    {
      title: "Multi-Platform Coding",
      description: "Active across multiple competitive programming platforms",
      icon: Code,
      category: "Programming",
      details: ["GeeksforGeeks", "Codeforces", "TakeUForward", "LeetCode"],
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          card: 'border-primary/20 hover:border-primary/40 hover:shadow-glow-primary',
          gradient: 'bg-gradient-primary',
          badge: 'border-primary/40 hover:border-primary hover:bg-primary/10'
        };
      case 'secondary':
        return {
          card: 'border-secondary/20 hover:border-secondary/40 hover:shadow-glow-secondary',
          gradient: 'bg-gradient-secondary',
          badge: 'border-secondary/40 hover:border-secondary hover:bg-secondary/10'
        };
      case 'accent':
        return {
          card: 'border-accent/20 hover:border-accent/40 hover:shadow-glow-accent',
          gradient: 'bg-gradient-hero',
          badge: 'border-accent/40 hover:border-accent hover:bg-accent/10'
        };
      default:
        return {
          card: 'border-primary/20 hover:border-primary/40 hover:shadow-glow-primary',
          gradient: 'bg-gradient-primary',
          badge: 'border-primary/40 hover:border-primary hover:bg-primary/10'
        };
    }
  };

  return (
    <section id="achievements" className="py-20 px-6 bg-card/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones and accomplishments that reflect dedication and growth in technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const colorClasses = getColorClasses(achievement.color);
            
            return (
              <Card 
                key={index}
                className={`p-6 bg-card/50 backdrop-blur transition-all duration-300 hover:-translate-y-1 group animate-fadeInUp ${colorClasses.card}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${colorClasses.gradient} flex-shrink-0`}>
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs mb-2 ${colorClasses.badge} transition-all`}
                    >
                      {achievement.category}
                    </Badge>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {achievement.description}
                </p>
                
                <div className="space-y-2">
                  {achievement.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        achievement.color === 'primary' ? 'bg-primary' :
                        achievement.color === 'secondary' ? 'bg-secondary' :
                        'bg-accent'
                      }`} />
                      <span className="text-foreground/80">{detail}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats Summary */}
        <div className="mt-16">
          <Card className="p-8 bg-card/30 backdrop-blur border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1500+</div>
                <div className="text-sm text-muted-foreground">LeetCode Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">3+</div>
                <div className="text-sm text-muted-foreground">ML Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Mathematics Score</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}