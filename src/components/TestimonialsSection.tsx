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

  const decorY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={sectionRef} id="testimonios" className="section-padding bg-secondary/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"
        style={{ y: decorY }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]) }}
      />

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
            Voces de Satisfacción
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-gradient-gold">Testimonios</span> de Éxito
          </motion.h2>
          <motion.div
            className="decorative-line h-1.5"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -15 }}
              className="glass overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transition-all duration-500 hover:shadow-primary/10"
            >
              {/* Video Thumbnail - Professional Look */}
              <div className="relative aspect-video bg-charcoal group cursor-pointer overflow-hidden m-4 rounded-[1.8rem] border border-white/10">
                <img
                  src={`https://img.youtube.com/vi/${testimonial.videoId}/maxresdefault.jpg`}
                  alt={`Testimonio de ${testimonial.name}`}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 rounded-full glass-dark flex items-center justify-center border border-white/20 glow-gold"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                  </motion.div>
                </div>

                <div className="absolute top-6 left-6 px-4 py-2 glass-dark rounded-full border border-white/10">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/90">{testimonial.event}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 pt-4">
                <div className="relative">
                  <Quote className="w-12 h-12 text-primary/10 absolute -top-4 -left-4" />
                  <p className="text-muted-foreground italic leading-relaxed text-lg mb-8 relative z-10 pl-6 border-l-2 border-primary/30">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl glass-dark glow-gold flex items-center justify-center border border-primary/20">
                    <span className="text-xl font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-xl text-foreground mb-1">{testimonial.name}</div>
                    <div className="text-xs font-bold text-primary tracking-[0.2em] uppercase">{testimonial.event}</div>
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
