import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María García",
    event: "Boda 2025",
    quote: "Adriano superó todas nuestras expectativas. Nuestra boda fue simplemente mágica, cada detalle estuvo perfecto. ¡Los recomendamos al 100%!",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    event: "Evento Corporativo",
    quote: "Profesionalismo de primera. Organizaron nuestro evento de fin de año para 300 personas y todo salió impecable. Excelente servicio.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 3,
    name: "Lucía Fernández",
    event: "Quinceañero",
    quote: "El quinceañero de mi hija fue un sueño hecho realidad. La decoración, los toldos, todo fue espectacular. Gracias por hacer de ese día algo inolvidable.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 4,
    name: "Roberto Sánchez",
    event: "Graduación Universitaria",
    quote: "Contratamos a Adriano para la graduación de nuestra promoción y el resultado fue increíble. Montaje profesional y atención personalizada.",
    videoId: "dQw4w9WgXcQ",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
            Testimonios
          </h2>
          <div className="decorative-line" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-2xl shadow-elegant overflow-hidden"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-muted group cursor-pointer">
                <img
                  src={`https://img.youtube.com/vi/${testimonial.videoId}/maxresdefault.jpg`}
                  alt={`Testimonio de ${testimonial.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium">{testimonial.event}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent-foreground">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.event}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
