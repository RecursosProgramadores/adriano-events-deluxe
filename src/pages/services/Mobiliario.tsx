/// <reference types="vite/client" />
import { Armchair } from "lucide-react";
import ServiceLayout from "./ServiceLayout";
import heroImg from "@/assets/mobiliarios/mobiliario.jpg";

const images = import.meta.glob("../../assets/mobiliarios/*.{png,jpg,jpeg,PNG,JPG}", {
    eager: true,
    query: '?url',
});

const carouselImages = Object.values(images).map((mod: any) => mod.default || mod);

export default function Mobiliario() {
    return (
        <ServiceLayout
            title="Alquiler"
            subtitle="de Mobiliario"
            icon={Armchair}
            heroImage={heroImg}
            description="Contamos con una exclusiva colección de mobiliario que combina confort, elegancia y última tendencia. Desde sillas clásicas hasta mobiliario lounge moderno, tenemos la pieza perfecta para definir el estilo único de tu celebración."
            features={[
                "Sillas Tiffany, Crossback, Ghost y modelos exclusivos",
                "Mesas Redondas, Rectangulares, de Madera y Espejadas",
                "Mobiliario Lounge, Sillones Premium y Puff de diseño",
                "Barras de Bar con Iluminación LED y Estilo Industrial",
                "Estaciones de Comida y Mesas de Dulces de diversos estilos",
                "Muebles Vintage, Arquitectónicos y Piezas de Acento"
            ]}
            carouselImages={carouselImages}
            whatsappMessage="¡Hola! Quisiera el catálogo y precios de alquiler de mobiliario."
        />
    );
}
