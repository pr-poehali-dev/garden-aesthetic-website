
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center py-4 px-8 md:px-12 lg:px-16">
      <div className="flex items-center">
        <h1 className="text-lg md:text-xl font-medium text-white">Садовая Эстетика</h1>
      </div>
      <nav className="hidden md:flex gap-6">
        <Link to="/" className="text-white hover:opacity-75 transition-opacity duration-200">ГЛАВНАЯ</Link>
        <Link to="/blog" className="text-white hover:opacity-75 transition-opacity duration-200">БЛОГ</Link>
        <Link to="/contact" className="text-white hover:opacity-75 transition-opacity duration-200">КОНТАКТЫ</Link>
        <Link to="/about" className="text-white hover:opacity-75 transition-opacity duration-200">О НАС</Link>
      </nav>
    </header>
  );
};

export default Header;
