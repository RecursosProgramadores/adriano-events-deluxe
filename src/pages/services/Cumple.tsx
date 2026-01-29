/// <reference types="vite/client" />
import { PartyPopper } from "lucide-react";
import ServiceLayout from "./ServiceLayout";
import heroImg from "@/assets/cumple/cumple.jpg";

const images = import.meta.glob("../../assets/cumple/*.{png,jpg,jpeg,PNG,JPG}", {
    eager: true,
    query: '?url',
});

const carouselImages = Object.values(images).map((mod: any) => mod.default || mod);

export default function Cumple() {
    return (
        <ServiceLayout
            title="Shows"
            subtitle="Sociales"
            icon={PartyPopper}
            heroImage={heroImg}
            description="Cualquier motivo es perfecto para celebrar. Desde cumpleaños íntimos hasta grandes celebraciones familiares y aniversarios, aportamos la chispa de creatividad y diversión necesaria para que tu evento sea inolvidable y lleno de alegría."
            features={[
                "Cumpleaños Temáticos para Adultos y Niños",
                "Aniversarios, Baby Showers y Revelación de Género",
                "Shows de Animación, DJ y Música en Vivo de calidad",
                "Decoración Temática con Estructuras y Globos Premium",
                "Estaciones de Comida Gourmet y Candy Bar Personalizados",
                "Servicio de Mozos, Barman y Atención de Primera"
            ]}
            carouselImages={carouselImages}
            whatsappMessage="¡Hola! Me gustaría cotizar un show para mi evento social."
        />
    );
}
