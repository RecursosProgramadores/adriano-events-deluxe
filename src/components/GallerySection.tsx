import { useState } from "react";
import { motion } from "framer-motion";
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

  const filteredImages = activeCategory === "Todos" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Nuestro trabajo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
            Galería de Eventos
          </h2>
          <div className="decorative-line" />
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer card-hover"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-primary text-xs uppercase tracking-wider">{image.category}</span>
                  <h4 className="text-white text-sm font-medium mt-1">{image.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <span className="text-primary text-sm uppercase tracking-wider">{selectedImage.category}</span>
              <h4 className="text-white text-lg font-medium mt-1">{selectedImage.title}</h4>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
