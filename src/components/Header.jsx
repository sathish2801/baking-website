import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import logo from "../assets/images/esma_logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black shadow-md border-b border-black">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo Image */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Home Bakery Logo" className="h-[90px] w-auto" />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8 text-lg font-monts">
          <Link to="/" className="text-white hover:text-yellow transition-colors duration-200">Home</Link>
          <Link to="/items" className="text-white hover:text-yellow transition-colors duration-200">Products</Link>
          <Link to="/about-us" className="text-white hover:text-yellow transition-colors duration-200">About Us</Link>
          <Link to="/contact" className="text-white hover:text-yellow transition-colors duration-200">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden focus:outline-none ${isOpen ? "text-yellow" : "text-white"}`}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden absolute top-36 left-0 w-full bg-black shadow-md border-t border-gray-200 z-10`}>
          <nav className="flex flex-col items-center py-4 space-y-4 font-body text-lg font-semibold">
            <Link to="/" className="text-white hover:text-yellow transition-colors duration-200" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/items" className="text-white hover:text-yellow transition-colors duration-200" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/about-us" className="text-white hover:text-yellow transition-colors duration-200" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/contact" className="text-white hover:text-yellow transition-colors duration-200" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
