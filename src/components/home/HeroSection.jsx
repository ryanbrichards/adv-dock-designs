import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/54cb475ce4b0d3e11439f18c/1480052494791-6HVGFBYMI3EE0YRMAPFF/pexels-photo-110573.jpeg')"
        }}>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-blue-400" />
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">
              Premium Dock Solutions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Your Waterfront,
            <span className="block text-blue-400">Perfected</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">Custom-designed personalized docks, boat lifts, and waterfront accessories. Transform your waterfront with solutions built to last.


          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={createPageUrl("Contact")}>
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full group">

                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to={createPageUrl("Products")}>
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full group">
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>


        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>);

}