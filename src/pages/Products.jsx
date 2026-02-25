import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "all", name: "All Products" },
  { id: "docks", name: "Docks" },
  { id: "lifts", name: "Boat Lifts" },
  { id: "pwc", name: "PWC Ports" },
  { id: "accessories", name: "Accessories" },
];

const products = [
  {
    id: 1,
    name: "EZ Dock Modular Platform",
    category: "docks",
    price: "$2,499",
    priceNote: "per 40 sq ft section",
    image: "https://fwmdocks.com/wp-content/uploads/2024/03/FWM-Docks-Image-12-1.png",
    badge: "Best Seller",
    description: "The foundation of any waterfront system. Stable, durable, and maintenance-free.",
    features: ["40 sq ft sections", "600 lb capacity per section", "UV resistant", "20-year warranty", "No annual maintenance"]
  },
  {
    id: 2,
    name: "Premium Boat Lifts",
    category: "lifts",
    price: "$4,999",
    priceNote: "starting price",
    image: "https://www.boatlift.com/media/yqbn4kyb/hhnc-tow-boat-2.jpg",
    badge: null,
    description: "Heavy-duty boat lift system for vessels up to 10,000 lbs.",
    features: ["Up to 15,000 lbs", "Floating or vertical lifts", "Compatible with all boat types"]
  },
  {
    id: 3,
    name: "PWC Port",
    category: "pwc",
    price: "$1,299",
    priceNote: "single port",
    image: "https://www.ez-dock.com/content/uploads/2026/01/21_08_11_EZDock_Day01_DL_21135_edit.jpg.webp",
    badge: "Popular",
    description: "Easy drive-on, drive-off port for personal watercraft.",
    features: ["Fits most PWC models", "No lifting required", "Self-centering design", "Rollers included", "Quick connect system"]
  },
  {
    id: 4,
    name: "Shoremaster Dock Systems",
    category: "docks",
    price: "$2,999",
    priceNote: "per 40 sq ft section",
    image: "https://www.shoremaster.com/media/iaynde35/trad-oak-woodgrain_rs4_1.jpg",
    badge: "Popular",
    description: "Choose from nine premium, low-maintenance decking styles, including painted aluminum, woodgrain aluminum, and flow-through poly.",
    features: ["40 sq ft sections", "600 lb capacity per section", "UV resistant", "20-year warranty", "No annual maintenance"]
  },
  {
    id: 5,
    name: "Kayak Launch",
    category: "accessories",
    price: "$1299",
    priceNote: "complete kit",
    image: "https://assets.newatlas.com/dims4/default/f3454b3/2147483647/strip/true/crop/960x637+0+0/resize/960x637!/format/webp/quality/90/?url=https%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fez-personal-launch-1.jpg",
    badge: "New",
    description: "Launch system for kayaks and paddleboards.",
    features: ["Easy entry/exit", "Fits all kayak sizes", "Low-profile design"]
  },
  {
    id: 6,
    name: "EZ Dock Gangway",
    category: "accessories",
    price: "$1,499",
    priceNote: "starting price",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXtYe8Br8rKSswZeRnlEag5TqsLkEzY_7Bw&s",
    badge: null,
    description: "Adjustable aluminum gangway for shore-to-dock access.",
    features: ["4ft, 8ft, 12ft options", "Non-slip surface", "Handrails available", "Self-adjusting", "Marine-grade"]
  },
  {
    id: 7,
    name: "Aluminum Gangway",
    category: "accessories",
    price: "$1,799",
    priceNote: "starting price",
    image: "https://cdn11.bigcommerce.com/s-gmr4r19ftk/images/stencil/original/products/711/1903/residential-gangways-style__84772.1712180767.jpg?c=1",
    badge: null,
    description: "Adjustable aluminum gangway for shore-to-dock access.",
    features: ["12ft, 16ft, 18ft options", "Non-slip surface", "Handrails available", "Self-adjusting", "Marine-grade aluminum"]
  },
  {
    id: 8,
    name: "Aluminium Stairway Systems",
    category: "accessories",
    price: "$1,399",
    priceNote: "starting price",
    image: "https://www.boatliftanddock.com/MediaStorage/Product/Images/Small/4049_20190413071435625.jpg",
    badge: null,
    description: "Ideal for waterfront access, docks, and slopes.",
    features: ["4-19 step options", "31.25in and 36in step widths", "Railings and legs available"]
  }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category') || "all";
  });

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
      setActiveCategory(category);
      window.scrollTo(0, 0);
    }
  }, [window.location.search]);

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Products
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Authorized dealer for EZ Dock and ShoreMaster. Premium dock systems, 
            boat lifts, and accessories designed for durability and low maintenance.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="bg-slate-100 p-1 rounded-full flex-wrap h-auto gap-1">
                {categories.map((cat) => (
                  <TabsTrigger 
                    key={cat.id} 
                    value={cat.id}
                    className="rounded-full px-6 py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                  >
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {product.badge && (
                      <Badge className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-500">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                    <p className="text-slate-600 text-sm mb-4">{product.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                          <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-end justify-between pt-4 border-t border-slate-100">
                      <div>
                        <p className="text-2xl font-bold text-slate-900">{product.price}</p>
                        <p className="text-sm text-slate-500">{product.priceNote}</p>
                      </div>
                      <Link to={createPageUrl("Contact")}>
                        <Button className="bg-blue-500 hover:bg-blue-600 rounded-full">
                          Get Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Custom Solutions CTA */}
          <div className="mt-20 bg-slate-50 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Every waterfront is unique. Our design team can create a custom 
              configuration that perfectly fits your property and lifestyle.
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 rounded-full group">
                Request Custom Design
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}