import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Heart, Building2, Tent, Armchair } from "lucide-react";

import weddingImg from "@/assets/hero-wedding.jpg";
import corpImg from "@/assets/corporate-event.jpg";
import tentImg from "@/assets/tent-architectural.jpg";
import furnitureImg from "@/assets/tableware.jpg";
import mobile1 from "@/assets/movileservicios/moviles.png";
import mobile2 from "@/assets/movileservicios/moviles1.png";
import mobile3 from "@/assets/movileservicios/moviles3.png";

const services = [
  {
    id: "sociales",
    icon: Heart,
    title: "Eventos Sociales",
    description: "Bodas, 15 Años, Graduaciones y celebraciones inolvidables",
    image: weddingImg,
    mobileImages: [mobile1, mobile2, mobile3], // Múltiples imágenes para móviles
  },
  {
    id: "corporativos",
    icon: Building2,
    title: "Eventos Corporativos",
    description: "Conferencias e integraciones empresariales de alto nivel",
    image: corpImg,
  },
  {
    id: "toldos",
    icon: Tent,
    title: "Alquiler de Toldos",
    description: "Toldos arquitectónicos y diseños a medida para tu evento",
    image: tentImg,
  },
  {
    id: "mobiliario-y-menaje",
    icon: Armchair,
    title: "Mobiliario y Menaje",
    description: "Mesas, sillas, cubertería y cristalería de lujo",
    image: furnitureImg,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  },
};

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={sectionRef} id="servicios" className="pt-12 pb-24 bg-background relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"
          style={{ y: backgroundY }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px]"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]) }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            className="text-primary text-xs tracking-[0.4em] uppercase font-bold inline-block mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Servicios Exclusivos
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Nuestras <span className="text-gradient-gold">Producciones</span>
          </motion.h2>
          <motion.div
            className="decorative-line h-1.5"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto mt-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Ofrecemos soluciones integrales y creativas para cada tipo de celebración,
            garantizando excelencia y profesionalismo en cada detalle.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-3xl aspect-[3/4] card-hover glass shadow-xl"
              >
                <Link to={`/servicios/${service.id}`} className="absolute inset-0 z-20" />
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  {/* Desktop Image - Always show */}
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 ${service.mobileImages ? 'hidden md:block' : ''}`}
                    whileHover={{ scale: 1.15 }}
                  />
                  {/* Mobile Images - Only for Eventos Sociales */}
                  {service.mobileImages && (
                    <div className="md:hidden w-full h-full">
                      <motion.img
                        src={service.mobileImages[0]}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                        whileHover={{ scale: 1.15 }}
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 group-hover:via-black/20 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 p-8 flex flex-col">
                  {/* Icon at Top-Left */}
                  <motion.div
                    className="w-12 h-12 rounded-2xl glass-dark flex items-center justify-center mb-auto self-start glow-gold group-hover:glow-gold-strong transition-all duration-500 shadow-2xl border border-white/10"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>

                  {/* Text at Bottom */}
                  <div className="mt-auto">
                    <h3 className="text-2xl font-heading font-bold text-white mb-3 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      <p className="text-white text-sm leading-relaxed mb-4 font-medium drop-shadow-md">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.2em]">
                        Ver detalles <span className="w-10 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
