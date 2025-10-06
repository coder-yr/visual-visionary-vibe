import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ProductTabs = () => {
  return (
    <div className="mt-12">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="description"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Reviews
          </TabsTrigger>
          <TabsTrigger
            value="questions"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Questions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-6 space-y-6">
          <div className="prose max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              The iMac "M1" 8-Core CPU/8-Core GPU/4 USB-C Shaped Ports (2021) model features a 5-nm 
              3.2 GHz Apple M1 processor with 8 cores (4 performance cores and 4 efficiency cores), an 
              8-core GPU, a 16-core Neural Engine, 8 GB of onboard RAM, and a 1 TB onboard SSD.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This all is housed in a wafer thin aluminum case with flat edges that includes a 23.5" 4480x2520, 
              218 PPI, LED-backlit, IPS "Retina 4.5K" display mounted on a sleek aluminum stand. This specific 
              model is offered in a two-tone Blue color. It also has an integrated 1080p "FaceTime HD" camera, 
              a "studio-quality three-mic array" and a "high-fidelity six-speaker system" that supports Spatial 
              Audio with Dolby Atmos.
            </p>
          </div>

          {/* Collapsible Sections */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="details">
              <AccordionTrigger>Product Details</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Connectivity includes two Thunderbolt / USB 4 ports and two USB 3 ports (all with a USB-C 
                    connector), a 3.5 mm headphone jack conveniently positioned on the side of the display, 
                    Wi-Fi 6 (802.11ax), and Bluetooth 5.0.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="specs">
              <AccordionTrigger>Specifications</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    <strong>Brilliant 4.5K Retina display:</strong> See the big picture and all the details! 
                    It all in sharp, glorious detail on the immersive 24-inch 4.5K Retina display. The P3 
                    wide color gamut brings what you're watching to life in over a billion colors with a 
                    brilliant 500 nits of brightness.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="warranty">
              <AccordionTrigger>Warranty</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Your iMac comes with 90 days of complimentary technical support and a one-year limited 
                    warranty. Purchase AppleCare+ for Mac to extend your coverage from your AppleCare+ 
                    purchase date and add unlimited repairs for accidental damage from handling, each 
                    subject to a service fee of $99 for screen damage or external enclosure damage, or 
                    $299 for other repairable accidental damage, plus applicable tax.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <div className="text-center py-12 text-muted-foreground">
            <p>Customer reviews will be displayed here.</p>
          </div>
        </TabsContent>

        <TabsContent value="questions" className="mt-6">
          <div className="text-center py-12 text-muted-foreground">
            <p>Product questions and answers will be displayed here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductTabs;
