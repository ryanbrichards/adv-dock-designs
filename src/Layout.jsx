import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Anchor, Menu, X, Phone } from "lucide-react";
import Footer from "@/components/shared/Footer";

const navLinks = [
  { name: "Home", page: "Home" },
  { name: "Products", page: "Products" },
  { name: "Services", page: "Services" },
  { name: "Gallery", page: "Gallery" },
  { name: "About", page: "About" },
  { name: "Contact", page: "Contact" },
];

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = currentPageName === "Home";
  const headerBg = isScrolled || !isHomePage 
    ? "bg-white shadow-sm" 
    : "bg-transparent";
  const textColor = isScrolled || !isHomePage 
    ? "text-slate-900" 
    : "text-white";
  const logoColor = isScrolled || !isHomePage
    ? "bg-blue-500"
    : "bg-white/20 backdrop-blur-sm";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3">
              <img 
                src={isHomePage && !isScrolled 
                  ? "https://i.postimg.cc/vDVvvhmS/logo-white.png"
                  : "https://i.postimg.cc/5QLqN4GB/logo-black.png"
                }
                alt="Advanced Dock Designs"
                className="h-12 w-auto transition-opacity duration-300"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={createPageUrl(link.page)}
                  className={`font-medium transition-colors ${
                    currentPageName === link.page 
                      ? 'text-blue-500' 
                      : `${textColor} hover:text-blue-500`
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Link to={createPageUrl("Contact")} className="hidden sm:block">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6">
                  Contact Us
                </Button>
              </Link>

              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon" className={textColor}>
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 p-0">
                  <div className="flex flex-col h-full">
                    <div className="p-6 border-b">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                          <Anchor className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">Advanced Dock</p>
                          <p className="text-slate-500 text-sm -mt-1">Designs</p>
                        </div>
                      </div>
                    </div>
                    <nav className="flex-1 p-6">
                      <ul className="space-y-4">
                        {navLinks.map((link) => (
                          <li key={link.name}>
                            <Link
                              to={createPageUrl(link.page)}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block py-2 text-lg font-medium ${
                                currentPageName === link.page 
                                  ? 'text-blue-500' 
                                  : 'text-slate-700 hover:text-blue-500'
                              }`}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <div className="p-6 border-t bg-slate-50">
                      <Link to={createPageUrl("Contact")} onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full">
                          Contact Us
                        </Button>
                      </Link>
                      <div className="flex items-center justify-center gap-2 mt-4 text-slate-600">
                        <Phone className="w-4 h-4" />
                        <span>(412) 480-9670</span>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={!isHomePage ? "pt-20" : ""}>
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}