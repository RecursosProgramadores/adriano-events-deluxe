import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "51999999999";
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
      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-[#25D366]/30">
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" />
      </div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-charcoal text-white text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      >
        ¡Escríbenos por WhatsApp!
        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-charcoal rotate-45" />
      </motion.div>
    </motion.a>
  );
}
