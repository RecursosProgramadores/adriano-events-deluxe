import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Categorías y mapeo de carpetas
const assetFolders = [
  { path: "@/assets/15anos", category: "15 Años", suffix: "Mágico" },
  { path: "@/assets/bodas", category: "Bodas", suffix: "Elegante" },
  { path: "@/assets/cumple", category: "Sociales", suffix: "Social" },
  { path: "@/assets/Eventoscorporativos", category: "Corporativos", suffix: "Empresarial" },
  { path: "@/assets/mobiliarios", category: "Mobiliario", suffix: "Premium" },
  { path: "@/assets/toldo", category: "Toldos", suffix: "Exclusivo" },
];

// Importación dinámica de todas las imágenes
const allImages: Record<string, any> = import.meta.glob(
  [
    "@/assets/15anos/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
    "@/assets/bodas/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
    "@/assets/cumple/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
    "@/assets/Eventoscorporativos/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
    "@/assets/mobiliarios/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
    "@/assets/toldo/*.{jpg,jpeg,png,JPG,JPEG,PNG}"
  ],
  { eager: true }
);

const galleryImages = Object.entries(allImages).map(([path, module]: [string, any], index) => {
  const folder = assetFolders.find(f => path.toLowerCase().includes(f.path.split('/').pop()?.toLowerCase() || ""));
  const category = folder ? folder.category : "Otros";
  const suffix = folder ? folder.suffix : "Producción";

  const fileName = path.split('/').pop()?.split('.')[0] || "";
  const title = fileName
    .replace(/[0-9]/g, '')
    .replace(/quince|imagen|cumple|event|mobiliario|toldo/gi, '')
    .trim();

  return {
    id: index,
    src: module.default || module,
    category,
    title: title ? `${title.charAt(0).toUpperCase() + title.slice(1)} ${suffix}` : `${category} ${suffix}`
  };
});

const categories = ["Todos", "Bodas", "15 Años", "Corporativos", "Sociales", "Toldos", "Mobiliario"];

interface MarqueeRowProps {
  images: typeof galleryImages;
  direction: "left" | "right";
  speed?: number;
  onImageClick: (image: typeof galleryImages[0]) => void;
}

function MarqueeRow({ images, direction, speed = 40, onImageClick }: MarqueeRowProps) {
  // Duplicar imágenes para efecto infinito
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="flex overflow-hidden py-4 select-none">
      <motion.div
        className="flex gap-6 flex-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {duplicatedImages.map((image, idx) => (
          <motion.div
            key={`${image.id}-${idx}`}
            className="relative flex-shrink-0 w-64 md:w-80 aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer shadow-lg group"
            onClick={() => onImageClick(image)}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">{image.category}</span>
              <p className="text-white text-sm font-medium line-clamp-1">{image.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredImages = activeCategory === "Todos"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const selectedImage = selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

  const navigateImage = useCallback((direction: "next" | "prev") => {
    if (selectedImageIndex === null) return;

    let newIndex = direction === "next"
      ? selectedImageIndex + 1
      : selectedImageIndex - 1;

    if (newIndex >= filteredImages.length) newIndex = 0;
    if (newIndex < 0) newIndex = filteredImages.length - 1;

    setSelectedImageIndex(newIndex);
  }, [selectedImageIndex, filteredImages]);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "Escape") setSelectedImageIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, navigateImage]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const decorY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Dividir imágenes en filas
  const rowsCount = activeCategory === "Todos" ? 4 : 2;
  const rowImages = Array.from({ length: rowsCount }, (_, i) =>
    filteredImages.filter((_, idx) => idx % rowsCount === i)
  );

  return (
    <section ref={sectionRef} id="galeria" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Parallax Background */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"
        style={{ y: decorY }}
      />

      <div className="container mx-auto px-4 relative z-10 mb-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            className="text-primary text-xs tracking-[0.4em] uppercase font-bold inline-block mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Portafolio Exclusivo
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Galería de <span className="text-gradient-gold">Momentos</span>
          </motion.h2>
          <motion.div
            className="decorative-line h-1.5"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-500 border ${activeCategory === category
                ? "bg-primary text-primary-foreground border-primary shadow-lg scale-110"
                : "glass text-muted-foreground border-primary/10 hover:border-primary/40 hover:text-primary"
                }`}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Infinite Carousels */}
      <div className="w-full flex flex-col gap-2 mask-linear-gallery overflow-hidden">
        {rowImages.map((images, idx) => (
          images.length > 0 && (
            <MarqueeRow
              key={`${activeCategory}-row-${idx}`}
              images={images}
              direction={idx % 2 === 0 ? "left" : "right"}
              speed={30 + (idx * 5)}
              onImageClick={(img) => {
                const globalIndex = filteredImages.findIndex(fi => fi.src === img.src);
                setSelectedImageIndex(globalIndex);
              }}
            />
          )
        ))}
      </div>

      {/* Lightbox - Minimalist Navigation */}
      <AnimatePresence>
        {selectedImageIndex !== null && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-8 right-8 text-white/70 hover:text-primary transition-all p-3 glass rounded-full z-[110]"
              onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(null); }}
            >
              <X className="w-8 h-8" />
            </motion.button>

            {/* Navigation Buttons */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 pointer-events-none">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 rounded-full glass text-white/70 hover:text-primary pointer-events-auto transition-all"
                onClick={(e) => { e.stopPropagation(); navigateImage("prev"); }}
              >
                <ChevronLeft className="w-10 h-10" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 rounded-full glass text-white/70 hover:text-primary pointer-events-auto transition-all"
                onClick={(e) => { e.stopPropagation(); navigateImage("next"); }}
              >
                <ChevronRight className="w-10 h-10" />
              </motion.button>
            </div>

            {/* Minimalist Image Image-Only */}
            <div className="relative max-w-5xl w-full h-full flex items-center justify-center p-4">
              <motion.img
                key={selectedImage.src}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/5"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

