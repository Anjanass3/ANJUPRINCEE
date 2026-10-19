import { useState, useEffect } from 'react';
import { Menu, X, Globe, Mail } from 'lucide-react';
import { weddingConfig } from '../weddingConfig';

interface NavbarProps {
  currentLang: 'en' | 'ml';
  onToggleLang: () => void;
  onReopenEnvelope: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onToggleLang, onReopenEnvelope }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: currentLang === 'en' ? 'Invitation' : 'ക്ഷണക്കത്ത്', href: '#invitation' },
    { label: currentLang === 'en' ? 'Ceremony & Reception' : 'വിവാഹ ചടങ്ങുകൾ', href: '#events' },
    { label: currentLang === 'en' ? 'Countdown' : 'കൗണ്ട്ഡൗൺ', href: '#countdown' },
    { label: currentLang === 'en' ? 'Venue & Map' : 'സ്ഥലം & വഴി', href: '#venues', highlight: true },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FAF8F2]/95 backdrop-blur-md shadow-md border-b border-[#C5A059]/20 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Monogram / Brand */}
        <a
          href="#top"
          className="flex items-center space-x-2 text-sage-900 group focus:outline-none"
        >
          <span className="text-gold-500 text-sm">✝</span>
          <span className="font-script text-2xl sm:text-3xl font-semibold text-sage-800 group-hover:text-gold-600 transition-colors">
            {weddingConfig.couple.groom.firstName} <span className="text-gold-500 font-serif">&amp;</span> {weddingConfig.couple.bride.firstName}
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-gold-400" />
          <span className="hidden sm:inline-block font-cinzel text-[10px] tracking-widest uppercase text-sage-700">
            Nov 12, 2026
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs font-cinzel tracking-wider transition-colors duration-200 uppercase ${
                link.highlight
                  ? 'px-3.5 py-1.5 rounded-full bg-sage-800 text-white hover:bg-gold-600 shadow-sm'
                  : 'text-sage-900/80 hover:text-gold-600'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons: Language toggle + Reopen Envelope + Mobile Toggle */}
        <div className="flex items-center space-x-2 mr-14 sm:mr-28">
          
          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            type="button"
            className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full border border-sage-300 bg-white/90 text-sage-800 hover:border-gold-500 text-xs font-cinzel transition-all shadow-sm"
            title="Switch Language (English / മലയാളം)"
          >
            <Globe className="w-3.5 h-3.5 text-gold-500" />
            <span className="font-semibold">{currentLang === 'en' ? 'മലയാളം' : 'English'}</span>
          </button>

          {/* Envelope Quick View button */}
          <button
            onClick={onReopenEnvelope}
            type="button"
            className="hidden md:flex items-center space-x-1 px-2.5 py-1 rounded-full border border-sage-300 bg-white/90 text-sage-800 hover:text-gold-600 text-xs font-cinzel transition-all shadow-sm"
            title="View Envelope Cover"
          >
            <Mail className="w-3.5 h-3.5 text-sage-600" />
            <span>Envelope</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden p-2 rounded-md text-sage-800 hover:bg-sage-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F2] border-b border-[#C5A059]/20 shadow-xl px-6 py-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-sm font-cinzel tracking-wider py-1.5 transition-colors ${
                  link.highlight
                    ? 'inline-block text-center py-2 rounded-full bg-sage-800 text-white font-medium'
                    : 'text-sage-900/80 hover:text-gold-600 border-b border-sage-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => {
                  onReopenEnvelope();
                  setMobileMenuOpen(false);
                }}
                type="button"
                className="flex items-center space-x-1.5 text-xs font-cinzel text-sage-700 py-1"
              >
                <Mail className="w-4 h-4 text-gold-500" />
                <span>Return to Envelope Cover</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
