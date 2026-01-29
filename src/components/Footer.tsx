import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@/assets/logos/adrianologo.png";
import libroImg from "@/assets/logos/libroreclamaciones.jpeg";
import flyLogo from "@/assets/logos/logo.svg";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/eventosadriano", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/AdrianosEventPlanner", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/@eventosadriano", label: "YouTube" },
];

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Bodas", href: "/servicios/boda" },
  { label: "15 Años", href: "/servicios/quinceaneras" },
  { label: "Galería", href: "/#galeria" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-14 border-b border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand - Luxury Focus */}
            <div className="flex flex-col items-start">
              <Link to="/">
                <img
                  src={logoImg}
                  alt="Adriano Eventos Logo"
                  className="mb-8 h-16 w-auto object-contain scale-110 origin-left"
                />
              </Link>
              <p className="text-white/60 text-base leading-relaxed mb-10 max-w-xs">
                Donde cada detalle cuenta. Creamos experiencias extraordinarias que celebran los momentos más importantes de tu vida.
              </p>
              <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-2xl glass-dark flex items-center justify-center border border-white/10 hover:border-primary/40 hover:text-primary transition-all duration-500 glow-gold"
                        aria-label={social.label}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>

                {/* Libro de Reclamaciones */}
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd__Q-_V4guEBa652EbEDuPK2IIlc0bwBL3RLEUOQ7M8jZdag/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src={libroImg}
                    alt="Libro de Reclamaciones"
                    className="h-16 w-auto rounded-lg shadow-lg border border-white/5 group-hover:border-primary/30 transition-all duration-300"
                  />
                </motion.a>
              </div>
            </div>

            {/* Quick Links - Organized */}
            <div className="lg:pl-8">
              <h4 className="text-gradient-gold text-lg font-heading font-bold mb-8 uppercase tracking-widest">Descubre</h4>
              <ul className="grid grid-cols-1 gap-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-primary hover:pl-2 transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium Services */}
            <div>
              <h4 className="text-gradient-gold text-lg font-heading font-bold mb-8 uppercase tracking-widest">Excelencia</h4>
              <ul className="grid grid-cols-1 gap-4">
                {[
                  "Planificación de Bodas",
                  "Eventos de Gala",
                  "Producción Corporativa",
                  "Cenas Exclusivas",
                  "Mobiliario de Lujo",
                  "Diseño de Escenarios",
                ].map((service) => (
                  <li key={service} className="text-white/50 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-px bg-primary/40" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact */}
            <div>
              <h4 className="text-gradient-gold text-lg font-heading font-bold mb-8 uppercase tracking-widest">Contacto</h4>
              <div className="space-y-6">
                <a
                  href="tel:+51912560874"
                  className="group flex items-center gap-4 text-white/60 hover:text-white transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl glass-dark flex items-center justify-center border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/20">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-bold tracking-wider">+51 912 560 874</span>
                </a>
                <a
                  href="mailto:eventosadrianooficial@gmail.com"
                  className="group flex items-center gap-4 text-white/60 hover:text-white transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl glass-dark flex items-center justify-center border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/20">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-bold break-all tracking-wider">eventosadrianooficial@gmail.com</span>
                </a>
                <div className="flex items-start gap-4 text-white/60">
                  <div className="w-10 h-10 rounded-xl glass-dark flex items-center justify-center border border-white/5 flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm leading-relaxed font-medium">Lima - Perú<br />Santa Anita</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Standards */}
        <div className="py-8 border-t border-white/5 flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <p className="text-white/30 text-xs font-medium uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Producciones Eventos Adriano
            </p>
            <a href="#" className="text-white/40 hover:text-primary transition-all text-xs font-bold uppercase tracking-widest link-underline">Privacidad</a>
            <a href="#" className="text-white/40 hover:text-primary transition-all text-xs font-bold uppercase tracking-widest link-underline">Términos</a>
          </div>

          <motion.a
            href="https://fly-software.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 group opacity-40 hover:opacity-100 transition-all duration-500"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-primary transition-colors">Programado por</span>
            <img src={flyLogo} alt="Fly Software" className="h-8 w-auto grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
