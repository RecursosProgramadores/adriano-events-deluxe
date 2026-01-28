import { motion } from "framer-motion";
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
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesSection() {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Lo que hacemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
            Nuestros Servicios
          </h2>
          <div className="decorative-line" />
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Ofrecemos una gama completa de servicios para hacer de tu evento una experiencia única e inolvidable
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.id}
                href={`#${service.id}`}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg aspect-[4/5] card-hover"
              >
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
