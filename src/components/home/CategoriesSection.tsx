
import { Link } from "react-router-dom";

const CategoriesSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#FAEDCD]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="h-[1px] w-16 bg-[#606C38]"></div>
          <span className="mx-4 text-sm text-[#606C38] uppercase tracking-widest">Исследуйте</span>
          <div className="h-[1px] w-16 bg-[#606C38]"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl text-[#606C38] mb-8 text-center font-['Cormorant']">
          КАТЕГОРИИ
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/design" className="group relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1558618047-f4b511aae74d?q=80&w=2036" 
              alt="Дизайн сада" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-2xl font-['Cormorant']">ДИЗАЙН</h3>
            </div>
          </Link>
          
          <Link to="/style" className="group relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1632729306621-41db4f88a6b9?q=80&w=2070" 
              alt="Садовый стиль" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-2xl font-['Cormorant']">СТИЛЬ</h3>
            </div>
          </Link>
          
          <Link to="/gardening" className="group relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1599686255407-90a86f716c6d?q=80&w=1974" 
              alt="Садоводство" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-2xl font-['Cormorant']">САДОВОДСТВО</h3>
            </div>
          </Link>
          
          <Link to="/recipes" className="group relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1627314935367-abe306ccce4f?q=80&w=2070" 
              alt="Рецепты" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-2xl font-['Cormorant']">РЕЦЕПТЫ</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
