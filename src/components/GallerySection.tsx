import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import weddingImg from "@/assets/hero-wedding.jpg";
import quinceImg from "@/assets/quinceanera.jpg";
import gradImg from "@/assets/graduation.jpg";
import corpImg from "@/assets/corporate-event.jpg";
import tentImg from "@/assets/tent-architectural.jpg";
import furnitureImg from "@/assets/furniture-rental.jpg";
import tablewareImg from "@/assets/tableware.jpg";
import partyImg from "@/assets/birthday-party.jpg";

const galleryImages = [
  { src: weddingImg, category: "Bodas", title: "Boda al aire libre con toldo arquitectónico" },
  { src: quinceImg, category: "15 Años", title: "Quinceañero temático rosa y dorado" },
  { src: corpImg, category: "Corporativos", title: "Conferencia corporativa ejecutiva" },
  { src: tentImg, category: "Toldos", title: "Toldo arquitectónico en evento nocturno" },
  { src: gradImg, category: "Graduaciones", title: "Celebración de graduación elegante" },
  { src: furnitureImg, category: "Mobiliario", title: "Showroom de mobiliario premium" },
  { src: partyImg, category: "15 Años", title: "Fiesta de cumpleaños decorada" },
  { src: tablewareImg, category: "Menaje", title: "Mesa con menaje de lujo" },
];

const categories = ["Todos", "Bodas", "15 Años", "Corporativos", "Toldos", "Mobiliario"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const decorY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const filteredImages = activeCategory === "Todos" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section ref={sectionRef} id="galeria" className="section-padding bg-background relative overflow-hidden">
      {/* Parallax decorative element */}
      <motion.div 
        className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        style={{ y: decorY }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <motion.span 
            className="text-primary text-sm tracking-[0.3em] uppercase font-medium inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nuestro trabajo
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Galería de Eventos
          </motion.h2>
          <motion.div 
            className="decorative-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -30 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  layout: { duration: 0.4 }
                }}
                whileHover={{ y: -8 }}
                className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer card-hover"
                onClick={() => setSelectedImage(image)}
              >
                <motion.img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-primary text-xs uppercase tracking-wider">{image.category}</span>
                    <h4 className="text-white text-sm font-medium mt-1">{image.title}</h4>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: 0.2 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </motion.button>
              <motion.img
                initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <motion.div 
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-primary text-sm uppercase tracking-wider">{selectedImage.category}</span>
                <h4 className="text-white text-lg font-medium mt-1">{selectedImage.title}</h4>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
