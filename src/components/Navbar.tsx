import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logos/adrianologo.png";
import logoColor from "@/assets/logos/adrianoblank.png";

const navItems = [
  { label: "Inicio", href: "/" },
  {
    label: "Servicios",
    href: "/#servicios",
    children: [
      { label: "Bodas", href: "/servicios/boda" },
      { label: "15 Años", href: "/servicios/quinceaneras" },
      { label: "Graduaciones", href: "/servicios/graduaciones" },
      { label: "Eventos Corporativos", href: "/servicios/corporativos" },
      { label: "Shows Sociales", href: "/servicios/cumple" },
      { label: "Alquiler de Toldos", href: "/servicios/toldos" },
      { label: "Alquiler de Mobiliario", href: "/servicios/mobiliario" },
      { label: "Alquiler de Menaje", href: "/servicios/menaje" },
    ],
  },
  { label: "Galería", href: "/#galeria" },
  { label: "Testimonios", href: "/#testimonios" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label) ? prev.filter(i => i !== label) : [...prev, label]
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled
        ? "py-3 bg-white border-b border-charcoal/5 shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
        : "py-6 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo with state-aware styling */}
          <Link to="/" className="flex items-center group">
            <img
              src={isScrolled ? logoColor : logoWhite}
              alt="Adriano Eventos Logo"
              className="h-14 md:h-16 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation - Luxury Presentation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                    }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                  )}
                </Link>

                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 mt-6 w-[550px] bg-white border border-charcoal/10 rounded-[2rem] p-7 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] overflow-hidden z-50"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {item.children.map((child, index) => (
                          <motion.div
                            key={child.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 + 0.1 }}
                          >
                            <Link
                              to={child.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group/item flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 hover:bg-charcoal/5 border border-transparent hover:border-charcoal/5"
                            >
                              <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_#d4af37] transition-all duration-300 group-hover/item:scale-125 group-hover/item:shadow-[0_0_15px_#d4af37]" />

                              <div className="flex flex-col gap-0.5">
                                <span className="text-charcoal text-[0.95rem] font-bold tracking-tight transition-colors duration-300 group-hover/item:text-primary">
                                  {child.label}
                                </span>
                                <div className="h-[1.5px] w-0 bg-primary/60 group-hover/item:w-full transition-all duration-500" />
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      {/* Decorative Gradient Accent */}
                      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Button
              variant={isScrolled ? "hero" : "heroOutline"}
              size="lg"
              asChild
              className={`btn-premium ${isScrolled ? "glow-gold px-8" : "glass border-white/30 text-white px-8"}`}
            >
              <Link to="/#contacto">Solicitar Cotización</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Minimalist */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-500 ${isScrolled ? "bg-primary/10 text-primary" : "bg-white/10 text-white"
              }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Overlay Luxury */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 left-0 h-full w-[85%] max-w-[400px] z-50 lg:hidden bg-white shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col h-full pt-10 px-8">
                {/* Mobile Logo */}
                <div className="mb-14 flex justify-between items-center">
                  <img src={logoColor} alt="Adriano Logo" className="h-16 w-auto object-contain" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center text-charcoal hover:bg-charcoal/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  {navItems.map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      {!item.children ? (
                        <Link
                          to={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-3xl font-heading font-bold text-charcoal hover:text-primary transition-colors flex items-center justify-between py-3 border-b border-charcoal/5"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <div className="border-b border-charcoal/5">
                          <button
                            onClick={() => toggleExpanded(item.label)}
                            className="w-full text-3xl font-heading font-bold text-charcoal hover:text-primary transition-colors flex items-center justify-between py-3"
                          >
                            {item.label}
                            <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expandedItems.includes(item.label) ? "rotate-180" : ""}`} />
                          </button>

                          <AnimatePresence>
                            {expandedItems.includes(item.label) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "circOut" }}
                                className="overflow-hidden"
                              >
                                <div className="grid grid-cols-1 gap-4 py-4 pl-4 mb-2">
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.label}
                                      to={child.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="text-xl font-heading font-medium text-charcoal/80 hover:text-primary transition-colors flex items-center gap-3"
                                    >
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto mb-10 pt-10">
                  <Button size="xl" className="w-full btn-premium glow-gold py-7 text-lg shadow-xl" asChild>
                    <Link to="/#contacto">Cotizar Ahora</Link>
                  </Button>
                  <div className="mt-8 flex flex-col items-center gap-2">
                    <span className="text-charcoal text-[11px] font-bold uppercase tracking-[0.4em]">Adriano Eventos Deluxe</span>
                    <span className="text-charcoal/60 text-[10px] font-bold uppercase tracking-[0.2em]">Excelencia en cada detalle</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
