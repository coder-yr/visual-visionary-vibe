import { 
  Laptop, 
  ShoppingBag, 
  Tv, 
  Headphones, 
  Monitor, 
  Gamepad2,
  Dumbbell,
  Heart,
  Truck,
  Book,
  Home,
  Camera,
  Clipboard,
  Eye,
  Smartphone
} from "lucide-react";

const categories = [
  { name: "Computers", icon: Laptop, color: "hsl(221 83% 53%)" },
  { name: "Fashion", icon: ShoppingBag, color: "hsl(221 83% 53%)" },
  { name: "Electronics", icon: Tv, color: "hsl(221 83% 53%)" },
  { name: "Gaming", icon: Gamepad2, color: "hsl(221 83% 53%)" },
  { name: "TV/Projectors", icon: Monitor, color: "hsl(221 83% 53%)" },
  { name: "Toys", icon: Dumbbell, color: "hsl(221 83% 53%)" },
  { name: "Sport", icon: Dumbbell, color: "hsl(221 83% 53%)" },
  { name: "Health", icon: Heart, color: "hsl(221 83% 53%)" },
  { name: "Auto", icon: Truck, color: "hsl(221 83% 53%)" },
  { name: "Books", icon: Book, color: "hsl(221 83% 53%)" },
  { name: "Home", icon: Home, color: "hsl(221 83% 53%)" },
  { name: "Photo/Video", icon: Camera, color: "hsl(221 83% 53%)" },
  { name: "Collectibles", icon: Clipboard, color: "hsl(221 83% 53%)" },
  { name: "Beauty", icon: Eye, color: "hsl(221 83% 53%)" },
  { name: "Audio", icon: Headphones, color: "hsl(221 83% 53%)" },
  { name: "Phones", icon: Smartphone, color: "hsl(221 83% 53%)" },
];

const CategoryGrid = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container px-4">
        <h2 className="text-2xl font-bold mb-6">Top categories</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 max-w-6xl">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors group"
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center bg-primary/10 transition-transform group-hover:scale-110"
                >
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-medium text-center text-foreground">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
