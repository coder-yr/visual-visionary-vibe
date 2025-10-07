import { Newspaper, Truck, CreditCard, Tag, Heart, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";

const curatedItems = [
  { icon: Newspaper, label: "Articles" },
  { icon: Truck, label: "Shipping" },
  { icon: CreditCard, label: "Payment" },
  { icon: Tag, label: "Offers" },
  { icon: Heart, label: "Wishlist" },
  { icon: Camera, label: "Gallery" },
];

const ExclusivelyCurated = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container px-4">
        <h2 className="text-2xl font-bold mb-6">Exclusively Curated For You</h2>
        
        <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
          {curatedItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className="flex flex-col items-center gap-2 min-w-[80px] p-4 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity"
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="relative overflow-hidden bg-gradient-to-br from-purple-900 to-purple-700 text-white border-0">
            <div className="p-8 h-48 flex flex-col justify-center">
              <p className="text-sm mb-2">The Croma E-Gift Card</p>
              <h3 className="text-2xl font-bold mb-2">
                The perfect gift for a great <br />choice for you to go to <br />your loved ones
              </h3>
            </div>
          </Card>
          
          <Card className="relative overflow-hidden bg-gradient-to-br from-purple-900 to-purple-700 text-white border-0">
            <div className="p-8 h-48 flex flex-col justify-center">
              <p className="text-sm mb-2 opacity-90">croma</p>
              <h3 className="text-2xl font-bold mb-2">
                INDULGE
              </h3>
              <p className="text-sm opacity-90">
                Splurge on premium appliances for <br />luxurious experiences.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExclusivelyCurated;