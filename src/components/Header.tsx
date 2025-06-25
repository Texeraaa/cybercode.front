import { Link } from 'react-router-dom';
import { Code } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
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

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-[#DC143C] transition-colors duration-300 relative group"
            >
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DC143C] transition-all duration-300 group-hover:w-full" />
            </Link>
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
            <Link
              to="#"
              className="text-gray-300 hover:text-[#DC143C] transition-colors duration-300 relative group"
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DC143C] transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* CTA Button */}
          <Link to="/curso">
            <Button className="bg-[#DC143C] hover:bg-[#B91C3C] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,20,60,0.6)] hover:scale-105">
              Entrar
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
