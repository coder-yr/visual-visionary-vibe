import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden rounded-xl mx-auto my-6">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0" style={{ background: 'var(--hero-gradient)' }} />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container px-4">
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/20 backdrop-blur-sm">
              <span className="text-sm font-medium text-primary-foreground">SUMMER 25</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              New arrivals picked just for you
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-6">
              Discover the latest tech and gadgets curated specially for your lifestyle
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg">
                See all
              </Button>
              <Button variant="outline" size="lg" className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
