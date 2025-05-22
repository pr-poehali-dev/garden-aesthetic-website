
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-garden-bg py-12 px-8 border-t border-garden-muted">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-x-auto">
          <div className="whitespace-nowrap flex justify-between items-center min-w-max">
            <Link to="/design" className="text-garden-green text-xl mr-6 hover:text-garden-accent transition-colors">
              ДИЗАЙН
            </Link>
            <span className="text-garden-muted mx-2">/</span>
            <Link to="/style" className="text-garden-green text-xl mx-6 hover:text-garden-accent transition-colors">
              СТИЛЬ
            </Link>
            <span className="text-garden-muted mx-2">/</span>
            <Link to="/gardening" className="text-garden-green text-xl mx-6 hover:text-garden-accent transition-colors">
              САДОВОДСТВО
            </Link>
            <span className="text-garden-muted mx-2">/</span>
            <Link to="/recipes" className="text-garden-green text-xl mx-6 hover:text-garden-accent transition-colors">
              РЕЦЕПТЫ
            </Link>
          </div>
        </div>
        
        <div className="mt-12 text-center text-sm text-garden-green/70">
          <p>&copy; {new Date().getFullYear()} Садовая Эстетика. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
