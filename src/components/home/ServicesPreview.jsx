import React from 'react';
import { Anchor, Wrench, Compass, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

const services = [
  {
    icon: Anchor,
    title: "Dock Systems",
    description: "Authorized dealer for EZ Dock and ShoreMaster. Floating and stationary docks with custom wood, poly, or steel trussed construction designed for any waterfront - durable, low-maintenance, and customizable.",
    image: "https://www.ez-dock.com/content/uploads/2017/12/ClarkV_170817__P2A0813.jpg"
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Expert installation by certified technicians. We handle permits, design, and complete setup.",
    image: "https://img1.wsimg.com/isteam/ip/d6fc0bd2-09a7-4d4a-8530-47ec13c9647c/20210713_095201.jpg/:/rs=w:1023,cg:true,m"
  },
  {
    icon: Compass,
    title: "Custom Design",
    description: "Work with our designers to create the perfect dock configuration for your property and lifestyle.",
    image: "https://img1.wsimg.com/isteam/ip/d6fc0bd2-09a7-4d4a-8530-47ec13c9647c/L%20shape.jpg/:/rs=w:1160,h:642"
  },
  {
    icon: Package,
    title: "Boat Lifts & Accessories",
    description: "Premium boat lifts, PWC ports, kayak launches, and waterfront accessories.",
    image: "https://www.shoremaster.com/media/bsjboejo/smr48511_04507_ts9_hydrauliclift_pwclift_flowthroughdecking_aerial.jpg?width=2000&format=webp&v=1dc226223a5a570"
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
            Complete Dock Solutions
          </h2>
          <p className="text-xl text-slate-600">
            From design to installation, we provide everything you need for the perfect waterfront experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-slate-50 hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center mb-6 -mt-14 relative z-10 shadow-lg">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link 
            to={createPageUrl("Services")}
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}