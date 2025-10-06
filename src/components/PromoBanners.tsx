import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import acProduct from "@/assets/ac-product.jpg";
import homeOffice from "@/assets/home-office.jpg";

const PromoBanners = () => {
  return (
    <section className="py-12">
      <div className="container px-4 space-y-6">
        {/* Featured Product Banner */}
        <Card className="overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 border-0">
          <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
            <div className="flex flex-col justify-center text-white">
              <span className="text-sm font-semibold mb-2">SUMMER SALE</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-3">
                CMF PHONE 2 PRO
              </h3>
              <p className="text-white/90 mb-4">
                Experience next-gen technology with stunning display and ultra-fast performance
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">$799</span>
                <span className="text-xl line-through opacity-75">$999</span>
              </div>
              <div>
                <Button variant="hero" size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop" 
                alt="CMF Phone 2 Pro"
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </Card>

        {/* Two Column Banners */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 border-0">
            <div className="p-6 md:p-8 flex flex-col justify-between h-full text-white">
              <div>
                <span className="text-sm font-semibold mb-2 block">COOLING SOLUTION</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Air Conditioners<br />
                  <span className="text-xl">Starting at</span> $899
                </h3>
              </div>
              <div className="mt-4">
                <img 
                  src={acProduct}
                  alt="Air Conditioner"
                  className="w-full h-48 object-contain"
                />
              </div>
              <Button variant="hero" size="lg" className="bg-white text-blue-600 hover:bg-white/90 mt-4">
                Shop Now
              </Button>
            </div>
          </Card>

          <Card className="overflow-hidden border-0">
            <div className="relative h-full">
              <img 
                src={homeOffice}
                alt="Home Office Setup"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8 text-white">
                <span className="text-sm font-semibold mb-2">WORKSPACE</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Bestselling VR<br />
                  Headsets
                </h3>
                <Button variant="hero" size="lg" className="w-fit">
                  Explore Now
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Product Grid Banners */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Try wireless earpods in", price: "$1,499", gradient: "from-purple-600 to-purple-800", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop" },
            { title: "Life is a PRETTY GAME", price: "$1,799", gradient: "from-pink-600 to-purple-600", image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=400&fit=crop" },
            { title: "Witness Unseen Clarity", price: "$1,299", gradient: "from-green-600 to-teal-600", image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=400&fit=crop" },
            { title: "TRAVEL LIKE SPORT", price: "$1,899", gradient: "from-red-600 to-pink-600", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop" },
          ].map((item, idx) => (
            <Card key={idx} className={`overflow-hidden bg-gradient-to-br ${item.gradient} border-0`}>
              <div className="p-4 text-white">
                <div className="aspect-square mb-3 rounded-lg overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-semibold text-sm mb-2">{item.title}</h4>
                <p className="text-xl font-bold">Only at {item.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
