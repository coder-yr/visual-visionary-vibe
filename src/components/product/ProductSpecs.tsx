import { Card } from "@/components/ui/card";

interface SpecSection {
  title: string;
  specs: { label: string; value: string }[];
}

const specSections: SpecSection[] = [
  {
    title: "Display",
    specs: [
      { label: "Screen Type", value: "light" },
      { label: "Diagonal", value: '24 inches' },
      { label: "Resolution", value: "4480 x 2520" },
      { label: "Format", value: "4x" },
    ],
  },
  {
    title: "Processor",
    specs: [
      { label: "Processor Type", value: "Apple M3" },
      { label: "Model", value: "M3" },
      { label: "Physical cores", value: "8" },
      { label: "Virtual Cores", value: "16" },
      { label: "Technology", value: "3nm" },
    ],
  },
  {
    title: "RAM memory",
    specs: [
      { label: "Capacity", value: "8GB" },
      { label: "Maximum memory", value: "64GB" },
    ],
  },
  {
    title: "Storage",
    specs: [
      { label: "Capacity", value: "512GB" },
    ],
  },
];

const ProductSpecs = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      {specSections.map((section) => (
        <Card key={section.title} className="p-6">
          <h3 className="font-bold text-lg mb-4">{section.title}</h3>
          <div className="space-y-3">
            {section.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between items-center py-2 border-b border-border last:border-0"
              >
                <span className="text-sm text-muted-foreground">{spec.label}</span>
                <span className="text-sm font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProductSpecs;
