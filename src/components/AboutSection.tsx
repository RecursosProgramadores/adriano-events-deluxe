import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const stats = [
  { number: "500+", label: "Eventos Realizados" },
  { number: "15+", label: "Años de Experiencia" },
  { number: "100%", label: "Clientes Satisfechos" },
  { number: "50+", label: "Profesionales" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const decorY1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const decorY2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section ref={sectionRef} id="nosotros" className="section-padding bg-charcoal text-white relative overflow-hidden">
      {/* Decorative Parallax Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
        style={{ y: decorY1 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]"
        style={{ y: decorY2 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <motion.span
              className="text-primary text-xs tracking-[0.4em] uppercase font-bold inline-block mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Legado & Excelencia
            </motion.span>

            <motion.h2
              className="text-4xl md:text-6xl font-heading font-bold mt-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Sobre <span className="text-gradient-gold">Eventos Adriano</span>
            </motion.h2>
            <motion.div
              className="decorative-line h-1.5 mx-auto mt-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-heading font-bold mb-8 text-gradient-gold">Nuestra Historia</h3>
              <p className="text-white/90 text-xl leading-relaxed mb-8 italic font-light pl-6 border-l-2 border-primary/30">
                Un viaje desde la humildad hacia la cima de la organización de eventos.
              </p>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
                <p>
                  Lo que comenzó como un modesto emprendimiento familiar con una piñatería, se ha transformado en un referente de lujo y distinción en el Perú.
                </p>
                <p>
                  A través de cada celebración, aprendimos que el secreto reside en los detalles que otros pasan por alto. Desde nuestros primeros toldos de madera hasta las majestuosas estructuras modernas, nuestra evolución ha sido impulsada por un compromiso inquebrantable con la perfección.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="p-10 rounded-[2.5rem] glass-dark border border-white/10 relative group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary flex items-center gap-4">
                  <span className="w-10 h-px bg-primary/50"></span> Nuestra Misión
                </h3>
                <p className="text-white/70 text-lg leading-relaxed font-light">
                  Creamos momentos inolvidables mediante soluciones integrales y creativas de la más alta gama, garantizando experiencias memorables y exclusivas.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="p-10 rounded-[2.5rem] glass-dark border border-white/10 relative group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary flex items-center gap-4">
                  <span className="w-10 h-px bg-primary/50"></span> Nuestra Visión
                </h3>
                <p className="text-white/70 text-lg leading-relaxed font-light">
                  Consolidarnos como la productora líder en eventos sociales y corporativos a nivel nacional, siendo sinónimo de excelencia, prestigio y vanguardia.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Stats - Premium Presentation */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-20 bg-white/5 backdrop-blur-sm rounded-[3rem] p-12 border border-white/5">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gradient-gold mb-3 transition-transform duration-500 group-hover:scale-110">
                  {stat.number}
                </div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-[0.3em] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <Button variant="hero" size="xl" asChild className="btn-premium glow-gold px-12 py-8 text-xl">
              <a href="#contacto">Inicia tu Proyecto</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

