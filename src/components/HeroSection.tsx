import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import img1 from "@/assets/carrousel/carrousel1.jpeg";
import img2 from "@/assets/carrousel/carrousel2.jpeg";
import img3 from "@/assets/carrousel/carrousel3.jpeg";
import img4 from "@/assets/carrousel/carrousel4.jpeg";
import img5 from "@/assets/carrousel/carrousel5.jpeg";
import img6 from "@/assets/carrousel/carrousel6.jpeg";
import mobile1 from "@/assets/carrousel/movile1.png";
import mobile2 from "@/assets/carrousel/movile2.png";
import mobile3 from "@/assets/carrousel/movile3.png";
import mobile4 from "@/assets/carrousel/movile4.png";
import mobile5 from "@/assets/carrousel/movile5.png";
import mobile6 from "@/assets/carrousel/movile6.png";

const images = [img1, img2, img3, img4, img5, img6];
const mobileImages = [mobile1, mobile2, mobile3, mobile4, mobile5, mobile6];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} id="inicio" className="relative h-[60vh] md:h-[78vh] w-full flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none w-full h-full"
        style={{ y: backgroundY }}
      >
        {/* Mobile: Carousel with 4 vertical images */}
        <div className="md:hidden w-full h-full">
          <Carousel
            className="w-full h-full"
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              containScroll: "trimSnaps",
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="h-full ml-0 -ml-0">
              {mobileImages.map((img, idx) => (
                <CarouselItem key={idx} className="h-full pl-0 basis-full min-w-full">
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      src={img}
                      alt={`Adriano Events Mobile ${idx + 1}`}
                      className="w-full h-full object-cover object-center pointer-events-none"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop/Laptop: Carousel with 4 images */}
        <div className="hidden md:block w-full h-full">
          <Carousel
            className="w-full h-full"
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              containScroll: "trimSnaps",
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="h-full ml-0 -ml-0">
              {images.map((img, idx) => (
                <CarouselItem key={idx} className="h-full pl-0 basis-full min-w-full">
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      src={img}
                      alt={`Adriano Events ${idx + 1}`}
                      className="w-full h-full object-cover object-center pointer-events-none"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </motion.div>

      {/* Refined Small Centered Button with Animation */}
      <div className="absolute bottom-6 md:bottom-12 left-0 right-0 z-50 flex justify-center px-4">
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
            className="group relative px-6 py-3 bg-black/30 backdrop-blur-md border-white/20 text-white rounded-full hover:bg-white hover:text-charcoal transition-all duration-500 border shadow-lg active:scale-90"
          >
            <span className="text-[10px] md:text-xs font-heading font-medium uppercase tracking-[0.5em] mr-[-0.5em]">
              Descubre más
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
