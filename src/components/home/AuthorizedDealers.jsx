import React from 'react';
import { motion } from "framer-motion";

export default function AuthorizedDealers() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Authorized Dealer
          </h2>
          <p className="text-slate-600 text-sm">Proud partners of industry-leading brands</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
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
                className="h-14 md:h-16 w-auto object-contain hover:opacity-80 transition-opacity"
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
                className="h-14 md:h-16 w-auto object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}