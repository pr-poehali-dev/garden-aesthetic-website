
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-6 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl md:text-2xl font-serif tracking-wide">
          Садовая Эстетика .
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-garden-accent transition-colors">
            ГЛАВНАЯ
          </Link>
          <Link to="/blog" className="text-white hover:text-garden-accent transition-colors">
            БЛОГ
          </Link>
          <Link to="/contact" className="text-white hover:text-garden-accent transition-colors">
            КОНТАКТЫ
          </Link>
          <Link to="/shop" className="text-white hover:text-garden-accent transition-colors">
            МАГАЗИН
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
