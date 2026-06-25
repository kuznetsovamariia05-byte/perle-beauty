import { Instagram, Mail, Phone, Clock, Globe } from 'lucide-react';
import logoPerle from 'figma:asset/568ddff43e7b897b8fb8c0f7a67a52adfc0ac5a7.png';

interface FooterProps {
  language: 'en' | 'de' | 'uk' | 'fr' | 'es' | 'ru' | 'it';
  onLanguageChange: (lang: 'en' | 'de' | 'uk' | 'fr' | 'es' | 'ru' | 'it') => void;
}

export function Footer({ language, onLanguageChange }: FooterProps) {
  const translations = {
    en: {
      hours: 'Opening Hours',
      contact: 'Contact',
      follow: 'Follow Us',
      privacy: 'Privacy Policy',
      schedule: {
        weekdays: 'Monday - Saturday',
        weekdaysHours: '9:00 - 21:00',
        sunday: 'Sunday',
        sundayHours: 'Closed',
      },
      rights: '© 2026 Perle Beauty Atelier. All rights reserved.',
      description: 'Premier beauty salon in Vienna',
    },
    de: {
      hours: 'Öffnungszeiten',
      contact: 'Kontakt',
      follow: 'Folgen Sie Uns',
      privacy: 'Datenschutz',
      schedule: {
        weekdays: 'Montag - Samstag',
        weekdaysHours: '9:00 - 21:00',
        sunday: 'Sonntag',
        sundayHours: 'Geschlossen',
      },
      rights: '© 2026 Perle Beauty Atelier. Alle Rechte vorbehalten.',
      description: 'Erstklassiger Beauty Salon in Wien',
    },
    uk: {
      hours: 'Години Роботи',
      contact: 'Контакти',
      follow: 'Слідкуйте за Нами',
      privacy: 'Політика Конфіденційності',
      schedule: {
        weekdays: 'Понеділок - Субота',
        weekdaysHours: '9:00 - 21:00',
        sunday: 'Неділя',
        sundayHours: 'Зачинено',
      },
      rights: '© 2026 Perle Beauty Atelier. Всі права захищені.',
      description: 'Провідний салон краси у Відні',
    },
    fr: {
      hours: 'Horaires d\'Ouverture',
      contact: 'Contact',
      follow: 'Suivez-Nous',
      privacy: 'Politique de Confidentialité',
      schedule: {
        weekdays: 'Lundi - Samedi',
        weekdaysHours: '9:00 - 21:00',
        sunday: 'Dimanche',
        sundayHours: 'Fermé',
      },
      rights: '© 2026 Perle Beauty Atelier. Tous droits réservés.',
      description: 'Salon de beauté premier à Vienne',
    },
    es: {
      hours: 'Horario de Apertura',
      contact: 'Contacto',
      follow: 'Síguenos',
      privacy: 'Política de Privacidad',
      schedule: {
        weekdays: 'Lunes - Sábado',
        weekdaysHours: '9:00 - 21:00',
        sunday: 'Domingo',
        sundayHours: 'Cerrado',
      },
      rights: '© 2026 Perle Beauty Atelier. Todos los derechos reservados.',
      description: 'Salón de belleza premier en Viena',
    },
    ru: {
      hours: 'Часы Работы',
      contact: 'Контакты',
      follow: 'Следите за Нами',
      privacy: 'Политика Конфиденциальности',
      schedule: {
        weekdays: 'Понедельник - Суббота',
        weekdaysHours: '9:00 - 21:00',
        sunday: 'Воскресенье',
        sundayHours: 'Закрыто',
      },
      rights: '© 2026 Perle Beauty Atelier. Все права защищены.',
      description: 'Премиальный салон красоты в Вене',
    },
    it: {
      hours: 'Orari di Apertura',
      contact: 'Contatti',
      follow: 'Seguici',
      privacy: 'Privacy Policy',
      schedule: {
        weekdays: 'Lunedì - Sabato',
        weekdaysHours: '9:00 - 21:00',
        sunday: 'Domenica',
        sundayHours: 'Chiuso',
      },
      rights: '© 2026 Perle Beauty Atelier. Tutti i diritti riservati.',
      description: 'Salone di bellezza premier a Vienna',
    },
  };

  const t = translations[language];

  const languages = [
    { code: 'en', fullName: 'English' },
    { code: 'de', fullName: 'Deutsch' },
    { code: 'uk', fullName: 'Українська' },
    { code: 'fr', fullName: 'Français' },
    { code: 'es', fullName: 'Español' },
    { code: 'ru', fullName: 'Русский' },
    { code: 'it', fullName: 'Italiano' },
  ];

  return (
    <footer className="bg-[#2F2F2F] text-[#F9F8F7] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img 
                src={logoPerle} 
                alt="Perle"
                className="h-12 brightness-0 invert"
              />
            </div>
            <p className="text-[#D6D2CC] text-sm">
              {t.description}
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl mb-4 flex items-center gap-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
              <Clock className="w-5 h-5 text-[#D6D2CC]" />
              {t.hours}
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className="text-[#D6D2CC]">{t.schedule.weekdays}</p>
                <p>{t.schedule.weekdaysHours}</p>
              </div>
              <div>
                <p className="text-[#D6D2CC]">{t.schedule.sunday}</p>
                <p>{t.schedule.sundayHours}</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {t.contact}
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:info@perlebeauty.at"
                className="flex items-center gap-2 text-[#D6D2CC] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@perlebeauty.at
              </a>
              <a
                href="tel:+436764712427"
                className="flex items-center gap-2 text-[#D6D2CC] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +43 676 471 2427
              </a>
              <p className="text-[#D6D2CC] text-xs leading-relaxed">
                Bruno-Marek-Allee 8<br />
                1020 Wien, Austria
              </p>
            </div>
          </div>

          {/* Social & Language */}
          <div>
            <h3 className="text-xl mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {t.follow}
            </h3>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/perle.vienna?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#D6D2CC] hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @perle.vienna
              </a>

              {/* Language Switcher */}
              <div className="pt-4 border-t border-[#D6D2CC]/20">
                <div className="flex flex-wrap items-center gap-2">
                  <Globe className="w-4 h-4 text-[#D6D2CC]" />
                  {languages.map((lang, index) => (
                    <span key={lang.code} className="flex items-center gap-2">
                      {index > 0 && <span className="text-[#D6D2CC]">/</span>}
                      <button
                        onClick={() => onLanguageChange(lang.code as any)}
                        className={`text-sm ${
                          language === lang.code
                            ? 'text-white'
                            : 'text-[#D6D2CC]'
                        } hover:text-white transition-colors`}
                      >
                        {lang.fullName}
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D6D2CC]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#D6D2CC]">
          <p>{t.rights}</p>
          <button className="hover:text-white transition-colors">
            {t.privacy}
          </button>
        </div>
      </div>
    </footer>
  );
}
