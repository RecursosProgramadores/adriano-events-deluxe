import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import wstpLogo from "@/assets/logos/wstp.svg";

const WHATSAPP_NUMBER = "51912560874";
const DEFAULT_MESSAGE = "¡Hola! Me interesa obtener información sobre sus servicios de eventos. ¿Podrían ayudarme?";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
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
      {/* Pulse ring animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />

      {/* Second pulse ring */}
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

      {/* Main button */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] group-hover:scale-110">
        <img
          src={wstpLogo}
          alt="WhatsApp"
          className="w-8 h-8 md:w-10 md:h-10 brightness-0 invert"
        />
      </div>

      {/* Tooltip - Premium Glass */}
      <motion.div
        className="absolute right-full mr-6 top-1/2 -translate-y-1/2 glass border border-[#25D366]/20 text-white text-xs font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-2xl whitespace-nowrap shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
        style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))" }}
      >
        ¿Hablamos por WhatsApp?
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-3 h-3 glass border-r border-t border-[#25D366]/20 rotate-45 bg-[#25D366]/10" />
      </motion.div>
    </motion.a>
  );
}
