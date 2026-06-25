import { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import logoPerle from 'figma:asset/568ddff43e7b897b8fb8c0f7a67a52adfc0ac5a7.png';

interface HeaderProps {
  language: 'en' | 'de' | 'uk' | 'fr' | 'es' | 'ru' | 'it';
  onLanguageChange: (lang: 'en' | 'de' | 'uk' | 'fr' | 'es' | 'ru' | 'it') => void;
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const translations = {
    en: {
      services: 'Services',
      booking: 'Book Now',
      about: 'About',
      location: 'Location',
    },
    de: {
      services: 'Leistungen',
      booking: 'Jetzt Buchen',
      about: 'Über Uns',
      location: 'Standort',
    },
    uk: {
      services: 'Послуги',
      booking: 'Записатися',
      about: 'Про нас',
      location: 'Локація',
    },
    fr: {
      services: 'Services',
      booking: 'Réserver',
      about: 'À Propos',
      location: 'Localisation',
    },
    es: {
      services: 'Servicios',
      booking: 'Reservar',
      about: 'Acerca de',
      location: 'Ubicación',
    },
    ru: {
      services: 'Услуги',
      booking: 'Записаться',
      about: 'О нас',
      location: 'Локация',
    },
    it: {
      services: 'Servizi',
      booking: 'Prenota',
      about: 'Chi Siamo',
      location: 'Posizione',
    },
  };

  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const languages = [
    { code: 'en', label: 'EN', fullName: 'English' },
    { code: 'de', label: 'DE', fullName: 'Deutsch' },
    { code: 'uk', label: 'UA', fullName: 'Українська' },
    { code: 'fr', label: 'FR', fullName: 'Français' },
    { code: 'es', label: 'ES', fullName: 'Español' },
    { code: 'ru', label: 'RU', fullName: 'Русский' },
    { code: 'it', label: 'IT', fullName: 'Italiano' },
  ];

  const primaryLanguages = ['en', 'de'];
  const currentLang = languages.find(l => l.code === language);
  const otherLanguages = languages.filter(l => !primaryLanguages.includes(l.code));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F8F7]/95 backdrop-blur-sm border-b border-[#D6D2CC]/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="relative flex items-center cursor-pointer"
          >
            <img 
              src={logoPerle} 
              alt="Perle"
              className="h-14"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#2F2F2F] hover:text-[#5A4634] transition-colors duration-300"
            >
              {t.services}
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="text-[#2F2F2F] hover:text-[#5A4634] transition-colors duration-300"
            >
              {t.booking}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#2F2F2F] hover:text-[#5A4634] transition-colors duration-300"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-[#2F2F2F] hover:text-[#5A4634] transition-colors duration-300"
            >
              {t.location}
            </button>

            {/* Language Switcher */}
            <div className="relative ml-4 border-l border-[#D6D2CC] pl-4">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 text-[#2F2F2F] hover:text-[#5A4634] transition-colors duration-300"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{currentLang?.label}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {langMenuOpen && (
                <>
                  {/* Backdrop to close menu when clicking outside */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-[#D6D2CC]/30 py-2 min-w-[160px] z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang.code as any);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200 ${
                          language === lang.code
                            ? 'bg-[#5A4634] text-white'
                            : 'text-[#2F2F2F] hover:bg-[#D6D2CC]/20'
                        }`}
                      >
                        {lang.fullName}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#2F2F2F]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#2F2F2F] hover:text-[#5A4634] transition-colors duration-300 text-left"
            >
              {t.services}
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="text-[#2F2F2F] hover:text-[#5A4634] transition-colors duration-300 text-left"
            >
              {t.booking}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#2F2F2F] hover:text-[#5A4634] transition-colors duration-300 text-left"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-[#2F2F2F] hover:text-[#5A4634] transition-colors duration-300 text-left"
            >
              {t.location}
            </button>
            <div className="mt-2 pt-4 border-t border-[#D6D2CC]/30">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-4 h-4 text-[#5A4634]" />
                <span className="text-sm text-[#2F2F2F]">Language</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code as any)}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                      language === lang.code
                        ? 'bg-[#5A4634] text-white'
                        : 'bg-[#D6D2CC]/20 text-[#2F2F2F] hover:bg-[#D6D2CC]/40'
                    }`}
                  >
                    {lang.fullName}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
