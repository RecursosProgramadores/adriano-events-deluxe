import { motion } from "framer-motion";
import { Heart, Crown, PartyPopper, GraduationCap, PlayCircle, ExternalLink, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import wstpLogo from "@/assets/logos/wstp.svg";

import weddingImg from "@/assets/hero-wedding.jpg";
import quinceImg from "@/assets/15anos/quince2.jpg";
import partyImg from "@/assets/cumple/cumple.jpg";
import gradImg from "@/assets/graduation.jpg";

// Hero Carousel Images
import quince2 from "@/assets/15anos/quince2.jpg";
import quince4 from "@/assets/15anos/quince4.jpg";
import boda2 from "@/assets/bodas/boda.jpg";

// Mobile Images
import mobile1 from "@/assets/movileservicios/moviles.png";
import mobile2 from "@/assets/movileservicios/moviles1.png";
import mobile3 from "@/assets/movileservicios/moviles3.png";

const heroCarouselImages = [quince2, quince4, boda2];
const mobileHeroImages = [mobile1, mobile2, mobile3];

interface SocialService {
    title: string;
    subtitle: string;
    icon: LucideIcon;
    image: string;
    description: string;
    waMessage: string;
}

const socialServices: SocialService[] = [
    {
        title: "Bodas",
        subtitle: "de Ensueño",
        icon: Heart,
        image: weddingImg,
        description: "Planificación integral, decoración y catering para el día más importante.",
        waMessage: "¡Hola! Me gustaría solicitar información sobre sus servicios de Bodas."
    },
    {
        title: "15 Años",
        subtitle: "Mágicos",
        icon: Crown,
        image: quinceImg,
        description: "Transformamos tu visión en una realidad de cuento de hadas.",
        waMessage: "¡Hola! Me gustaría solicitar información sobre sus servicios de 15 Años."
    },
    {
        title: "Graduaciones",
        subtitle: "de Élite",
        icon: GraduationCap,
        image: gradImg,
        description: "Ceremonias y fiestas académicas con la mayor distinción.",
        waMessage: "¡Hola! Me gustaría solicitar información sobre sus servicios de Graduaciones."
    },
    {
        title: "Shows Sociales",
        subtitle: "Inolvidables",
        icon: PartyPopper,
        image: partyImg,
        description: "Cumpleaños, aniversarios y celebraciones familiares llenas de vida.",
        waMessage: "¡Hola! Me gustaría solicitar información sobre sus servicios de Shows Sociales."
    }
];

const youtubeVideos = [
    { id: "9nDLwzT4eUY", title: "Evento Social 1" },
    { id: "A7hO_XD8px0", title: "Evento Social 2" },
    { id: "1vg_h3S6RhI", title: "Evento Social 3" },
    { id: "u_xjAAIfAo0", title: "Evento Social 4" }
];

export default function Sociales() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section (Carousel) */}
            <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-charcoal">
                <div className="absolute inset-0">
                    {/* Desktop Carousel */}
                    <div className="hidden md:block w-full h-full">
                        <Carousel
                            className="w-full h-full"
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 4000,
                                }),
                            ]}
                        >
                            <CarouselContent className="h-full ml-0">
                                {heroCarouselImages.map((img, idx) => (
                                <CarouselItem key={idx} className="h-full pl-0">
                                    <div className="relative h-full w-full overflow-hidden flex items-center justify-center bg-black">
                                        <img
                                            src={img}
                                            alt={`Evento social ${idx + 1}`}
                                            className="max-w-[75%] max-h-[75%] object-contain"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    </div>

                    {/* Mobile Carousel */}
                    <div className="md:hidden w-full h-full">
                        <Carousel
                            className="w-full h-full"
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 4000,
                                }),
                            ]}
                        >
                            <CarouselContent className="h-full ml-0">
                                {mobileHeroImages.map((img, idx) => (
                                    <CarouselItem key={idx} className="h-full pl-0">
                                        <div className="relative h-full w-full overflow-hidden">
                                            <img
                                                src={img}
                                                alt={`Evento social móvil ${idx + 1}`}
                                                className="w-full h-full object-cover object-center"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-charcoal mb-4 uppercase tracking-tighter">
                            Nuestros <span className="text-gradient-gold">Servicios</span>
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {socialServices.map((service, idx) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-charcoal/5 shadow-2xl"
                            >
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                </div>

                                <div className="p-8 md:p-12">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                            <service.icon className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-heading font-bold text-charcoal">{service.title}</h3>
                                            <p className="text-primary text-xs font-bold uppercase tracking-widest">{service.subtitle}</p>
                                        </div>
                                    </div>
                                    <p className="text-charcoal/90 mb-8 text-lg font-medium leading-relaxed">
                                        {service.description}
                                    </p>
                                    <Button variant="outline" className="btn-premium px-8 py-6 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-500 w-full md:w-auto text-center justify-center border-charcoal/10" asChild>
                                        <a href={`https://wa.me/51912560874?text=${encodeURIComponent(service.waMessage)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                            Explorar Servicio
                                            <img
                                                src={wstpLogo}
                                                alt="WhatsApp"
                                                className="w-5 h-5 transition-all duration-500 group-hover:filter-none"
                                                style={{
                                                    filter: 'invert(72%) sepia(13%) saturate(1209%) hue-rotate(94deg) brightness(98%) contrast(92%)'
                                                }}
                                            />
                                        </a>
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* YouTube Gallery Section */}
            <section className="py-24 bg-charcoal relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-primary text-xs tracking-[0.4em] uppercase font-bold block mb-4">Galería de Video</span>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 uppercase tracking-tighter">
                            Nuestras <span className="text-gradient-gold">Producciones</span>
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-screen-2xl mx-auto">
                        {youtubeVideos.map((video, idx) => (
                            <motion.a
                                key={video.id}
                                href={`https://www.youtube.com/watch?v=${video.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl block bg-charcoal-light focus:outline-none focus:ring-2 focus:ring-primary/50"
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px] opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center text-center px-4">
                                    {/* Pastel Play Button */}
                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transform transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary/50 shadow-2xl">
                                        <PlayCircle className="w-8 h-8 text-white group-hover:fill-white/20 transition-all" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white/90 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Ver Producción</span>
                                    <ExternalLink className="w-4 h-4" />
                                </div>
                                {idx < 2 && (
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-[9px] font-bold uppercase tracking-widest rounded-full">
                                            Evento Social
                                        </span>
                                    </div>
                                )}
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Decorative background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
