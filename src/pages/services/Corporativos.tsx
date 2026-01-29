/// <reference types="vite/client" />
import { Building2 } from "lucide-react";
import ServiceLayout from "./ServiceLayout";
import heroImg from "@/assets/Eventoscorporativos/event1.jpg";

const images = import.meta.glob("../../assets/Eventoscorporativos/*.{png,jpg,jpeg,PNG,JPG}", {
    eager: true,
    query: '?url',
});

const carouselImages = Object.values(images).map((mod: any) => mod.default || mod);

export default function Corporativos() {
    return (
        <ServiceLayout
            title="Eventos"
            subtitle="Corporativos"
            icon={Building2}
            heroImage={heroImg}
            description="Elevamos la imagen de tu empresa con producciones corporativas de alto nivel. Desde conferencias ejecutivas hasta fiestas de aniversario, garantizamos una ejecución impecable que fortalece el branding de tu organización y motiva a tu equipo."
            features={[
                "Congresos, Seminarios y Convenciones de gran escala",
                "Lanzamientos de Productos y Marcas con impacto mediático",
                "Fiestas de Fin de Año y Aniversarios Institucionales",
                "Team Building e Integraciones Empresariales creativas",
                "Mobiliario de Oficina y Mobiliario Lounge para Eventos",
                "Sistemas de Sonido y Pantallas LED de última generación"
            ]}
            carouselImages={carouselImages}
            whatsappMessage="¡Hola! Deseo solicitar una propuesta para un evento corporativo de mi empresa."
        />
    );
}
