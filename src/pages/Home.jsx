import React from 'react';
import HeroSection from "@/components/home/HeroSection";
import AuthorizedDealers from "@/components/home/AuthorizedDealers";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AuthorizedDealers />
      <ServicesPreview />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </div>
  );
}