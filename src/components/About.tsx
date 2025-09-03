import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Award } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export default function About() {
  const education = [
    {
      institution: "IIIT Guwahati",
      degree: "B.Tech in Electronics and Communication",
      period: "2022 - 2026",
      location: "Guwahati, Assam",
      icon: "🎓"
    },
    {
      institution: "Anugrah Narayan College",
      degree: "Class XII (Science)",
      period: "2019 - 2021",
      location: "Patna, Bihar",
      grade: "89.2%",
      icon: "📚"
    },
    {
      institution: "Mother's International Academy",
      degree: "Class X",
      period: "2018 - 2019",
      location: "Patna, Bihar",
      grade: "92.4%",
      icon: "🏫"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and driven by curiosity to solve complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="animate-fadeInUp">
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Abhishek Kumar" 
                className="w-64 h-64 rounded-2xl mx-auto lg:mx-0 object-cover shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl" />
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Hello! I'm Abhishek</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                I'm a passionate B.Tech student at Indian Institute of Information Technology Guwahati with a deep interest in 
                Artificial Intelligence, Machine Learning, and Full-stack development. 
                My journey in technology began with a curiosity to understand how things work, 
                which has evolved into a passion for building innovative solutions.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                With experience in multiple programming languages and frameworks, 
                I enjoy tackling challenging problems and creating applications that 
                make a real impact. I'm always eager to learn new technologies and 
                collaborate on exciting projects.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Education Journey</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card group">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{edu.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                          {edu.institution}
                        </h4>
                        {edu.grade && (
                          <div className="flex items-center gap-1 text-accent">
                            <Award className="h-4 w-4" />
                            <span className="font-semibold">{edu.grade}</span>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-3">{edu.degree}</p>
                      
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}