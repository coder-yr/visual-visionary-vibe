import { Truck, Percent, Filter, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Premium Shipping",
    description: "Multiple shipping methods with real-time tracking"
  },
  {
    icon: Percent,
    title: "Weekly Promotions",
    description: "Explore our weekly promotions for special seasonal offers"
  },
  {
    icon: Filter,
    title: "Advanced Filtering",
    description: "Advanced filtering options (by category, price and more!)"
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "Integration with trusted payment gateways such as Stripe"
  }
];

const AppDownload = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">
            Buy faster and from anywhere with our application
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            Enhance your shopping experience with our convenient mobile application, 
            allowing you to browse and purchase items easily from anywhere and anytime.
          </p>
          
          <div className="flex gap-4 mb-12">
            <button className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity">
              <div className="text-2xl">📱</div>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity">
              <div className="text-2xl">▶️</div>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;