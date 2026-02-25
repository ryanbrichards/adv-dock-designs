import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://lakescape.com/wp-content/uploads/2024/12/Docks-17.jpg')"
        }}>

        <div className="absolute inset-0 bg-blue-900/90" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Waterfront?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Get a free consultation and custom quote for your dock project. 
            Our experts are ready to help you design the perfect solution.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={createPageUrl("Contact")}>
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg rounded-full group">

                Request a Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg rounded-full group">
              <Phone className="mr-2 w-5 h-5" />
              (412) 480-9670
            </Button>
          </div>

          <p className="mt-8 text-blue-200 text-sm">
            Free estimates • Professional installation • Lifetime support
          </p>
        </div>
      </div>
    </section>
  );
}