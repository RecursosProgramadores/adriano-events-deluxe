/// <reference types="vite/client" />
import { Tent } from "lucide-react";
import ServiceLayout from "./ServiceLayout";
import heroImg from "@/assets/toldo/toldo.jpg";

const images = import.meta.glob("../../assets/toldo/*.{png,jpg,jpeg,PNG,JPG}", {
    eager: true,
    query: '?url',
});

const carouselImages = Object.values(images).map((mod: any) => mod.default || mod);

export default function Toldos() {
    return (
        <ServiceLayout
            title="Alquiler"
            subtitle="de Toldos"
            icon={Tent}
            heroImage={heroImg}
            description="Nuestras estructuras combinan seguridad, resistencia y estética superior. Ofrecemos una amplia gama de toldos diseñados para transformar cualquier espacio exterior en un salón elegante, confortable y totalmente protegido de los elementos."
            features={[
                "Toldos Arquitectónicos de Gran Altura y Diseño Moderno",
                "Toldos Básicos y Estructurados para todo tipo de terreno",
                "Uso de Telas Premium, Estructuras de Madera y Metal",
                "Iluminación Decorativa Integrada (Vintage, LED, Cristalería)",
                "Paredes Transparentes, Pisos de Madera y Alfombrado",
                "Instalación por Personal Certificado y Altas Medidas de Seguridad"
            ]}
            carouselImages={carouselImages}
            whatsappMessage="¡Hola! Necesito informes sobre el alquiler de toldos para un evento."
        />
    );
}
