import { motion } from 'motion/react';
import { MapPin, ExternalLink } from 'lucide-react';
import whiteNails from '@/imports/Screenshot_2026-06-25_at_13.58.43.png';

interface LocationProps {
  language: 'en' | 'de' | 'uk' | 'fr' | 'es' | 'ru' | 'it';
}

export function Location({ language }: LocationProps) {
  const translations = {
    en: {
      title: 'Visit Us',
      address: 'Bruno-Marek-Allee 8',
      city: '1020 Wien, Austria',
      googleMaps: 'Open in Google Maps',
      appleMaps: 'Open in Apple Maps',
    },
    de: {
      title: 'Besuchen Sie Uns',
      address: 'Bruno-Marek-Allee 8',
      city: '1020 Wien, Österreich',
      googleMaps: 'In Google Maps Öffnen',
      appleMaps: 'In Apple Maps Öffnen',
    },
    uk: {
      title: 'Відвідайте Нас',
      address: 'Bruno-Marek-Allee 8',
      city: '1020 Відень, Австрія',
      googleMaps: 'Відкрити в Google Maps',
      appleMaps: 'Відкрити в Apple Maps',
    },
    fr: {
      title: 'Visitez-Nous',
      address: 'Bruno-Marek-Allee 8',
      city: '1020 Vienne, Autriche',
      googleMaps: 'Ouvrir dans Google Maps',
      appleMaps: 'Ouvrir dans Apple Maps',
    },
    es: {
      title: 'Visítanos',
      address: 'Bruno-Marek-Allee 8',
      city: '1020 Viena, Austria',
      googleMaps: 'Abrir en Google Maps',
      appleMaps: 'Abrir en Apple Maps',
    },
    ru: {
      title: 'Посетите Нас',
      address: 'Bruno-Marek-Allee 8',
      city: '1020 Вена, Австрия',
      googleMaps: 'Открыть в Google Maps',
      appleMaps: 'Открыть в Apple Maps',
    },
    it: {
      title: 'Visitaci',
      address: 'Bruno-Marek-Allee 8',
      city: '1020 Vienna, Austria',
      googleMaps: 'Apri in Google Maps',
      appleMaps: 'Apri in Apple Maps',
    },
  };

  const t = translations[language];

  const address = 'Bruno-Marek-Allee 8, 1020 Wien, Austria';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const appleMapsUrl = `http://maps.apple.com/?q=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="py-24 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-[#7B5B3E] mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
            {t.title}
          </h2>
          <div className="w-16 h-1 bg-[#5A4634] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.9!2d16.4089!3d48.2208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d078c5e4f3b7f%3A0x7e0b6f8c5e4f3b7f!2sBruno-Marek-Allee%2C%201020%20Wien%2C%20Austria!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Perle Location"
            />
          </div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#5A4634] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl text-[#7B5B3E] mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {t.address}
                  </p>
                  <p className="text-lg text-[#2F2F2F]">{t.city}</p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 bg-[#D6D2CC]/30 rounded-lg hover:bg-[#5A4634] hover:text-white transition-all duration-300 group"
                >
                  <span>{t.googleMaps}</span>
                  <ExternalLink className="w-5 h-5 text-[#5A4634] group-hover:text-white transition-colors" />
                </a>
                <a
                  href={appleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 bg-[#D6D2CC]/30 rounded-lg hover:bg-[#5A4634] hover:text-white transition-all duration-300 group"
                >
                  <span>{t.appleMaps}</span>
                  <ExternalLink className="w-5 h-5 text-[#5A4634] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Decorative Image */}
            <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={whiteNails}
                alt="White gel polish manicure"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
