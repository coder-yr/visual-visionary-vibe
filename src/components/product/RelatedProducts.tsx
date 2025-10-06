import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface RelatedProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  badge?: string;
  colors?: string[];
}

const relatedProducts: RelatedProduct[] = [
  {
    id: 1,
    title: "Xbox Series S 1TB SSD",
    price: 499,
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=400&fit=crop",
    badge: "Buy in installments with Goomoney Wallet",
    colors: ["#000000"],
  },
  {
    id: 2,
    title: "Apple iPhone 15 Pro Max",
    price: 1299,
    image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400&h=400&fit=crop",
    badge: "Buy in installments with Goomoney Wallet",
    colors: ["#000000", "#6B46C1", "#EF4444", "#3B82F6"],
  },
  {
    id: 3,
    title: 'iMac 24" (2021)',
    price: 1999,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop",
    badge: "Buy in installments with Goomoney Wallet",
    colors: ["#000000", "#3B82F6", "#F97316", "#06B6D4"],
  },
];

const RelatedProducts = () => {
  return (
    <section className="py-12 border-t border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary uppercase">Related Products</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="flex items-center px-3 text-sm text-muted-foreground">
            1 of 4
          </span>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden group">
            <div className="relative aspect-square bg-muted">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">{product.title}</h3>
              {product.badge && (
                <p className="text-xs text-green-600 mb-3">{product.badge}</p>
              )}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">${product.price}</span>
                {product.colors && (
                  <div className="flex gap-1">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-background shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <Heart className="h-4 w-4 mr-1" />
                  Wishlist
                </Button>
                <Button variant="default" size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                  Buy now
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
