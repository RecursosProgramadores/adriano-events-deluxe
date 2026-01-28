import { Instagram, Facebook, Youtube, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/eventosadriano", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/eventosadriano", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/@eventosadriano", label: "YouTube" },
];

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Bodas", href: "#bodas" },
  { label: "15 Años", href: "#quinceaneras" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo className="mb-6" />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Creando momentos inolvidables con profesionalismo y elegancia. 
              Tu evento perfecto comienza aquí.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {[
                "Eventos Corporativos",
                "Alquiler de Toldos",
                "Alquiler de Mobiliario",
                "Alquiler de Menaje",
                "Graduaciones",
                "Shows Sociales",
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <a
                href="tel:+51999999999"
                className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +51 999 999 999
              </a>
              <a
                href="mailto:info@eventosadriano.com"
                className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info@eventosadriano.com
              </a>
              <p className="text-white/60 text-sm">
                Lima, Perú
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Producciones Eventos Adriano. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
