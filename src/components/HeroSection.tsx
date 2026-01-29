import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wedding.jpg";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} id="inicio" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background Image with Parallax and Zoom */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={heroImage}
          alt="Evento de lujo - Producciones Eventos Adriano"
          className="w-full h-full object-cover"
        />
        {/* Subtle Bottom Gradient for text readability if needed, but keeping it minimal for "natural" look */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/40 to-transparent z-10" />
      </motion.div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl md:block hidden"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl md:block hidden"
        />
      </div>

      {/* Refined Small Centered Button with Animation */}
      <div className="absolute bottom-16 left-0 right-0 z-50 flex justify-center px-4">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Button
            onClick={() => {
              const nextSection = document.getElementById('servicios');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            variant="outline"
            className="group relative px-8 py-4 bg-black/30 backdrop-blur-lg border-white/20 text-white rounded-full hover:bg-white hover:text-charcoal transition-all duration-500 border shadow-lg active:scale-90"
          >
            <span className="text-xs font-heading font-medium uppercase tracking-[0.5em] mr-[-0.5em]">
              Descubre más
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
