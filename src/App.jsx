import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import TextGeneratorPage from "./pages/TextGeneratorPage";
import ImageGeneratorPage from "./pages/ImageGeneratorPage";
import VideoGeneratorPage from "./pages/VideoGeneratorPage";
import SummarizerPage from "./pages/SummarizerPage";
import ScriptGeneratorPage from "./pages/ScriptGeneratorPage";
import HistoryPage from "./pages/HistoryPage";
import NotFound from "./pages/NotFound";
import { ChatBot } from "./components/ChatBot";

const queryClient = new QueryClient();

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><LandingPage /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><LoginPage /></PageWrapper>} />
        <Route path="/signup" element={<PageWrapper><SignupPage /></PageWrapper>} />
        <Route path="/dashboard" element={<PageWrapper><DashboardLayout /></PageWrapper>}>
          <Route index element={<DashboardHome />} />
          <Route path="text" element={<TextGeneratorPage />} />
          <Route path="image" element={<ImageGeneratorPage />} />
          <Route path="video" element={<VideoGeneratorPage />} />
          <Route path="summarizer" element={<SummarizerPage />} />
          <Route path="script" element={<ScriptGeneratorPage />} />
          <Route path="history" element={<HistoryPage />} />
        </Route>
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ChatBot />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
