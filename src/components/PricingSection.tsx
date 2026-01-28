import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  subtitle: string;
  features: string[];
  highlighted?: boolean;
  eventType: string;
}

function PricingCard({ title, subtitle, features, highlighted = false, eventType }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative rounded-2xl p-8 transition-all duration-500 ${
        highlighted
          ? "bg-charcoal text-white shadow-elegant-lg scale-105 z-10"
          : "bg-white border border-border shadow-elegant"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
          Más Popular
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className={`text-2xl font-heading font-bold mb-2 ${highlighted ? "text-white" : "text-foreground"}`}>
          {title}
        </h3>
        <p className={`text-sm ${highlighted ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
              highlighted ? "bg-primary" : "bg-accent"
            }`}>
              <Check className={`w-3 h-3 ${highlighted ? "text-primary-foreground" : "text-primary"}`} />
            </div>
            <span className={`text-sm ${highlighted ? "text-white/90" : "text-muted-foreground"}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button 
        variant={highlighted ? "hero" : "outline"} 
        className="w-full" 
        asChild
      >
        <a href={`#contacto?evento=${eventType}&paquete=${title}`}>
          Solicitar Información
        </a>
      </Button>
    </motion.div>
  );
}

const weddingPackages = [
  {
    title: "Clásico",
    subtitle: "Para bodas íntimas y elegantes",
    features: [
      "Decoración floral básica",
      "Iluminación ambiental",
      "Mobiliario estándar (50 invitados)",
      "Coordinación del día",
      "Montaje y desmontaje",
    ],
  },
  {
    title: "Platinum",
    subtitle: "Nuestra opción más solicitada",
    features: [
      "Decoración floral premium",
      "Iluminación arquitectónica LED",
      "Mobiliario de lujo (100 invitados)",
      "Coordinación completa del evento",
      "Toldo arquitectónico",
      "Menaje premium plateado",
      "DJ y sonido profesional",
    ],
    highlighted: true,
  },
  {
    title: "Premium",
    subtitle: "Experiencia de bodas de ensueño",
    features: [
      "Todo lo incluido en Platinum",
      "Diseño personalizado exclusivo",
      "Mobiliario importado (150+ invitados)",
      "Videomapping y efectos especiales",
      "Catering gourmet coordinado",
      "Photographer y videógrafo",
      "Suite nupcial decorada",
    ],
  },
];

const quincePackages = [
  {
    title: "Clásico",
    subtitle: "Celebración tradicional",
    features: [
      "Decoración temática básica",
      "Iluminación festiva",
      "Mobiliario para 80 invitados",
      "Arco de entrada decorado",
      "Coordinación del evento",
    ],
  },
  {
    title: "Platinum",
    subtitle: "Quinceañero de revista",
    features: [
      "Decoración de fantasía completa",
      "Iluminación LED profesional",
      "Mobiliario premium (120 invitados)",
      "Escenario para vals y sorpresas",
      "Toldo con diseño personalizado",
      "Mesa de postres decorada",
      "Fotografía profesional 4 horas",
    ],
    highlighted: true,
  },
  {
    title: "Premium",
    subtitle: "La noche perfecta",
    features: [
      "Todo lo incluido en Platinum",
      "Diseño 100% personalizado",
      "Efectos especiales y pirotecnia",
      "DJ y animación completa",
      "Video de aftermovie",
      "Pastel de 5 pisos personalizado",
      "Carroza o entrada especial",
    ],
  },
];

export default function PricingSection() {
  return (
    <>
      {/* Bodas Section */}
      <section id="bodas" className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
              Servicios de Bodas
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
              Paquetes de Bodas
            </h2>
            <div className="decorative-line" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
              Tu día especial merece lo mejor. Elige el paquete que mejor se adapte a tu visión.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4 max-w-5xl mx-auto items-center">
            {weddingPackages.map((pkg) => (
              <PricingCard
                key={pkg.title}
                {...pkg}
                eventType="boda"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 15 Años Section */}
      <section id="quinceaneras" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
              Celebraciones de 15 Años
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
              Paquetes de Quinceañeros
            </h2>
            <div className="decorative-line" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
              Hacemos realidad el sueño de cada quinceañera con eventos mágicos e inolvidables.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4 max-w-5xl mx-auto items-center">
            {quincePackages.map((pkg) => (
              <PricingCard
                key={pkg.title}
                {...pkg}
                eventType="quinceanero"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
