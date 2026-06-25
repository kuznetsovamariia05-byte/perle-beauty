import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import logoPerle from 'figma:asset/568ddff43e7b897b8fb8c0f7a67a52adfc0ac5a7.png';

interface HeroProps {
  language: 'en' | 'de' | 'uk' | 'fr' | 'es' | 'ru' | 'it';
}

export function Hero({ language }: HeroProps) {
  const translations = {
    en: {
      title: 'Premier Beauty Salon in Vienna',
      subtitle: 'Professional manicure, pedicure, brows & lashes for a flawless look.',
      cta: 'Book Your Appointment',
    },
    de: {
      title: 'Erstklassiger Beauty Salon in Wien',
      subtitle: 'Professionelle Maniküre, Pediküre, Augenbrauen & Wimpern für einen makellosen Look.',
      cta: 'Termin Buchen',
    },
    uk: {
      title: 'Провідний Салон Краси у Відні',
      subtitle: 'Професійний манікюр, педикюр, брови та вії для бездоганного вигляду.',
      cta: 'Записатися на Прийом',
    },
    fr: {
      title: 'Salon de Beauté Premier à Vienne',
      subtitle: 'Manucure, pédicure, sourcils et cils professionnels pour un look impeccable.',
      cta: 'Prendre Rendez-vous',
    },
    es: {
      title: 'Salón de Belleza Premier en Viena',
      subtitle: 'Manicura, pedicura, cejas y pestañas profesionales para un aspecto impecable.',
      cta: 'Reservar Cita',
    },
    ru: {
      title: 'Премиальный Салон Красоты в Вене',
      subtitle: 'Профессиональный маникюр, педикюр, брови и ресницы для безупречного образа.',
      cta: 'Записаться на Приём',
    },
    it: {
      title: 'Salone di Bellezza Premier a Vienna',
      subtitle: 'Manicure, pedicure, sopracciglia e ciglia professionali per un look impeccabile.',
      cta: 'Prenota Appuntamento',
    },
  };

  const t = translations[language];

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="mb-8 flex justify-center">
            <div className="text-center">
              <img 
                src={logoPerle} 
                alt="Perle"
                className="h-48 md:h-64 mx-auto mx-[0px] mt-[0px] mb-[-50px]"
              />
              <div className="w-32 h-0.5 bg-[#5A4634] mx-auto -mt-6" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl text-[#7B5B3E] mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
            {t.title}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-xl text-[#2F2F2F] mb-12 max-w-2xl mx-auto font-light"
        >
          {t.subtitle}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          onClick={scrollToBooking}
          className="px-12 py-4 bg-[#5A4634] text-[#F9F8F7] rounded-full hover:bg-[#4A3624] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          {t.cta}
        </motion.button>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="mt-20"
        >
          <div className="w-2 h-2 bg-[#5A4634] rounded-full mx-auto mb-2" />
          <div className="w-1 h-16 bg-gradient-to-b from-[#5A4634] to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
