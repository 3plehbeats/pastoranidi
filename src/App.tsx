import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Pastors from "./pages/Pastors";
import Bookstore from "./pages/Bookstore";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import WhatWeBelieve from "./pages/WhatWeBelieve";
import HistoricEvents from "./pages/HistoricEvents";
import WordsOfWisdom from "./pages/WordsOfWisdom";
import LivingCare from "./pages/LivingCare";
import Partner from "./pages/Partner";
import Ministries from "./pages/Ministries";
import BibleSchool from "./pages/BibleSchool";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pastors" element={<Pastors />} />
          <Route path="/bookstore" element={<Bookstore />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/what-we-believe" element={<WhatWeBelieve />} />
          <Route path="/history" element={<HistoricEvents />} />
          <Route path="/wisdom" element={<WordsOfWisdom />} />
          <Route path="/living-care" element={<LivingCare />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/bible-school" element={<BibleSchool />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
