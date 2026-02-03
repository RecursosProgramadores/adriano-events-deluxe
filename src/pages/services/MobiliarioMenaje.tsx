/// <reference types="vite/client" />
import { Armchair } from "lucide-react";
import ServiceLayout from "./ServiceLayout";
import furnitureHero from "@/assets/mobiliarios/mobiliario.jpg";

// Import images from mobiliarios folder
const furnitureImages = import.meta.glob("../../assets/mobiliarios/*.{png,jpg,jpeg,PNG,JPG}", {
    eager: true,
    query: '?url',
});

const carouselImages = Object.values(furnitureImages).map((mod: any) => mod.default || mod);

export default function MobiliarioMenaje() {
    return (
        <ServiceLayout
            title="Mobiliario"
            subtitle="y Menaje"
            icon={Armchair}
            heroImage={furnitureHero}
            description="En Adriano Events Deluxe, ofrecemos una solución integral para la ambientación de tu evento. Combinamos una exclusiva colección de mobiliario de tendencia con menaje de alta gama, asegurando que cada detalle en tu mesa y espacio refleje sofisticación y elegancia absoluta."
            features={[
                "Mobiliario Premium: Sillas Tiffany, Crossback y modelos exclusivos",
                "Mesas de Diseño: Redondas, Rectangulares, de Madera y Espejadas",
                "Menaje de Lujo: Vajilla de Porcelana Fina y Cristalería de Diseño",
                "Cubertería Exclusiva: Acabados en Oro, Plata y Estilo Contemporáneo",
                "Mobiliario Lounge, Barras de Bar con LED y Piezas de Acento",
                "Mantelería Fina, Caminos de Mesa y Servilletas de Tela Premium"
            ]}
            carouselImages={carouselImages}
            whatsappMessage="¡Hola! Quisiera el catálogo y precios de alquiler de mobiliario y menaje."
        />
    );
}
