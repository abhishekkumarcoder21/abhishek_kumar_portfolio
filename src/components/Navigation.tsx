import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen
        ? 'bg-background/80 backdrop-blur-md border-b border-primary/20 shadow-glow' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              AK
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
        <div className="hidden md:flex">
  <a 
    href="https://drive.google.com/file/d/1SRXsJJWAzK2x9c-dlYOci1m7eFgmfQj6/view?usp=sharing"   // replace with your link
    target="_blank"      // opens in new tab
    rel="noopener noreferrer"
  >
    <Button 
      variant="outline" 
      size="sm"
      className="border-primary/30 hover:border-primary hover:shadow-glow-primary transition-all duration-300"
    >
      <Download className="mr-2 h-4 w-4" />
      Resume
    </Button>
  </a>
</div>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-primary/10"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="pb-4 pt-2 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
              >
                {item.name}
              </button>
            ))}
           <div className="pt-2 border-t border-primary/20">

    <Button 
      variant="outline" 
      size="sm"
      className="w-full border-primary/30 hover:border-primary hover:shadow-glow-primary transition-all duration-300"
    >
      {/* <Download className="mr-2 h-4 w-4" /> */}
<a href="https://drive.google.com/file/d/1SRXsJJWAzK2x9c-dlYOci1m7eFgmfQj6/view?usp=sharing" target='_blank' download className="w-full">
      Download Resume
  </a>
    </Button>
</div>

          </div>
        </div>
      </div>
    </nav>
  );
}