import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fadeInUp">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Abhishek Kumar
        </h1>
        
        <div className="text-xl md:text-2xl text-muted-foreground mb-4">
          B.Tech Student at <span className="text-primary font-semibold">IIIT Guwahati</span>
        </div>
        
        <div className="text-lg md:text-xl text-muted-foreground mb-8">
          Full-Stack Developer | AI/ML Enthusiast | Problem Solver
        </div>
        
        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Building impactful tech solutions through AI, Web, and Software Engineering. 
          Passionate about creating innovative applications that solve real-world problems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
<Button 
  size="lg" 
  className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 group"
  onClick={() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }}
>
  View My Work
  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
</Button>



          
          <a 
  href="https://drive.google.com/file/d/1SRXsJJWAzK2x9c-dlYOci1m7eFgmfQj6/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button 
    variant="outline" 
    size="lg" 
    className="border-primary/30 hover:border-primary hover:shadow-glow transition-all duration-300 group"
  >
    <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
    Download Resume
  </Button>
</a>

        </div>
        
        <div className="flex justify-center gap-6">
          <a href="https://github.com/abhishekkumarcoder21" target='_blank' className="text-muted-foreground hover:text-primary transition-colors hover:shadow-glow-primary p-2 rounded-full">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/11abhishek-kumar/" target='_blank' className="text-muted-foreground hover:text-primary transition-colors hover:shadow-glow-primary p-2 rounded-full">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
}