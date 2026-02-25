import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const categories = [
  { id: "all", name: "All Projects" },
  { id: "residential", name: "Residential" },
  { id: "commercial", name: "Commercial" },
  { id: "lifts", name: "Boat Lifts" },
];

const projects = [
  {
    id: 1,
    title: "Watter's Landing",
    category: "commercial",
    location: "Cowansville, PA",
    description: "Custom composite marina.",
    image: "https://i.postimg.cc/rKDQ7TgB/watters-landing-3.jpg"
  },
  {
    id: 2,
    title: "Watter's Landing",
    category: "commercial",
    location: "Cowansville, PA",
    description: "Custom composite marina.",
    image: "https://i.postimg.cc/kB2fLCf3/watters-landing-1.webp"
  },
  {
    id: 3,
    title: "Watter's Landing",
    category: "commercial",
    location: "Cowansville, PA",
    description: "Custom composite marina.",
    image: "https://i.postimg.cc/crvXPWXG/watters-landing.webp"
  },
  {
    id: 4,
    title: "Allegheny River",
    category: "residential",
    location: "Cowansville, PA",
    description: "Custom composite dock.",
    image: "https://i.postimg.cc/RFSn0dxV/young.webp"
  },
  {
    id: 5,
    title: "Floating Boat Lift",
    category: "lifts",
    location: "Youghiogheny River Lake, PA",
    description: "HydroHoist Lift.",
    image: "https://i.postimg.cc/N5KpZtbd/hydrohoist.webp"
  },
  {
    id: 6,
    title: "Floating Boat Lift",
    category: "lifts",
    location: "Youghiogheny River Lake, PA",
    description: "HydroHoist Lift.",
    image: "https://i.postimg.cc/F1WTPzb2/hydrohoist-2.webp"
  },
  {
    id: 7,
    title: "Allegheny River",
    category: "residential",
    location: "Cowansville, PA",
    description: "Custom composite dock.",
    image: "https://i.postimg.cc/RFSn0dxV/young.webp"
  },
  {
    id: 8,
    title: "Allegheny River",
    category: "residential",
    location: "Cowansville, PA",
    description: "Dual EZ Ports.",
    image: "https://i.postimg.cc/xqx6s8Gh/ezdock-double.jpg"
  },
  {
    id: 9,
    title: "Fishing Dock",
    category: "residential",
    location: "Treasure Lake, PA",
    description: "Simple platform dock with gangway access.",
    image: "https://i.postimg.cc/jCgM8269/ez-dock-fish.webp"
  },
  {
    id: 10,
    title: "Allegheny River",
    category: "residential",
    location: "Cowansville, PA",
    description: "Custom composite dock with aluminum gang way.",
    image: "https://i.postimg.cc/2V12gYTX/lauffer.jpg"
  },
  {
    id: 11,
    title: "Allegheny River",
    category: "residential",
    location: "Cowansville, PA",
    description: "Custom composite dock with aluminum gang way.",
    image: "https://i.postimg.cc/BXjMR3Nk/richards.jpg"
  },
  {
    id: 12,
    title: "Allegheny River",
    category: "residential",
    location: "Cowansville, PA",
    description: "Custom composite dock with aluminum gang way.",
    image: "https://i.postimg.cc/0bzchvcg/ruffelo.webp"
  }
  
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const currentIndex = selectedProject 
    ? filteredProjects.findIndex(p => p.id === selectedProject.id)
    : -1;

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const goToPrev = () => {
    const prevIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Project Gallery
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Browse our portfolio of completed dock installations across the region.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="bg-slate-100 p-1 rounded-full">
                {categories.map((cat) => (
                  <TabsTrigger 
                    key={cat.id} 
                    value={cat.id}
                    className="rounded-full px-6 py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                  >
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-blue-300 text-sm flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-slate-900 border-none">
          <div className="relative">
            {/* Image */}
            <img 
              src={selectedProject?.image} 
              alt={selectedProject?.title}
              className="w-full aspect-video object-cover"
            />
            
            {/* Navigation */}
            <button 
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Info */}
            <div className="p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{selectedProject?.title}</h2>
              <p className="text-blue-300 flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4" />
                {selectedProject?.location}
              </p>
              <p className="text-slate-300">{selectedProject?.description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Let's discuss how we can create the perfect dock solution for your waterfront property.
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 rounded-full">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}