import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  rating?: number;
  image: string;
  badge?: string;
}

const ProductCard = ({ title, price, originalPrice, rating, image, badge }: ProductCardProps) => {
  return (
    <Link to="/product/1">
      <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {badge && (
            <span className="absolute top-3 left-3 px-2 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded">
              {badge}
            </span>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-sm mb-2 line-clamp-2 min-h-[40px]">{title}</h3>
          <div className="flex items-center gap-1 mb-2">
            {rating && (
              <>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-xs text-muted-foreground ml-1">({rating})</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
