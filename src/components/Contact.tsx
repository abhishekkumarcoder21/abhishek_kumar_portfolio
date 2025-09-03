import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Code, 
  Trophy,
  ExternalLink
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abhishek.kumar.work27@gmail.com",
      href: "mailto:abhishek.kumar.work27@gmail.com",
      color: "secondary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6001166308",
      href: "tel:+916001166308",
      color: "secondary"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      handle: "@abhishekkumarcoder21",
      href: "https://github.com/abhishekkumarcoder21",
      color: "secondary"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "in/11abhishek-kumar",
      href: "https://www.linkedin.com/in/11abhishek-kumar/",
      color: "secondary"
    }
  ];

  const codingProfiles = [
    {
      icon: Code,
      name: "LeetCode",
      handle: "1500+ Rating",
      href: "https://leetcode.com/u/abhishek_kumar_coder21/",
      color: "secondary"
    },
    {
      icon: Trophy,
      name: "GeeksforGeeks",
      handle: "Active Solver",
      href: "https://www.geeksforgeeks.org/user/abhishekkum583s/",
      color: "secondary"
    },
    {
      icon: Code,
      name: "TakeUForward",
      handle: "Problem Solver",
      href: "https://takeuforward.org/profile/abhishek.kumar.coder21",
      color: "secondary"
    },
    {
      icon: Trophy,
      name: "Codeforces",
      handle: "Competitive Coder",
      href: "https://codeforces.com/profile/abhishek.kumar.coder21",
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/30 hover:border-primary hover:shadow-glow-primary';
      case 'secondary':
        return 'border-secondary/30 hover:border-secondary hover:shadow-glow-secondary';
      case 'accent':
        return 'border-accent/30 hover:border-accent hover:shadow-glow-accent';
      default:
        return 'border-primary/30 hover:border-primary hover:shadow-glow-primary';
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss new opportunities
          </p>
        </div>

        {/* <div className="grid lg:grid-cols-2 gap-12"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Contact Information */}
          <div className="animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <Card 
                    key={index}
                    className={`p-4 bg-card/50 backdrop-blur transition-all duration-300 hover:-translate-y-1 ${getColorClasses(contact.color)}`}
                  >
                    <a href={contact.href} className="flex items-center gap-4 group">
                      <div className={`p-3 rounded-xl ${
                        contact.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-secondary'
                      }`}>
                        <Icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold group-hover:text-primary transition-colors">
                          {contact.label}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {contact.value}
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                    </a>
                  </Card>
                );
              })}
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Professional Links</h4>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Card 
                      key={index}
                      className={`p-4 bg-card/50 backdrop-blur transition-all duration-300 hover:-translate-y-1 ${getColorClasses(social.color)}`}
                    >
                      <a href={social.href} className="flex items-center gap-4 group" target="_blank" rel="noopener noreferrer">
                        <div className="p-3 bg-gradient-primary rounded-xl">
                          <Icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-semibold group-hover:text-primary transition-colors">
                            {social.name}
                          </div>
                          <div className="text-muted-foreground text-sm">
                            {social.handle}
                          </div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                      </a>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Coding Profiles */}
          <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold mb-8">Coding Profiles</h3>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {codingProfiles.map((profile, index) => {
                const Icon = profile.icon;
                return (
                  <Card 
                    key={index}
                    className={`p-4 bg-card/50 backdrop-blur transition-all duration-300 hover:-translate-y-1 ${getColorClasses(profile.color)}`}
                  >
                    <a href={profile.href} className="block group" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${
                          profile.color === 'primary' ? 'bg-gradient-primary' :
                          profile.color === 'secondary' ? 'bg-gradient-secondary' :
                          'bg-gradient-hero'
                        }`}>
                          <Icon className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div className="font-semibold group-hover:text-primary transition-colors">
                          {profile.name}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {profile.handle}
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>

            {/* CTA Section */}
            <Card className="p-6 bg-card/30 backdrop-blur border-primary/20">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-4">Ready to Collaborate?</h4>
                <p className="text-muted-foreground mb-6">
                  I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 flex-1"
                    asChild
                  >
                    <a href="mailto:abhishek.kumar.work27@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary/30 hover:border-primary hover:shadow-glow transition-all duration-300 flex-1"
                    asChild
                  >
                    <a href="https://drive.google.com/file/d/1SRXsJJWAzK2x9c-dlYOci1m7eFgmfQj6/view?usp=sharing" target="_blank" download>
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}