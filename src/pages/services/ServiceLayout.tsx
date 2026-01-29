import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
import {
    CheckCircle2, ArrowLeft, LucideIcon, Play
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

interface ServiceLayoutProps {
    title: string;
    subtitle?: string;
    icon: LucideIcon;
    heroImage: string;
    description: string;
    features: string[];
    carouselImages: string[];
    ctaText?: string;
    whatsappMessage?: string;
}

export default function ServiceLayout({
    title,
    subtitle,
    icon: Icon,
    heroImage,
    description,
    features,
    carouselImages,
    ctaText = "Solicitar Presupuesto",
    whatsappMessage = "¡Hola! Me gustaría solicitar información sobre sus servicios."
}: ServiceLayoutProps) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const whatsappUrl = `https://wa.me/51912560874?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* 1. Minimalist Hero Section (Matching Main Page) */}
            <section className="relative h-screen min-h-[100svh] flex items-center justify-center overflow-hidden bg-charcoal">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <img
                        src={heroImage}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/40 to-transparent z-10" />
                </motion.div>

                {/* Refined Small Centered Scroll Button */}
                <div className="absolute bottom-12 md:bottom-16 left-0 right-0 z-50 flex justify-center px-4">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Button
                            onClick={() => {
                                const nextSection = document.getElementById('detalles-servicio');
                                if (nextSection) {
                                    nextSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            variant="outline"
                            className="group relative px-6 md:px-8 py-3 md:py-4 bg-black/30 backdrop-blur-lg border-white/20 text-white rounded-full hover:bg-white hover:text-charcoal transition-all duration-500 border shadow-lg active:scale-90"
                        >
                            <span className="text-[10px] md:text-xs font-heading font-medium uppercase tracking-[0.3em] md:tracking-[0.5em] mr-[-0.3em] md:mr-[-0.5em]">
                                Descubre más
                            </span>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* 2. Large Title Section */}
            <section id="detalles-servicio" className="py-12 md:py-20 bg-background border-b border-charcoal/5">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/#servicios"
                            className="inline-flex items-center gap-2 text-primary hover:text-charcoal transition-all mb-8 md:mb-12 group bg-charcoal/5 px-5 py-2 rounded-full border border-charcoal/5"
                        >
                            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Volver a Servicios</span>
                        </Link>

                        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-charcoal mb-4 tracking-tighter uppercase leading-[0.9]">
                            {title}
                        </h1>
                        {subtitle && (
                            <div className="text-lg sm:text-2xl md:text-3xl font-light text-primary tracking-[0.2em] md:tracking-[0.5em] uppercase mb-8 md:mb-12">
                                {subtitle}
                            </div>
                        )}
                        <div className="w-24 md:w-40 h-1 bg-primary mx-auto rounded-full glow-gold" />
                    </motion.div>
                </div>
            </section>

            {/* 3. Image Collage Carousel (Auto-playing every 2s) */}
            <section className="py-16 md:py-24 bg-charcoal relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12 md:mb-16">
                            <span className="text-primary text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold block mb-4">Galería de Imágenes</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase">Nuestro <span className="text-gradient-gold">Collage</span></h2>
                        </div>

                        <div className="bg-white/5 p-3 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-3xl overflow-hidden">
                            <Carousel
                                className="w-full"
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                plugins={[
                                    Autoplay({
                                        delay: 2000,
                                    }),
                                ]}
                            >
                                <CarouselContent className="-ml-2 md:-ml-4">
                                    {carouselImages.map((img, idx) => (
                                        <CarouselItem key={idx} className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                                            <motion.div
                                                className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden aspect-[4/5] group"
                                                whileHover={{ scale: 0.98 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`${title} collage ${idx + 1}`}
                                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            </motion.div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Video Carousel Placeholder */}
            <section className="py-16 md:py-24 bg-background relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12 md:mb-16">
                            <span className="text-primary text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold block mb-4">Experiencias en Video</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal uppercase">Producciones <span className="text-gradient-gold">Audiovisuales</span></h2>
                        </div>

                        <div className="flex justify-center items-center min-h-[300px] md:min-h-[400px] border-2 border-dashed border-charcoal/10 rounded-[2.5rem] md:rounded-[4rem] bg-charcoal/5 relative group cursor-pointer overflow-hidden">
                            <div className="relative z-10 text-center px-6">
                                <motion.div
                                    className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white shadow-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Play className="w-7 h-7 md:w-10 md:h-10 text-primary fill-current" />
                                </motion.div>
                                <p className="text-charcoal/40 font-bold uppercase tracking-widest text-[10px] md:text-sm">Próximamente sección de videos</p>
                            </div>

                            {/* Animated Background Placeholder Elements */}
                            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                                <div className="absolute top-10 left-10 w-24 md:w-32 h-24 md:h-32 bg-primary rounded-full blur-3xl animate-pulse" />
                                <div className="absolute bottom-10 right-10 w-24 md:w-32 h-24 md:h-32 bg-primary rounded-full blur-3xl animate-pulse delay-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Detailed Service Information */}
            <section className="py-16 md:py-24 bg-charcoal text-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center lg:text-left"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold mb-6 md:mb-8 uppercase leading-tight tracking-tight">
                                Excelencia <br className="hidden md:block" /><span className="text-gradient-gold">Sin Límites</span>
                            </h2>
                            <p className="text-white/60 text-base md:text-xl font-light leading-relaxed mb-10 md:mb-12 max-w-2xl mx-auto lg:mx-0">
                                {description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-10 md:mb-12">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 text-left">
                                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                                        <span className="text-[11px] md:text-sm font-bold uppercase tracking-wide">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button size="xl" className="w-full sm:w-auto btn-premium glow-gold-strong px-10 md:px-12 py-7 md:py-8 text-base md:text-lg" asChild>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                    {ctaText}
                                </a>
                            </Button>
                        </motion.div>

                        <div className="relative mt-8 lg:mt-0">
                            <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] -z-10" />
                            <img
                                src={heroImage}
                                alt="Detalle producción"
                                className="w-full h-auto rounded-[2rem] md:rounded-[3rem] shadow-3xl border border-white/10 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
