import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  ArrowRight, 
  Compass, 
  Wrench, 
  Settings, 
  Truck, 
  Shield, 
  Clock,
  CheckCircle,
  Phone
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Compass,
    title: "Custom Dock Design",
    description: "Our expert designers work with you to create a dock system that maximizes your waterfront space and meets your specific needs.",
    features: [
      "On-site property assessment",
      "3D design visualization",
      "Permit assistance",
      "Material selection guidance",
      "Budget optimization"
    ],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80"
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Our certified installation team ensures your dock system is installed correctly, safely, and efficiently.",
    features: [
      "Certified installation team",
      "Typically 1-2 day install",
      "All hardware included",
      "Site cleanup",
      "Walkthrough & training"
    ],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80"
  },
  {
    icon: Settings,
    title: "Maintenance & Repair",
    description: "Keep your dock system in peak condition with our maintenance services and repair solutions.",
    features: [
      "Annual inspections",
      "Component replacement",
      "Storm damage repair",
      "Seasonal prep services",
      "Emergency repairs"
    ],
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80"
  },
  {
    icon: Truck,
    title: "Dock Relocation",
    description: "Moving to a new property? We can relocate your existing dock system safely and efficiently.",
    features: [
      "Disassembly & transport",
      "New site assessment",
      "Reconfiguration options",
      "Component inspection",
      "Reinstallation"
    ],
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&q=80"
  }
];

const process = [
  { step: "01", title: "Consultation", description: "Free consultation to discuss your needs and vision" },
  { step: "02", title: "Site Visit", description: "On-site assessment and measurements" },
  { step: "03", title: "Design", description: "Custom design and detailed proposal" },
  { step: "04", title: "Approval", description: "Permit handling and final approval" },
  { step: "05", title: "Installation", description: "Professional installation by our team" },
  { step: "06", title: "Enjoy", description: "Walk-through and ongoing support" },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From concept to completion, we provide comprehensive dock solutions 
            tailored to your waterfront property.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={createPageUrl("Contact")}>
                    <Button className="bg-blue-500 hover:bg-blue-600 rounded-full group">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <img 
                      src="https://img1.wsimg.com/isteam/ip/d6fc0bd2-09a7-4d4a-8530-47ec13c9647c/20210713_095201.jpg/:/rs=w:1023,cg:true,m" 
                      alt={service.title}
                      className="rounded-3xl w-full aspect-[4/3] object-cover shadow-2xl"
                    />
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-2xl flex items-center justify-center text-white">
                      <service.icon className="w-10 h-10" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
              Our Simple Process
            </h2>
            <p className="text-xl text-slate-600">
              From first call to final installation, we make the process easy and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl font-bold text-blue-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Serving the Tri-state Area
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              We proudly serve waterfront properties across Pennsylvania, Ohio, 
              and West Virginia. Contact us to see if we service your area.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full">
                  Request a Quote
                </Button>
              </Link>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full">
                <Phone className="mr-2 w-5 h-5" />
                (412) 480-9670
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}