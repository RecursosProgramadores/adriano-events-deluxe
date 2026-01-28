import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, Crown, GraduationCap, Building2, PartyPopper, Tent, Armchair, UtensilsCrossed } from "lucide-react";

import weddingImg from "@/assets/hero-wedding.jpg";
import quinceImg from "@/assets/quinceanera.jpg";
import gradImg from "@/assets/graduation.jpg";
import corpImg from "@/assets/corporate-event.jpg";
import partyImg from "@/assets/birthday-party.jpg";
import tentImg from "@/assets/tent-architectural.jpg";
import furnitureImg from "@/assets/furniture-rental.jpg";
import tablewareImg from "@/assets/tableware.jpg";

const services = [
  {
    id: "bodas",
    icon: Heart,
    title: "Bodas",
    description: "Celebramos el amor con elegancia y atención a cada detalle",
    image: weddingImg,
  },
  {
    id: "quinceaneras",
    icon: Crown,
    title: "15 Años",
    description: "Quinceañeros mágicos que cumplen los sueños de cada princesa",
    image: quinceImg,
  },
  {
    id: "graduaciones",
    icon: GraduationCap,
    title: "Graduaciones",
    description: "Celebra tus logros académicos con estilo y profesionalismo",
    image: gradImg,
  },
  {
    id: "corporativos",
    icon: Building2,
    title: "Eventos Corporativos",
    description: "Conferencias, integraciones y fiestas empresariales de alto nivel",
    image: corpImg,
  },
  {
    id: "sociales",
    icon: PartyPopper,
    title: "Shows Sociales",
    description: "Cumpleaños, activaciones y showrooms memorables",
    image: partyImg,
  },
  {
    id: "toldos",
    icon: Tent,
    title: "Alquiler de Toldos",
    description: "Toldos básicos, arquitectónicos y con diseños personalizados",
    image: tentImg,
  },
  {
    id: "mobiliario",
    icon: Armchair,
    title: "Alquiler de Mobiliario",
    description: "Mesas, sillas, barras de bar y más para tu evento",
    image: furnitureImg,
  },
  {
    id: "menaje",
    icon: UtensilsCrossed,
    title: "Alquiler de Menaje",
    description: "Cubertería premium, copas, platos y decoración de mesa",
    image: tablewareImg,
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
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={sectionRef} id="servicios" className="section-padding bg-background relative overflow-hidden">
      {/* Parallax decorative elements */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        style={{ y: backgroundY }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]) }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-primary text-sm tracking-[0.3em] uppercase font-medium inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Lo que hacemos
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Nuestros Servicios
          </motion.h2>
          <motion.div 
            className="decorative-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Ofrecemos una gama completa de servicios para hacer de tu evento una experiencia única e inolvidable
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.id}
                href={`#${service.id}`}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 } 
                }}
                className="group relative overflow-hidden rounded-lg aspect-[4/5] card-hover"
                style={{
                  transformOrigin: index % 2 === 0 ? "bottom left" : "bottom right"
                }}
              >
                {/* Background Image */}
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <motion.div 
                    className="transform transition-transform duration-300 group-hover:-translate-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.description}
                    </p>
                  </motion.div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
