/// <reference types="vite/client" />
import { Building2 } from "lucide-react";
import ServiceLayout from "./ServiceLayout";
import event1 from "@/assets/Eventoscorporativos/event1.jpg";
import event4 from "@/assets/Eventoscorporativos/event4.jpg";
import event5 from "@/assets/Eventoscorporativos/event5.jpg";
import event6 from "@/assets/Eventoscorporativos/event6.jpg";

const heroCarouselImages = [event1, event4, event5, event6];

import { getCorporativosImages } from "@/assets/Eventoscorporativos/images";

const carouselImages = getCorporativosImages().map(img => img.src);

export default function Corporativos() {
    return (
        <ServiceLayout
            title="Eventos"
            subtitle="Corporativos"
            icon={Building2}
            heroImage={event1}
            heroVideoId="iLwi9D3ksaM"
            heroCarouselImages={heroCarouselImages}
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
