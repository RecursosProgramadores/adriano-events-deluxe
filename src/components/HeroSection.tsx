import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

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
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full pointer-events-none"
            src="https://www.youtube.com/embed/A7hO_XD8px0?autoplay=1&mute=1&loop=1&playlist=A7hO_XD8px0&controls=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&enablejsapi=1"
            title="Video de Fondo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* Overlay to dim the video for better text contrast if needed */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Subtle Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/60 to-transparent z-10" />
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
