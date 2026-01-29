import { GraduationCap } from "lucide-react";
import ServiceLayout from "./ServiceLayout";
import heroImg from "@/assets/graduation.jpg";

export default function Graduaciones() {
    return (
        <ServiceLayout
            title="Graduaciones"
            subtitle="de Élite"
            icon={GraduationCap}
            heroImage={heroImg}
            description="El éxito académico merece ser celebrado con la mayor distinción y orgullo. Producimos ceremonias y fiestas de graduación que marcan el fin de una etapa con elegancia, profesionalismo y una logística impecable para alumnos y familiares."
            features={[
                "Organización de Protocolo Académico y Ceremonias",
                "Fiestas de Gala con Entradas de Alfombra Roja",
                "Escenarios, Podios y Pantallas LED Gigantes",
                "Servicio de Fotografía y Video Profesional (Aftermovie)",
                "Toldos Estructurados de Gran Capacidad y Climatizados",
                "Cenas Servidas de Tres Tiempos y Brindis de Honor"
            ]}
            carouselImages={[heroImg]}
            whatsappMessage="¡Hola! Necesitamos organizar una fiesta de graduación. ¿Podrían brindarnos información?"
        />
    );
}
