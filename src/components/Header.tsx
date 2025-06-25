import { Link } from 'react-router-dom';
import { Code, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50 border-b border-crimson-500/20 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Code className="h-8 w-8 text-[#DC143C]" />
              <div className="absolute inset-0 h-8 w-8 text-[#DC143C] animate-pulse opacity-50" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#DC143C] to-[#FF1744] bg-clip-text text-transparent">
              CyberCode
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/curso"
              className="text-gray-300 hover:text-[#DC143C] transition-colors duration-300 relative group"
            >
              Cursos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DC143C] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              to="/sobre"
              className="text-gray-300 hover:text-[#DC143C] transition-colors duration-300 relative group"
            >
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DC143C] transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link to="/curso">
              <Button className="bg-[#DC143C] hover:bg-[#B91C3C] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,20,60,0.6)] hover:scale-105">
                Entrar
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-300 hover:text-[#DC143C] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-[#DC143C]/20">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              <Link
                to="/curso"
                className="block text-gray-300 hover:text-[#DC143C] transition-colors duration-300 py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Cursos
              </Link>
              <Link
                to="/sobre"
                className="block text-gray-300 hover:text-[#DC143C] transition-colors duration-300 py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <div className="pt-4">
                <Link to="/curso" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-[#DC143C] hover:bg-[#B91C3C] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,20,60,0.6)] hover:scale-105">
                    Entrar
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
