
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const CategoriesSection = () => {
  return (
    <section className="py-12 px-4 bg-[#FEFAE0]">
      <div className="max-w-6xl mx-auto">
        <Separator className="mb-8 bg-[#DDA15E]" />
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xl md:text-2xl font-['Cormorant'] text-[#606C38]">
          <Link to="/design" className="hover:text-[#DDA15E] transition-colors duration-200">ДИЗАЙН</Link>
          <span className="text-[#DDA15E]">/</span>
          <Link to="/style" className="hover:text-[#DDA15E] transition-colors duration-200">СТИЛЬ</Link>
          <span className="text-[#DDA15E]">/</span>
          <Link to="/gardening" className="hover:text-[#DDA15E] transition-colors duration-200">САДОВОДСТВО</Link>
          <span className="text-[#DDA15E]">/</span>
          <Link to="/recipes" className="hover:text-[#DDA15E] transition-colors duration-200">РЕЦЕПТЫ</Link>
        </div>
        <Separator className="mt-8 bg-[#DDA15E]" />
      </div>
    </section>
  );
};

export default CategoriesSection;
