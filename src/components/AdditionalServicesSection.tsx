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
      <section id="graduaciones" className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
                Celebra tus logros
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-6">
                Graduaciones
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Celebra tus logros académicos con la elegancia que mereces. Organizamos 
                ceremonias de graduación y fiestas de celebración que honran años de 
                esfuerzo y dedicación.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ofrecemos paquetes Básico, Platinum y Premium adaptados a promociones 
                de todos los tamaños, desde grupos pequeños hasta grandes generaciones.
              </p>
              <Button asChild>
                <a href="#contacto">Cotizar Graduación</a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elegant-lg img-zoom">
                <img src={gradImg} alt="Graduación elegante" className="w-full aspect-[4/3] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eventos Corporativos */}
      <section id="corporativos" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elegant-lg img-zoom">
                <img src={corporateImg} alt="Evento corporativo" className="w-full aspect-[4/3] object-cover" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
                Soluciones empresariales
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-6">
                Eventos Corporativos
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Elevamos la imagen de tu empresa con eventos profesionales de alto nivel. 
                Desde conferencias ejecutivas hasta celebraciones de fin de año.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {corporateServices.map((service) => (
                  <li key={service} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {service}
                  </li>
                ))}
              </ul>
              <Button asChild>
                <a href="#contacto">Solicitar Propuesta</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shows Sociales */}
      <section id="sociales" className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
                Celebraciones especiales
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-6">
                Shows Sociales
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Cada celebración merece ser extraordinaria. Creamos ambientes únicos 
                para cumpleaños, activaciones de marca, showrooms y eventos sociales exclusivos.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {socialServices.map((service) => (
                  <li key={service} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {service}
                  </li>
                ))}
              </ul>
              <Button asChild>
                <a href="#contacto">Planificar Evento</a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elegant-lg img-zoom">
                <img src={partyImg} alt="Fiesta de cumpleaños" className="w-full aspect-[4/3] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alquiler de Toldos */}
      <section id="toldos" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
              Estructuras para eventos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
              Alquiler de Toldos
            </h2>
            <div className="decorative-line" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elegant-lg img-zoom">
                <img src={tentImg} alt="Toldo arquitectónico" className="w-full aspect-[4/3] object-cover" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ofrecemos una variedad de toldos y estructuras para eventos al aire libre, 
                adaptables a cualquier espacio y temática. Nuestros toldos brindan protección 
                y elegancia para tu celebración.
              </p>
              <div className="grid gap-4 mb-8">
                {tentTypes.map((tent) => (
                  <div key={tent.name} className="p-4 rounded-lg bg-accent/50 border border-border">
                    <h4 className="font-heading font-semibold mb-1">{tent.name}</h4>
                    <p className="text-sm text-muted-foreground">{tent.desc}</p>
                  </div>
                ))}
              </div>
              <Button asChild>
                <a href="#contacto">Ver Catálogo de Toldos</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alquiler de Mobiliario */}
      <section id="mobiliario" className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
                Mobiliario de eventos
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-6">
                Alquiler de Mobiliario
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Contamos con una amplia selección de muebles de alta calidad para 
                equipar tu evento con estilo. Desde mesas elegantes hasta barras 
                de coctelería profesionales.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {furnitureItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild>
                <a href="#contacto">Ver Catálogo</a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elegant-lg img-zoom">
                <img src={furnitureImg} alt="Mobiliario para eventos" className="w-full aspect-[4/3] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alquiler de Menaje */}
      <section id="menaje" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elegant-lg img-zoom">
                <img src={tablewareImg} alt="Menaje premium" className="w-full aspect-[4/3] object-cover" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
                Detalles que importan
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-6">
                Alquiler de Menaje
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Los pequeños detalles hacen la diferencia. Ofrecemos menaje premium 
                que añade elegancia y sofisticación a cada mesa de tu evento.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {tablewareItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild>
                <a href="#contacto">Solicitar Cotización</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
