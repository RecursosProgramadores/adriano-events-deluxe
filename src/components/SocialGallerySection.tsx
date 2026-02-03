import { motion } from "framer-motion";
import { Play, Instagram, Youtube } from "lucide-react";

const shorts = [
    { id: "bgYdTENZ6Go", title: "Evento Adriano 1" },
    { id: "nyhYH5BDKh8", title: "Evento Adriano 2" },
    { id: "34dQIFP0ikQ", title: "Evento Adriano 3" },
    { id: "gnJlx0s73eY", title: "Evento Adriano 4" },
];

export default function SocialGallerySection() {
    return (
        <section className="section-padding bg-charcoal relative overflow-hidden">
            {/* Decorative Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[80px] translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        className="text-primary text-xs tracking-[0.4em] uppercase font-bold inline-block mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Síguenos en las Redes
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Momentos <span className="text-gradient-gold">Adriano</span>
                    </motion.h2>
                    <div className="decorative-line h-1 mx-auto" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {shorts.map((short, index) => (
                        <motion.a
                            key={short.id}
                            href={`https://youtube.com/shorts/${short.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/10 glass-dark block"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            {/* Thumbnail with High Quality */}
                            <img
                                src={`https://img.youtube.com/vi/${short.id}/maxresdefault.jpg`}
                                alt={short.title}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${short.id}/hqdefault.jpg`;
                                }}
                            />

                            {/* Overlay Gradient - Optimized for vibrance */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <motion.div
                                    className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-2xl"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                                </motion.div>
                            </div>

                            {/* Bottom Label */}
                            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center shadow-lg">
                                        <Youtube className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">YouTube Shorts</span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
