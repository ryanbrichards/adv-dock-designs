import React from 'react';
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Anchor, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              
              <img 
                src="https://img1.wsimg.com/isteam/ip/d6fc0bd2-09a7-4d4a-8530-47ec13c9647c/logo-white.png" 
                alt="Advanced Dock Designs"
                className="h-12 w-auto"
              />

            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Premium dock systems, boat lifts, and waterfront accessories 
              for residential and commercial properties.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/AdvancedDockDesigns" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'Services', 'Gallery', 'About', 'Contact'].map((link) =>
              <li key={link}>
                  <Link
                  to={createPageUrl(link)}
                  className="text-slate-400 hover:text-white transition-colors">

                    {link}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to={createPageUrl("Products") + "?category=docks"} className="hover:text-white transition-colors">Docks</Link></li>
              <li><Link to={createPageUrl("Products") + "?category=lifts"} className="hover:text-white transition-colors">Boat Lifts</Link></li>
              <li><Link to={createPageUrl("Products") + "?category=pwc"} className="hover:text-white transition-colors">PWC Ports</Link></li>
              <li><Link to={createPageUrl("Products") + "?category=accessories"} className="hover:text-white transition-colors">Kayak Launches</Link></li>
              <li><Link to={createPageUrl("Products") + "?category=accessories"} className="hover:text-white transition-colors">Dock Accessories</Link></li>
              <li><Link to={createPageUrl("Products") + "?category=accessories"} className="hover:text-white transition-colors">Gangways & Ramps</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">21101 Rte 19<br />Cranberry Twp, PA 16066</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-400">(412) 480-9670</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:advanceddockdesigns@gmail.com" className="text-slate-400 hover:text-white transition-colors">advanceddockdesigns@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Advanced Dock Designs. All rights reserved. v1.1
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>);

}
