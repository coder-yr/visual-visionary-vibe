import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ArticleFeature = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-amber-950 via-stone-900 to-stone-950">
      <div className="container px-4">
        <div className="relative">
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/30 transition-colors text-white">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/30 transition-colors text-white">
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="grid md:grid-cols-2 gap-8 items-center py-12 max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-bold">
                UNBOXED
                <div className="text-xs font-normal">BY CROMA</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-300 to-green-200 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-8xl">⌚</div>
              </div>
            </div>
            
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Ten years on the wrist, and the Apple Watch has gone from a glorified accessory to a necessity
              </h2>
              <p className="text-white/80 mb-6">
                10 years of the iconic Apple Watch
              </p>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                Read Now
              </Button>
            </div>
          </div>
          
          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-8 h-1 rounded-full bg-white"></div>
            <div className="w-8 h-1 rounded-full bg-white/30"></div>
            <div className="w-8 h-1 rounded-full bg-white/30"></div>
            <div className="w-8 h-1 rounded-full bg-white/30"></div>
            <div className="w-8 h-1 rounded-full bg-white/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleFeature;