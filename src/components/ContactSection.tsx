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

  const decorY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

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
      {/* Background Orbs */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
        style={{ y: decorY }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]) }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            className="text-primary text-xs tracking-[0.4em] uppercase font-bold inline-block mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Iniciemos la Magia
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Solicita tu <span className="text-gradient-gold">Cotización</span>
          </motion.h2>
          <motion.div
            className="decorative-line h-1.5"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto mt-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Cuéntanos tus sueños y nosotros los convertiremos en una celebración inolvidable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-start">
          {/* Contact Form - Glass Style */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] border border-primary/20 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Nombre completo *</label>
                  <Input
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Tu nombre"
                    className="h-14 glass-dark border-primary/10 transition-all focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="h-14 glass-dark border-primary/10 transition-all focus:border-primary/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Teléfono *</label>
                  <Input
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="+51 999 999 999"
                    className="h-14 glass-dark border-primary/10 transition-all focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Tipo de Evento *</label>
                  <Select
                    value={formData.tipoEvento}
                    onValueChange={(value) => setFormData({ ...formData, tipoEvento: value })}
                  >
                    <SelectTrigger className="h-14 glass-dark border-primary/10 transition-all focus:border-primary/50">
                      <SelectValue placeholder="Selecciona un tipo" />
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      sideOffset={4}
                      className="bg-black border-primary/20 text-white min-w-[var(--radix-select-trigger-width)]"
                    >
                      {eventTypes.map((type) => (
                        <SelectItem
                          key={type}
                          value={type}
                          className="hover:bg-[#fdf2d1] hover:text-black focus:bg-[#fdf2d1] focus:text-black cursor-pointer transition-colors"
                        >
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Fecha aproximada</label>
                <Input
                  type="date"
                  value={formData.fecha}
                  onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                  className="h-14 glass-dark border-primary/10 transition-all focus:border-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Tu Visión</label>
                <Textarea
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  placeholder="Compártenos detalles sobre tu evento: invitados, temática, servicios..."
                  rows={4}
                  className="glass-dark border-primary/10 transition-all focus:border-primary/50 min-h-[140px] py-4"
                />
              </div>

              <Button
                type="submit"
                size="xl"
                className="w-full btn-premium glow-gold-strong py-8 text-lg font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando consulta..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-3" />
                    Enviar mi Solicitud
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-6"
            >
              {/* Contact Card 1 */}
              <div className="flex items-center gap-6 p-8 rounded-3xl glass border border-primary/10 hover:border-primary/30 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl glass-dark flex items-center justify-center flex-shrink-0 glow-gold transition-transform duration-500 group-hover:scale-110">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Llamadas / WhatsApp</h4>
                  <a href="tel:+51912560874" className="text-xl md:text-2xl font-bold hover:text-primary transition-colors">
                    +51 912 560 874
                  </a>
                </div>
              </div>

              {/* Contact Card 2 */}
              <div className="flex items-center gap-6 p-8 rounded-3xl glass border border-primary/10 hover:border-primary/30 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl glass-dark flex items-center justify-center flex-shrink-0 glow-gold transition-transform duration-500 group-hover:scale-110">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Email Oficial</h4>
                  <a href="mailto:eventosadrianooficial@gmail.com" className="text-lg md:text-xl font-bold hover:text-primary transition-colors break-all">
                    eventosadrianooficial@gmail.com
                  </a>
                </div>
              </div>

              {/* Contact Card 3 */}
              <div className="flex items-center gap-6 p-8 rounded-3xl glass border border-primary/10 hover:border-primary/30 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl glass-dark flex items-center justify-center flex-shrink-0 glow-gold transition-transform duration-500 group-hover:scale-110">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Oficina Principal</h4>
                  <p className="font-bold">Santa Anita, Lima - Perú</p>
                  <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">CAL.2 MZA. C LOTE. 9 ASC. LOS PINOS</p>
                </div>
              </div>
            </motion.div>

            {/* Map - Premium Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] overflow-hidden border-4 border-primary/10 shadow-2xl h-80 relative group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15606.885652676839!2d-76.9669!3d-12.0433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c68f9a2e617d%3A0xc3f8e58f0bc2d60d!2sSanta%20Anita%2C%20Lima!5e0!3m2!1sen!2spe!4v1700000000000!5m2!1sen!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
