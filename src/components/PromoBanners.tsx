import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import acProduct from "@/assets/ac-product.jpg";
import homeOffice from "@/assets/home-office.jpg";
import { Star } from "lucide-react";

const PromoBanners = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container px-4 space-y-6">
        {/* Top 4 Category Banners */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 text-white border-0">
            <CardContent className="p-6 h-48 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-1">Truly Wireless Earbuds</h3>
                <p className="text-2xl font-bold">Up to 60% off</p>
              </div>
              <div className="text-5xl opacity-50">🎧</div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden bg-gradient-to-br from-purple-900 to-purple-700 text-white border-0">
            <CardContent className="p-6 h-48 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-1">55" & Above Smart TV's</h3>
                <p className="text-xl">Starting at <span className="text-2xl font-bold">₹25,499*</span></p>
                <p className="text-xs opacity-80">*Inclusive of all Offers</p>
              </div>
              <div className="text-5xl opacity-50">📺</div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden bg-gradient-to-br from-teal-900 to-teal-700 text-white border-0">
            <CardContent className="p-6 h-48 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-1">Windows Laptops</h3>
                <p className="text-xl">Starting at <span className="text-2xl font-bold">₹26,990*</span></p>
                <p className="text-xs opacity-80">*Inclusive of all Offers</p>
              </div>
              <div className="text-5xl opacity-50">💻</div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900 text-white border-0">
            <CardContent className="p-6 h-48 flex flex-col justify-between">
              <div>
                <p className="text-sm mb-1">croma</p>
                <h3 className="text-lg font-bold mb-1">Refrigerators</h3>
                <p className="text-xl">Starting at <span className="text-2xl font-bold">₹7,990*</span></p>
                <p className="text-xs opacity-80">*Only EMI Offers</p>
              </div>
              <div className="text-5xl opacity-50">🧊</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Banner - CMF Phone */}
        <Card className="overflow-hidden bg-muted border-0">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-6 p-8 items-center">
              <div>
                <p className="text-sm text-muted-foreground mb-2">CMF by nothing</p>
                <h2 className="text-3xl font-bold mb-2">CMF PHONE 2 PRO</h2>
                <p className="text-xl mb-4">
                  Starting at <span className="text-3xl font-bold text-primary">₹17,999*</span>
                </p>
                <p className="text-sm text-muted-foreground mb-4">*Inclusive of all Offers</p>
                <Button className="bg-emerald-500 hover:bg-emerald-600">Buy now</Button>
              </div>
              <div className="flex justify-center">
                <div className="text-8xl">📱</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2 Column Banners - AC and TV */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="overflow-hidden bg-gradient-to-br from-blue-600 to-blue-400 text-white border-0">
            <CardContent className="p-0">
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${acProduct})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-transparent p-8 flex flex-col justify-center">
                  <p className="text-sm mb-2 opacity-90">croma COLLECTIONS</p>
                  <h3 className="text-3xl font-bold mb-2">Air Conditioners</h3>
                  <p className="text-2xl font-bold mb-2">Starting at ₹24,490*</p>
                  <p className="text-xs opacity-80 mb-4">*Inclusive of all Offers</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden bg-gradient-to-br from-stone-900 to-stone-700 text-white border-0">
            <CardContent className="p-0">
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${homeOffice})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 to-transparent p-8 flex flex-col justify-center">
                  <p className="text-sm mb-2 opacity-90">croma</p>
                  <h3 className="text-3xl font-bold mb-2">Bestselling TVs</h3>
                  <p className="text-xl mb-2">Starting at</p>
                  <p className="text-3xl font-bold mb-2">₹5,590*</p>
                  <p className="text-xs opacity-80">Extra Exchange Benefits | Easy EMI</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 4 Product Category Banners */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="overflow-hidden bg-gradient-to-br from-slate-900 to-slate-700 text-white border-0">
            <CardContent className="p-6 h-56 flex flex-col justify-between">
              <div className="text-6xl mb-4">🔊</div>
              <div>
                <h3 className="text-sm font-semibold mb-1">LG Soundbars</h3>
                <p className="text-xl font-bold">Starting at ₹6,490*</p>
                <p className="text-xs opacity-80">*Inclusive of all Offers</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden bg-gradient-to-br from-purple-900 to-purple-700 text-white border-0">
            <CardContent className="p-6 h-56 flex flex-col justify-between">
              <div className="text-6xl mb-4">⚙️</div>
              <div>
                <h3 className="text-sm font-semibold mb-1">PHILIPS Crompton</h3>
                <h4 className="font-bold mb-1">Irons & Garment Steamers</h4>
                <p className="text-xl font-bold">Starting at ₹499</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 text-white border-0">
            <CardContent className="p-6 h-56 flex flex-col justify-between">
              <div className="text-6xl mb-4">📱</div>
              <div>
                <h3 className="text-sm font-semibold mb-1">Android Tablets</h3>
                <p className="text-xl font-bold">Starting at ₹11,749*</p>
                <p className="text-xs opacity-80">*Inclusive of all Offers</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900 text-white border-0">
            <CardContent className="p-6 h-56 flex flex-col justify-between">
              <div className="text-6xl mb-4">⌚</div>
              <div>
                <h3 className="text-sm font-semibold mb-1">SAMSUNG Galaxy Fit3 Smartwatches</h3>
                <p className="text-xl font-bold">Starting at ₹2,799*</p>
                <p className="text-xs opacity-80">*Inclusive of all Offers</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summer Special Deals */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Summer Special Deals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-muted flex items-center justify-center text-6xl">
                    {item === 1 && "❄️"}
                    {item === 2 && "🌬️"}
                    {item === 3 && "🌬️"}
                    {item === 4 && "❄️"}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1 text-sm line-clamp-2">
                      Croma {item % 2 === 0 ? "7 in 1 Convertible" : "60 Litres Desert"} Air Cooler
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-3 h-3 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <p className="text-lg font-bold">₹{item % 2 === 0 ? "29,990" : "7,990"}.00</p>
                      <p className="text-sm text-muted-foreground line-through">₹{item % 2 === 0 ? "34,990" : "9,990"}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
