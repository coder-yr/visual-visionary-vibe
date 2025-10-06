import { useState } from "react";
import { Star, Heart, MapPin, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProductInfoProps {
  title: string;
  price: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  colors: { name: string; value: string }[];
  storageOptions: string[];
  deliveryInfo: string;
}

const ProductInfo = ({
  title,
  price,
  rating,
  reviewCount,
  inStock,
  colors,
  storageOptions,
  deliveryInfo,
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);
  const [selectedPickup, setSelectedPickup] = useState("shipping");
  const [selectedWarranty, setSelectedWarranty] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Title and Rating */}
      <div>
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <div className="flex items-center gap-4 mb-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({reviewCount.toLocaleString()} reviews)
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-green-600" />
          <span className="text-green-600 font-medium">{deliveryInfo}</span>
        </div>
      </div>

      {/* Price and Quantity */}
      <div className="flex items-center justify-between">
        <div className="text-4xl font-bold text-primary">
          ${price.toLocaleString()}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Quantity</span>
          <div className="flex items-center gap-2 border border-border rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center font-medium">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full justify-start"
          size="lg"
        >
          <Heart className="h-5 w-5 mr-2" />
          Add to favorites
        </Button>
        <Button variant="default" className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
          Add to cart
        </Button>
        <p className="text-xs text-muted-foreground">
          Also available at competitive prices from{" "}
          <a href="#" className="text-primary underline">
            authorized retailers
          </a>
          , with optional Premium delivery for expedited shipping.
        </p>
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="font-semibold mb-3">Colour</h3>
        <div className="flex gap-2">
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(index)}
              className={cn(
                "px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all",
                selectedColor === index
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              )}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>

      {/* Storage Options */}
      <div>
        <h3 className="font-semibold mb-3">SSD capacity</h3>
        <div className="flex gap-2">
          {storageOptions.map((storage, index) => (
            <button
              key={index}
              onClick={() => setSelectedStorage(index)}
              className={cn(
                "px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all",
                selectedStorage === index
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              )}
            >
              {storage}
            </button>
          ))}
        </div>
      </div>

      {/* Pickup Options */}
      <div>
        <h3 className="font-semibold mb-3">Pickup</h3>
        <Card className="p-4 space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="radio"
              name="pickup"
              value="shipping"
              checked={selectedPickup === "shipping"}
              onChange={(e) => setSelectedPickup(e.target.value)}
              className="mt-1"
            />
            <div className="flex-1">
              <div className="font-medium">Shipping - $19</div>
              <div className="text-sm text-muted-foreground">Arrives Feb 13</div>
            </div>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="radio"
              name="pickup"
              value="freePickup"
              checked={selectedPickup === "freePickup"}
              onChange={(e) => setSelectedPickup(e.target.value)}
              className="mt-1"
            />
            <div className="flex-1">
              <div className="font-medium text-green-600">
                Pickup from Freebloc- $9
              </div>
              <div className="text-sm text-green-600">Pick a Freebloc near you</div>
            </div>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="radio"
              name="pickup"
              value="storePickup"
              checked={selectedPickup === "storePickup"}
              onChange={(e) => setSelectedPickup(e.target.value)}
              className="mt-1"
            />
            <div className="flex-1">
              <div className="font-medium">Pickup from our store</div>
              <div className="text-sm text-muted-foreground">Not available</div>
            </div>
          </label>
        </Card>
      </div>

      {/* Warranty */}
      <div>
        <h3 className="font-semibold mb-3">Add extra warranty</h3>
        <div className="flex gap-2 flex-wrap">
          {[
            { label: "1 year - $39", value: "1year" },
            { label: "2 years - $69", value: "2year" },
            { label: "3 years - $991", value: "3year" },
          ].map((warranty) => (
            <button
              key={warranty.value}
              onClick={() =>
                setSelectedWarranty(
                  selectedWarranty === warranty.value ? null : warranty.value
                )
              }
              className={cn(
                "px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all",
                selectedWarranty === warranty.value
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              )}
            >
              {warranty.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
