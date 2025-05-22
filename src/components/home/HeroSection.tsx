
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 text-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-1 max-w-4xl mx-auto">
        <h2 className="font-['Cormorant'] text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-4">
          СТИЛЬ, РЕЦЕПТЫ И ИСТОРИИ
        </h2>
        <p className="font-['Cormorant'] text-2xl md:text-3xl text-white italic mb-8">
          из нашего сада
        </p>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Блог о садоводстве и жизни в гармонии с природой, где мы делимся нашим опытом создания уютного пространства в собственном саду
        </p>
        <Button 
          className="bg-[#606C38] hover:bg-[#4c5a26] text-white rounded-sm px-8 py-2"
          asChild
        >
          <Link to="/explore">ИЗУЧИТЬ</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
