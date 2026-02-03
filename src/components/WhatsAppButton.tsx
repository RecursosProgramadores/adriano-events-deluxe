import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";
import wstpLogo from "@/assets/logos/wstp.svg";

const CONTACTS = [
  {
    number: "51962369503",
    label: "Atención Inmediata",
    description: "Contacta con nuestro equipo principal",
    isPrincipal: true
  },
  {
    number: "51912560874",
    label: "Información General",
    description: "Consultas sobre servicios y presupuestos",
    isPrincipal: false
  }
];

const DEFAULT_MESSAGE = "¡Hola! Me interesa obtener información sobre sus servicios de eventos. ¿Podrían ayudarme?";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const getWhatsappUrl = (number: string) =>
    `https://wa.me/${number}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Selection Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="mb-6 w-[280px] md:w-[320px] overflow-hidden"
          >
            <div className="bg-charcoal border border-white/10 rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              {/* Subtle decorative background glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#25D366]/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                  <h3 className="text-white font-heading font-bold text-lg uppercase tracking-wider">
                    Contáctanos
                  </h3>
                  <button
                    onClick={handleToggle}
                    className="p-2 rounded-full hover:bg-white/5 transition-colors text-white/40 hover:text-white"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="space-y-3">
                  {CONTACTS.map((contact) => (
                    <motion.a
                      key={contact.number}
                      href={getWhatsappUrl(contact.number)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block p-4 rounded-2xl transition-all duration-300 group/item border ${contact.isPrincipal
                          ? "bg-[#25D366]/10 border-[#25D366]/30 hover:bg-[#25D366]/20"
                          : "bg-white/5 border-white/5 hover:bg-white/10"
                        }`}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-xl ${contact.isPrincipal ? "bg-[#25D366]" : "bg-white/5"}`}>
                            <Phone size={16} className="text-white" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-bold">{contact.label}</p>
                            <p className="text-white/40 text-[10px] leading-tight mt-0.5">{contact.description}</p>
                          </div>
                        </div>
                        <ArrowRight size={14} className="text-white/20 group-hover/item:text-white transition-colors" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        onClick={handleToggle}
        className="relative group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse ring animation - only shown when closed */}
        {!isOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
            <motion.span
              className="absolute inset-0 rounded-full bg-[#25D366]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}

        {/* Main button overlay */}
        <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${isOpen ? "bg-white text-[#25D366] rotate-90" : "bg-[#25D366] text-white"
          }`}>
          {isOpen ? (
            <X size={32} />
          ) : (
            <img
              src={wstpLogo}
              alt="WhatsApp"
              className="w-8 h-8 md:w-10 md:h-10 brightness-0 invert"
            />
          )}
        </div>

        {/* Tooltip */}
        {!isOpen && (
          <motion.div
            className="absolute right-full mr-6 top-1/2 -translate-y-1/2 glass border border-[#25D366]/20 text-white text-xs font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-2xl whitespace-nowrap shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
          >
            ¿Hablamos?
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-3 h-3 glass border-r border-t border-[#25D366]/20 rotate-45 bg-[#25D366]/10" />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}
