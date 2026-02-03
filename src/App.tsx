import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";
import Index from "./pages/Index";
import Boda from "./pages/services/Boda";
import Quinceaneras from "./pages/services/Quinceaneras";
import Graduaciones from "./pages/services/Graduaciones";
import Corporativos from "./pages/services/Corporativos";
import Cumple from "./pages/services/Cumple";
import Toldos from "./pages/services/Toldos";
import MobiliarioMenaje from "./pages/services/MobiliarioMenaje";
import Sociales from "./pages/services/Sociales";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios/boda" element={<Boda />} />
          <Route path="/servicios/quinceaneras" element={<Quinceaneras />} />
          <Route path="/servicios/graduaciones" element={<Graduaciones />} />
          <Route path="/servicios/corporativos" element={<Corporativos />} />
          <Route path="/servicios/cumple" element={<Cumple />} />
          <Route path="/servicios/toldos" element={<Toldos />} />
          <Route path="/servicios/sociales" element={<Sociales />} />
          <Route path="/servicios/mobiliario-y-menaje" element={<MobiliarioMenaje />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
