import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  title: string;
  price: string;
  originalPrice?: string;
  rating?: number;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "4K 55 OLED Smart TV with HDR10+ and Dolby Vision",
    price: "$799.99",
    originalPrice: "$999.99",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=800&fit=crop",
    badge: "-20%"
  },
  {
    id: 2,
    title: "Wireless Noise Cancelling Over-Ear Headphones",
    price: "$299.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop"
  },
  {
    id: 3,
    title: "Smartwatch Series 7 with GPS and Fitness Tracking",
    price: "$399.99",
    originalPrice: "$449.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop"
  },
  {
    id: 4,
    title: "Professional Mirrorless Camera 24MP with Lens Kit",
    price: "$1,299.99",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=800&fit=crop"
  },
  {
    id: 5,
    title: "Gaming Console Next Gen with 1TB Storage",
    price: "$499.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=800&h=800&fit=crop",
    badge: "NEW"
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Trending Non-Duch Favorite</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
