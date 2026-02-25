import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

const products = [
  {
    name: "EZ Dock",
    category: "Dock Systems",
    price: "Starting at $2,499",
    image: "https://fwmdocks.com/wp-content/uploads/2024/03/FWM-Docks-Image-12-1.png",
    badge: "Best Seller",
    features: ["Modular design", "UV resistant", "20-year warranty"]
  },
  {
    name: "PWC Port",
    category: "Watercraft Lifts",
    price: "Starting at $1,299",
    image: "https://www.ez-dock.com/content/uploads/2026/01/21_08_11_EZDock_Day01_DL_21135_edit.jpg.webp",
    badge: "Popular",
    features: ["Easy drive-on", "No lifting required", "Fits most PWCs"]
  },
  {
    name: "Boat Lift System",
    category: "Boat Lifts",
    price: "Starting at $4,999",
    image: "https://www.boatlift.com/media/yqbn4kyb/hhnc-tow-boat-2.jpg",
    badge: null,
    features: ["Up to 15,000 lbs", "Floating or vertical lifts", "Compatible with all boat types"]
  },
  {
    name: "Shoremaster Dock Systems",
    category: "Dock Systems",
    price: "Starting at $2,999",
    image: "https://www.shoremaster.com/media/iaynde35/trad-oak-woodgrain_rs4_1.jpg",
    badge: "Popular",
    features: ["Premium decking", "Low-maintenance", "20-year warranty"]
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Featured Products
            </h2>
          </div>
          <Link to={createPageUrl("Products")} className="mt-6 md:mt-0">
            <Button variant="outline" className="rounded-full group">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {product.badge && (
                  <Badge className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-500">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <div className="p-6">
                <p className="text-sm text-blue-600 font-medium mb-1">{product.category}</p>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h3>
                <ul className="space-y-1 mb-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-semibold text-slate-900">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}