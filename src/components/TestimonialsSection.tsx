import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María García",
    event: "Boda 2025",
    quote: "Adriano superó todas nuestras expectativas. Nuestra boda fue simplemente mágica, cada detalle estuvo perfecto. ¡Los recomendamos al 100%!",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    event: "Evento Corporativo",
    quote: "Profesionalismo de primera. Organizaron nuestro evento de fin de año para 300 personas y todo salió impecable. Excelente servicio.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 3,
    name: "Lucía Fernández",
    event: "Quinceañero",
    quote: "El quinceañero de mi hija fue un sueño hecho realidad. La decoración, los toldos, todo fue espectacular. Gracias por hacer de ese día algo inolvidable.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 4,
    name: "Roberto Sánchez",
    event: "Graduación Universitaria",
    quote: "Contratamos a Adriano para la graduación de nuestra promoción y el resultado fue increíble. Montaje profesional y atención personalizada.",
    videoId: "dQw4w9WgXcQ",
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
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: "easeOut" as const
    } 
  },
};

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const decorY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} id="testimonios" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Parallax decorative elements */}
      <motion.div 
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        style={{ y: decorY }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            Lo que dicen nuestros clientes
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Testimonios
          </motion.h2>
          <motion.div 
            className="decorative-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-background rounded-2xl shadow-elegant overflow-hidden"
            >
              {/* Video Thumbnail */}
              <motion.div 
                className="relative aspect-video bg-muted group cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={`https://img.youtube.com/vi/${testimonial.videoId}/maxresdefault.jpg`}
                  alt={`Testimonio de ${testimonial.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-primary flex items-center justify-center"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                  </motion.div>
                </div>
                <motion.div 
                  className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-xs font-medium">{testimonial.event}</span>
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <motion.div
                  initial={{ opacity: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                </motion.div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-accent flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-sm font-semibold text-accent-foreground">
                      {testimonial.name.charAt(0)}
                    </span>
                  </motion.div>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.event}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
