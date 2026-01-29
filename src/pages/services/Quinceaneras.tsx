/// <reference types="vite/client" />
import { Crown } from "lucide-react";
import ServiceLayout from "./ServiceLayout";
import heroImg from "@/assets/15anos/quince.jpeg";

const images = import.meta.glob("../../assets/15anos/*.{png,jpg,jpeg,PNG,JPG}", {
    eager: true,
    query: '?url',
});

const carouselImages = Object.values(images).map((mod: any) => mod.default || mod);

export default function Quinceaneras() {
    return (
        <ServiceLayout
            title="15"
            subtitle="Años Mágicos"
            icon={Crown}
            heroImage={heroImg}
            description="Celebra tus 15 años como una verdadera princesa. Transformamos tu visión en una realidad mágica, creando una atmósfera de cuento de hadas donde tú eres la protagonista absoluta. Nos encargamos de que cada instante brille con luz propia."
            features={[
                "Temáticas Personalizadas adaptadas a tus gustos y estilo",
                "Shows Especiales y Coreografías con bailarines profesionales",
                "Entradas Triunfales con efectos visuales y pirotecnia fría",
                "Buffet Temático y Barra de Bebidas Especiales (Mocktails)",
                "Decoración Floral Exclusiva y Ambientación de Cristalería",
                "Toldos Arquitectónicos con Iluminación LED Programable"
            ]}
            carouselImages={carouselImages}
            whatsappMessage="¡Hola! Me gustaría información para celebrar una fiesta de 15 años."
        />
    );
}
