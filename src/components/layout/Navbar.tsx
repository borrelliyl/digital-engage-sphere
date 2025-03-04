
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-semibold text-primary">
              DigiCatalog
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors">
              Funzionalità
            </Link>
            <Link to="/#pricing" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors">
              Prezzi
            </Link>
            <Link to="/#about" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors">
              Chi siamo
            </Link>
            <Link to="/#contact" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors">
              Contatti
            </Link>
          </nav>

          {/* Right Side - Auth & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button variant="ghost" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white">
              Accedi
            </Button>
            <Button>Inizia gratis</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-morphism animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/#features" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Funzionalità
            </Link>
            <Link 
              to="/#pricing" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Prezzi
            </Link>
            <Link 
              to="/#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Chi siamo
            </Link>
            <Link 
              to="/#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contatti
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" className="w-full justify-center">
                Accedi
              </Button>
              <Button className="w-full justify-center">
                Inizia gratis
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
