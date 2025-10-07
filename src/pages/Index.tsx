import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import ProductShowcase from "@/components/ProductShowcase";
import PromoBanners from "@/components/PromoBanners";
import ExclusivelyCurated from "@/components/ExclusivelyCurated";
import ArticleFeature from "@/components/ArticleFeature";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4">
          <HeroSection />
        </div>
        <CategoryGrid />
        <ProductShowcase />
        <PromoBanners />
        <ExclusivelyCurated />
        <ArticleFeature />
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
