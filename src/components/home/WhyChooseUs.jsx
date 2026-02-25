import React from 'react';
import { Shield, Award, Clock, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Shield,
    title: "Built to Last",
    description: "Our docks are constructed with marine-grade materials designed to withstand the harshest conditions for decades."
  },
  {
    icon: Award,
    title: "Industry Leaders",
    description: "As authorized EZ Dock and ShoreMaster dealers, we bring premium products and expert knowledge to every project."
  },
  {
    icon: Clock,
    title: "Quick Installation",
    description: "Most dock systems are installed within 1-2 days, minimizing disruption to your waterfront enjoyment."
  },
  {
    icon: HeartHandshake,
    title: "Lifetime Support",
    description: "Our relationship doesn't end at installation. We provide ongoing support and maintenance services."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              The Advanced Dock
              <span className="text-blue-400"> Difference</span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              With over 20 years of experience in waterfront solutions, we've built 
              our reputation on quality craftsmanship and exceptional customer service.
            </p>
          </div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}