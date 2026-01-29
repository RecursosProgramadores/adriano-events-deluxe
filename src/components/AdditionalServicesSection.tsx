import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import corporateImg from "@/assets/corporate-event.jpg";
import gradImg from "@/assets/graduation.jpg";
import tentImg from "@/assets/tent-architectural.jpg";
import furnitureImg from "@/assets/furniture-rental.jpg";
import tablewareImg from "@/assets/tableware.jpg";
import partyImg from "@/assets/birthday-party.jpg";

const corporateServices = [
  "Conferencias y seminarios",
  "Team building e integraciones",
  "Fiestas de fin de año",
  "Congresos y convenciones",
  "Excursiones empresariales",
  "Lanzamientos de productos",
];

const socialServices = [
  "Cumpleaños temáticos",
  "Activaciones de marca",
  "Showrooms y exhibiciones",
  "Baby showers",
  "Aniversarios especiales",
  "Fiestas privadas",
];

const tentTypes = [
  { name: "Básicos", desc: "Toldos funcionales para cualquier evento" },
  { name: "Arquitectónicos", desc: "Estructuras elegantes con diseños únicos" },
  { name: "Con Diseño", desc: "Personalizados según tu visión y temática" },
];

const furnitureItems = [
  "Mesas redondas y rectangulares",
  "Sillas Tiffany y Chiavari",
  "Sillas tipo lounge",
  "Barras de bar profesionales",
  "Estaciones de coctelería",
  "Muebles lounge premium",
];

const tablewareItems = [
  "Cubiertos plateados y dorados",
  "Platos de porcelana fina",
  "Copas de cristal premium",
  "Vasos de diseño",
  "Bases para flores",
  "Fuentes y centros de mesa",
];

export default function AdditionalServicesSection() {
  return (
    <>
      {/* Graduaciones */}
      <section id="graduaciones" className="section-padding bg-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <span className="text-primary text-xs tracking-[0.4em] uppercase font-bold mb-4 inline-block">
                Éxito Académico
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-6">
                <span className="text-gradient-gold">Graduaciones</span> de Élite
              </h2>
              <div className="w-20 h-1 bg-primary mb-8 rounded-full" />
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Celebra el fin de una etapa con la distinción que mereces. Nuestra producción
                transforma las ceremonias de graduación en eventos de gala inolvidables.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Desde la planificación del protocolo hasta la fiesta de celebración,
                cuidamos cada aspecto para que los graduados y sus familias vivan una noche mágica.
              </p>
              <Button asChild size="lg" className="btn-premium glow-gold">
                <a href="#contacto">Cotizar Graduación</a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl img-zoom">
                <img src={gradImg} alt="Graduación elegante" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eventos Corporativos */}
      <section id="corporativos" className="section-padding bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl img-zoom">
                <img src={corporateImg} alt="Evento corporativo" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-xs tracking-[0.4em] uppercase font-bold mb-4 inline-block">
                Excelencia Empresarial
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-6">
                Eventos <span className="text-gradient-gold">Corporativos</span>
              </h2>
              <div className="w-20 h-1 bg-primary mb-8 rounded-full" />
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Elevamos la imagen de tu organización con eventos corporativos impecables.
                Desde seminarios ejecutivos hasta grandes galas empresariales.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {corporateServices.map((service) => (
                  <div key={service} className="flex items-center gap-3 glass p-3 rounded-xl border border-primary/10">
                    <div className="w-2 h-2 rounded-full bg-primary glow-gold" />
                    <span className="text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="btn-premium glow-gold">
                <a href="#contacto">Solicitar Propuesta</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shows Sociales */}
      <section id="sociales" className="section-padding bg-secondary/20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <span className="text-primary text-xs tracking-[0.4em] uppercase font-bold mb-4 inline-block">
                Momentos Vibrantes
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-6">
                Shows <span className="text-gradient-gold">Sociales</span>
              </h2>
              <div className="w-20 h-1 bg-primary mb-8 rounded-full" />
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Creamos la atmósfera perfecta para tus celebraciones más importantes.
                Cada show es una obra de arte diseñada para impresionar.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {socialServices.map((service) => (
                  <div key={service} className="flex items-center gap-3 glass p-3 rounded-xl border border-primary/10">
                    <div className="w-2 h-2 rounded-full bg-primary glow-gold" />
                    <span className="text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="btn-premium glow-gold">
                <a href="#contacto">Planificar Evento</a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl img-zoom">
                <img src={partyImg} alt="Fiesta de cumpleaños" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alquiler de Toldos */}
      <section id="toldos" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <motion.span
              className="text-primary text-xs tracking-[0.4em] uppercase font-bold inline-block mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Infraestructura de Clase Mundial
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
              Alquiler de <span className="text-gradient-gold">Toldos</span>
            </h2>
            <div className="decorative-line h-1.5" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl img-zoom border-4 border-primary/10">
                <img src={tentImg} alt="Toldo arquitectónico" className="w-full aspect-[4/3] object-cover" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                Nuestras estructuras combinan seguridad y estética superior. Diseñadas
                para resistir y embellecer cualquier espacio exterior.
              </p>
              <div className="grid gap-6 mb-10">
                {tentTypes.map((tent) => (
                  <div key={tent.name} className="p-6 rounded-2xl glass border border-primary/20 hover:border-primary/50 transition-colors group">
                    <h4 className="font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors">{tent.name}</h4>
                    <p className="text-muted-foreground leading-relaxed">{tent.desc}</p>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="btn-premium glow-gold">
                <a href="#contacto">Ver Catálogo de Toldos</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alquiler de Mobiliario y Menaje - Modern Grid */}
      <section className="section-padding bg-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mobiliario Card */}
            <motion.div
              id="mobiliario"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[2.5rem] border border-primary/20 flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors" />
              <h3 className="text-2xl md:text-4xl font-heading font-bold mb-6">
                <span className="text-gradient-gold">Mobiliario</span> Premium
              </h3>
              <p className="text-muted-foreground mb-8">Elegancia y confort en cada pieza para tus invitados.</p>
              <ul className="space-y-4 mb-10 flex-grow">
                {furnitureItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full btn-premium">
                <a href="#contacto">Catálogo de Mobiliario</a>
              </Button>
            </motion.div>

            {/* Menaje Card */}
            <motion.div
              id="menaje"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-charcoal p-10 rounded-[2.5rem] border border-white/10 flex flex-col h-full text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
              <h3 className="text-2xl md:text-4xl font-heading font-bold mb-6">
                <span className="text-gradient-gold">Menaje</span> de Lujo
              </h3>
              <p className="text-white/60 mb-8">Pequeños detalles que definen la grandeza de tu evento.</p>
              <ul className="space-y-4 mb-10 flex-grow">
                {tablewareItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full btn-premium">
                <a href="#contacto">Catálogo de Menaje</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
