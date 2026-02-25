import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Award, 
  Users, 
  Anchor, 
  Shield, 
  Heart, 
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { number: "20+", label: "Years in Business" },
  { number: "500+", label: "Docks Installed" },
  { number: "98%", label: "Customer Satisfaction" },
  { number: "50+", label: "5-Star Reviews" },
];

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "We never compromise on materials or craftsmanship. Every dock we build is designed to last."
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We listen, adapt, and deliver solutions that exceed expectations."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We stay at the forefront of dock technology, bringing you the latest and best solutions."
  }
];

const team = [
  {
    name: "Mike Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    bio: "25+ years in marine construction"
  },
  {
    name: "Sarah Williams",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80",
    bio: "Expert in waterfront planning"
  },
  {
    name: "Tom Anderson",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
    bio: "20 years installation experience"
  },
  {
    name: "Emily Chen",
    role: "Customer Relations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80",
    bio: "Dedicated to your satisfaction"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://fwmdocks.com/wp-content/uploads/2024/03/FWM-Docks-Image-12-1.png')",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Building Dreams on the Water Since 2005
            </h1>
            <p className="text-xl text-slate-300">
              Advanced Dock Designs has been transforming waterfronts across 
              the region for over 20 years.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-white">{stat.number}</p>
                <p className="text-blue-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
                From Water Lovers to Industry Leaders
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Advanced Dock Designs was founded in 2005 by lifelong 
                  water enthusiasts who saw the need for better dock solutions. What started 
                  as a small operation has grown into one of the region's most trusted 
                  waterfront specialists.
                </p>
                <p>
                  As authorized dealers for both EZ Dock and ShoreMaster, we bring the best 
                  dock and lift technology to our customers, backed by our expert 
                  design and installation services. Every project we take on reflects our 
                  commitment to quality and customer satisfaction.
                </p>
                <p>
                  Today, our team of certified professionals has installed over 500 dock 
                  systems across Pennsylvania, Ohio, and West Virginia. We're proud 
                  to be a family-owned business that treats every customer like a neighbor.
                </p>
                <p>
                  Whether you have a lake, river, pond, or waterfront of any shape and size, 
                  we have the perfect solution. We understand the unique challenges of river 
                  docks, including strong currents and fluctuating water levels, which is why 
                  our engineering team specializes in designing robust river moorings that 
                  stand up to demanding conditions. No matter your specific project's challenges, 
                  we have the expertise and solutions to meet your needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://fwmdocks.com/wp-content/uploads/2024/03/FWM-Docks-Image-12-1.png"
                alt="Our team at work"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-blue-600 rounded-2xl p-6 text-white max-w-[200px]">
                <Award className="w-10 h-10 mb-2" />
                <p className="font-bold text-sm">Authorized Dealer</p>
                <p className="text-blue-200 text-xs">EZ Dock & ShoreMaster</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authorized Dealer Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Authorized Dealer
            </h2>
            <p className="text-slate-600">Proud partners of industry-leading brands</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <a href="https://www.ez-dock.com/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://gatewayezdocks.ca/wp-content/uploads/2021/01/EZD_Logo-2-Color.png"
                  alt="EZ Dock"
                  className="h-20 md:h-24 w-auto object-contain hover:opacity-80 transition-opacity"
                />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <a href="https://www.shoremaster.com/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://boatingindustry.com/wp-content/uploads/2020/12/Screen-Shot-2020-12-03-at-10.02.03-AM.png"
                  alt="ShoreMaster"
                  className="h-20 md:h-24 w-auto object-contain hover:opacity-80 transition-opacity"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-8">
                The Advanced Dock Advantage
              </h2>
              <ul className="space-y-4">
                {[
                  "Authorized dealer for EZ Dock & ShoreMaster with factory training",
                  "Free on-site consultations and quotes",
                  "Custom designs for any waterfront",
                  "Professional installation in 1-2 days",
                  "Comprehensive warranty coverage",
                  "Ongoing maintenance and support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to={createPageUrl("Contact")} className="inline-block mt-8">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 rounded-full group">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://img1.wsimg.com/isteam/ip/d6fc0bd2-09a7-4d4a-8530-47ec13c9647c/20210713_095201.jpg"
                alt="Dock installation"
                className="rounded-2xl w-full aspect-[3/4] object-cover"
              />
              <img 
                src="https://fwmdocks.com/wp-content/uploads/2017/01/P47-Residential-Dock-TX.jpg"
                alt="Boat dock"
                className="rounded-2xl w-full aspect-[3/4] object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}