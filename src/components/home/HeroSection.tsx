import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 text-center"
      style={{
        backgroundImage:
          "url('https://cdn.poehali.dev/files/529e27b3-92d3-4daa-a2b4-c2bed59f587a.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-1 max-w-4xl mx-auto">
        <h2 className="font-['Cormorant'] text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-2">
          STYLE, RECIPES, & STORIES
        </h2>
        <p className="font-['Cormorant'] text-3xl md:text-4xl text-white italic mb-6 opacity-90">
          from the Farm
        </p>
        <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          A homesteading lifestyle blog sharing our life from our Oklahoma farm
        </p>
        <Button
          className="bg-[#D4A574] hover:bg-[#c19660] text-white rounded-sm px-8 py-3 text-lg font-medium tracking-wide"
          asChild
        >
          <Link to="/explore">EXPLORE</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
