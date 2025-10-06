import { 
  Smartphone, 
  Headphones, 
  Laptop, 
  Watch, 
  Camera, 
  Gamepad2,
  Tv,
  Speaker,
  Monitor
} from "lucide-react";

const categories = [
  { name: "Phones", icon: Smartphone, color: "hsl(221 83% 53%)" },
  { name: "Audio", icon: Headphones, color: "hsl(280 60% 55%)" },
  { name: "Laptop", icon: Laptop, color: "hsl(200 80% 55%)" },
  { name: "Watch", icon: Watch, color: "hsl(160 60% 50%)" },
  { name: "Camera", icon: Camera, color: "hsl(340 60% 55%)" },
  { name: "Gaming", icon: Gamepad2, color: "hsl(45 90% 55%)" },
  { name: "TV", icon: Tv, color: "hsl(260 60% 55%)" },
  { name: "Speakers", icon: Speaker, color: "hsl(180 60% 50%)" },
  { name: "Display", icon: Monitor, color: "hsl(300 60% 55%)" },
];

const CategoryGrid = () => {
  return (
    <section className="py-12">
      <div className="container px-4">
        <h2 className="text-2xl font-bold mb-6">Top categories</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-muted transition-colors group"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: category.color }} />
                </div>
                <span className="text-sm font-medium text-center">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
