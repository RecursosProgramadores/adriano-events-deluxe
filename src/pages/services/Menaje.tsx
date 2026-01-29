import { UtensilsCrossed } from "lucide-react";
import ServiceLayout from "./ServiceLayout";
import heroImg from "@/assets/tableware.jpg";

export default function Menaje() {
    return (
        <ServiceLayout
            title="Alquiler"
            subtitle="de Menaje"
            icon={UtensilsCrossed}
            heroImage={heroImg}
            description="Los detalles en la mesa definen la sofisticación y el nivel de tu evento. Ofrecemos menaje de lujo, desde vajilla de porcelana fina hasta cristalería de diseño y cubertería de oro, para que tu banquete sea visualmente impresionante y de primer nivel."
            features={[
                "Vajilla de Porcelana Fina con diseños exclusivos",
                "Cubertería Plateada, Dorada y de Estilo Contemporáneo",
                "Copas de Cristal Tallado para diferentes tipos de bebidas",
                "Platos Base Decorativos y de Vidrio Traslúcido",
                "Mantelería de Lujo, Caminos de Mesa y Servilletas de Tela",
                "Bases para Flores, Candelabros y Centros de Mesa"
            ]}
            carouselImages={[heroImg]}
            whatsappMessage="¡Hola! Quisiera información y precios sobre el alquiler de menaje."
        />
    );
}
