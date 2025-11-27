import React, { useState, useEffect } from 'react';
import { Page } from '../../types';
import Button from '../ui/Button';
import { IconMenu, IconX } from '../Icons';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Pro\'s Toolbox', page: 'toolkit' },
    { label: 'MiniTax 소개', page: 'features' },
    { label: '개발자 이야기', page: 'about' },
    { label: '문의하기', page: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="cursor-pointer font-bold text-2xl text-primary tracking-tighter flex items-center gap-2"
          onClick={() => onNavigate('home')}
        >
          <span className="text-3xl">&lt;/&gt;</span>
          <span>MiniTax</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-sm font-medium transition-colors ${
                currentPage === item.page ? 'text-primary font-bold' : 'text-subtext hover:text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
          <Button size="sm" variant="secondary" onClick={() => onNavigate('features')}>
            무료 시작하기
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <IconX className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t md:hidden animate-fade-in shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-4 rounded-lg ${
                  currentPage === item.page ? 'bg-primary/5 text-primary font-bold' : 'text-text'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button className="w-full" onClick={() => {
              onNavigate('features');
              setIsMobileMenuOpen(false);
            }}>
              무료 시작하기
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
