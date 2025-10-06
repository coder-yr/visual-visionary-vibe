import { Facebook, Twitter, Instagram, Youtube, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">About ShopHub</h3>
            <p className="text-sm text-background/80 mb-4">
              Your one-stop destination for the latest tech, gadgets, and electronics. Quality products at unbeatable prices.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-background hover:text-background/80 hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-background/80 hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-background/80 hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-background/80 hover:bg-background/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Track Order</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Payment Methods</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Warranty</a></li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="font-bold text-lg mb-4">Download Our App</h3>
            <p className="text-sm text-background/80 mb-4">
              Shop faster with our mobile app. Available on iOS and Android.
            </p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start bg-background/10 border-background/20 text-background hover:bg-background/20">
                <Smartphone className="mr-2 h-4 w-4" />
                App Store
              </Button>
              <Button variant="outline" className="w-full justify-start bg-background/10 border-background/20 text-background hover:bg-background/20">
                <Smartphone className="mr-2 h-4 w-4" />
                Google Play
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/80">
            <p>© 2025 ShopHub. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
