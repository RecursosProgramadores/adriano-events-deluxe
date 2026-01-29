/// <reference types="vite/client" />
import { Heart } from "lucide-react";
import ServiceLayout from "./ServiceLayout";
import heroImg from "@/assets/bodas/imagen1.jpg";

// Use Vite's magic to import all images in the folder
const images = import.meta.glob("../../assets/bodas/*.{png,jpg,jpeg,PNG,JPG}", {
    eager: true,
    query: '?url',
});

// Extract the URLs from the imported modules
const carouselImages = Object.values(images).map((mod: any) => mod.default || mod);

export default function Boda() {
    return (
        <ServiceLayout
            title="Bodas"
            subtitle="de Ensueño"
            icon={Heart}
            heroImage={heroImg}
            description="En Adriano Events Deluxe, entendemos que tu boda es uno de los momentos más significativos de tu vida. Nos especializamos en crear bodas exclusivas que reflejan la personalidad y los deseos de cada pareja, cuidando cada detalle con elegancia y profesionalismo."
            features={[
                "Planificación Integral (Wedding Planning) con seguimiento personalizado",
                "Diseño y Decoración de Interiores con conceptos innovadores",
                "Iluminación Arquitectónica y Efectos Especiales para cada momento",
                "Catering de Alta Gama con menús nacionales e internacionales",
                "Coordinación del Protocolo y Logística minuto a minuto",
                "Alquiler de Menaje y Mobiliario Premium de última tendencia"
            ]}
            carouselImages={carouselImages}
            whatsappMessage="¡Hola! Me gustaría solicitar una cotización para mi boda. ¿Podrían asesorarme?"
        />
    );
}
