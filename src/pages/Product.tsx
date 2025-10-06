import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductTabs from "@/components/product/ProductTabs";
import ProductSpecs from "@/components/product/ProductSpecs";
import RelatedProducts from "@/components/product/RelatedProducts";

const Product = () => {
  const productImages = [
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1547082688-e4c018c95c4d?w=800&h=800&fit=crop",
  ];

  const productData = {
    title: 'Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM',
    price: 1249.99,
    rating: 4.5,
    reviewCount: 345,
    inStock: true,
    deliveryInfo: "Deliver to Bonnie Green - Sacramento 23847",
    colors: [
      { name: "Green", value: "#10B981" },
      { name: "Pink", value: "#EC4899" },
      { name: "Silver", value: "#9CA3AF" },
      { name: "Blue", value: "#3B82F6" },
    ],
    storageOptions: ["256GB", "512GB", "1TB"],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container px-4 py-8">
          {/* Product Main Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <ProductImageGallery
              images={productImages}
              productName={productData.title}
            />
            <ProductInfo {...productData} />
          </div>

          {/* Product Details Tabs */}
          <ProductTabs />

          {/* Product Specifications */}
          <ProductSpecs />

          {/* Related Products */}
          <RelatedProducts />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
