import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const eventTypes = [
  "Boda",
  "Quinceañero (15 Años)",
  "Graduación",
  "Evento Corporativo",
  "Show Social / Cumpleaños",
  "Alquiler de Toldos",
  "Alquiler de Mobiliario",
  "Alquiler de Menaje",
  "Otro",
];

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoEvento: "",
    fecha: "",
    mensaje: "",
  });
  
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const decorY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      tipoEvento: "",
      fecha: "",
      mensaje: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section ref={sectionRef} id="contacto" className="section-padding bg-background relative overflow-hidden">
      {/* Parallax decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        style={{ y: decorY }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-primary text-sm tracking-[0.3em] uppercase font-medium inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contáctanos
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Solicita tu Cotización
          </motion.h2>
          <motion.div 
            className="decorative-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Cuéntanos sobre tu evento y te enviaremos una propuesta personalizada sin compromiso
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre completo *</label>
                  <Input
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Tu nombre"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Teléfono *</label>
                  <Input
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="+51 999 999 999"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de Evento *</label>
                  <Select 
                    value={formData.tipoEvento} 
                    onValueChange={(value) => setFormData({ ...formData, tipoEvento: value })}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecciona un tipo" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border">
                      {eventTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Fecha aproximada del evento</label>
                <Input
                  type="date"
                  value={formData.fecha}
                  onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensaje</label>
                <Textarea
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  placeholder="Cuéntanos más sobre tu evento: número de invitados, lugar, servicios que te interesan..."
                  rows={5}
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Cotización
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-4">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-accent/50 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Teléfono / WhatsApp</h4>
                  <a href="tel:+51999999999" className="text-muted-foreground hover:text-primary transition-colors">
                    +51 999 999 999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-accent/50 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:info@eventosadriano.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@eventosadriano.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-accent/50 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Ubicación</h4>
                  <p className="text-muted-foreground">Lima, Perú</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-accent/50 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Horario de Atención</h4>
                  <p className="text-muted-foreground">Lunes a Sábado: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249744.02942452613!2d-77.12729669656813!3d-12.026625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452f4a!2sLima%2C%20Peru!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Producciones Eventos Adriano"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
