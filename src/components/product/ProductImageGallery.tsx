import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "w-20 h-20 rounded-lg border-2 overflow-hidden transition-all hover:border-primary",
              selectedImage === index ? "border-primary" : "border-border"
            )}
          >
            <img
              src={image}
              alt={`${productName} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 aspect-square bg-muted rounded-xl overflow-hidden border border-border">
        <img
          src={images[selectedImage]}
          alt={productName}
          className="w-full h-full object-contain p-8"
        />
      </div>
    </div>
  );
};

export default ProductImageGallery;
