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
    <section ref={sectionRef} className="section-padding bg-charcoal text-white relative overflow-hidden">
      {/* Parallax decorative elements */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        style={{ y: decorY1 }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        style={{ y: decorY2 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="text-primary text-sm tracking-[0.3em] uppercase font-medium inline-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Sobre Nosotros
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Creando Experiencias
              <motion.span 
                className="text-primary inline-block ml-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Inolvidables
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-white/80 text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Somos especialistas en la producción de bodas, quinceañeros, graduaciones 
              y eventos corporativos de alto nivel en Lima, Perú. Con años de experiencia, 
              hemos transformado miles de celebraciones en momentos mágicos e inolvidables.
            </motion.p>
            
            <motion.p 
              className="text-white/80 text-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Valoramos la <span className="text-primary font-medium">excelencia</span>, 
              la atención a los <span className="text-primary font-medium">detalles</span> y 
              la <span className="text-primary font-medium">satisfacción total</span> de nuestros clientes. 
              Cada evento es único y lo tratamos con la dedicación que merece.
            </motion.p>

            {/* Stats with staggered animation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.4 + index * 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <motion.div 
                    className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#contacto">Transforma tu idea en realidad</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
