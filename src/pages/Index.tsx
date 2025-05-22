
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import QuoteSection from "@/components/home/QuoteSection";
import NatureImageSection from "@/components/home/NatureImageSection";
import BeginnerTipsSection from "@/components/home/BeginnerTipsSection";
import CategoriesSection from "@/components/home/CategoriesSection";

const Index = () => {
  useEffect(() => {
    // Устанавливаем заголовок страницы
    document.title = "Садовая Эстетика | Стиль, Рецепты и Истории из Сада";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FEFAE0] text-[#333333]">
      <Header />
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <NatureImageSection />
      <BeginnerTipsSection />
      <CategoriesSection />
      <Footer />
    </div>
  );
};

export default Index;
