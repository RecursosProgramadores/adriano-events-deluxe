import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="section-padding bg-charcoal text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-8">
              Creando Experiencias
              <span className="text-primary"> Inolvidables</span>
            </h2>
            
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Somos especialistas en la producción de bodas, quinceañeros, graduaciones 
              y eventos corporativos de alto nivel en Lima, Perú. Con años de experiencia, 
              hemos transformado miles de celebraciones en momentos mágicos e inolvidables.
            </p>
            
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Valoramos la <span className="text-primary font-medium">excelencia</span>, 
              la atención a los <span className="text-primary font-medium">detalles</span> y 
              la <span className="text-primary font-medium">satisfacción total</span> de nuestros clientes. 
              Cada evento es único y lo tratamos con la dedicación que merece.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { number: "500+", label: "Eventos Realizados" },
                { number: "15+", label: "Años de Experiencia" },
                { number: "100%", label: "Clientes Satisfechos" },
                { number: "50+", label: "Profesionales" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="xl" asChild>
              <a href="#contacto">Transforma tu idea en realidad</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
