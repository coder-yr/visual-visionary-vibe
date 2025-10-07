import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[450px] overflow-hidden rounded-lg mx-auto my-6 bg-muted">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>
      
      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
        <ChevronRight className="w-6 h-6" />
      </button>
      
      <div className="relative h-full flex items-center">
        <div className="container px-4">
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/20 backdrop-blur-sm">
              <span className="text-sm font-medium text-foreground">SUMMER 25</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              New arrivals picked just for you
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Discover the latest tech and gadgets curated specially for your lifestyle
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg">
                See all
              </Button>
              <Button variant="outline" size="lg">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Carousel Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        <div className="w-2 h-2 rounded-full bg-foreground"></div>
        <div className="w-2 h-2 rounded-full bg-foreground/30"></div>
        <div className="w-2 h-2 rounded-full bg-foreground/30"></div>
      </div>
    </section>
  );
};

export default HeroSection;
