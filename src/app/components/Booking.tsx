import { motion } from 'motion/react';
import { Calendar, Clock, User } from 'lucide-react';

interface BookingProps {
  language: 'en' | 'de' | 'uk' | 'fr' | 'es' | 'ru' | 'it';
}

const BOOKING_URL = 'https://n1439030.alteg.io/';

const translations = {
  en: {
    title: 'Book Your Appointment',
    subtitle: 'Ready for a premium experience? Book your appointment today and let us pamper you.',
    cta: 'Book Now',
    features: [
      { icon: Calendar, text: 'Flexible scheduling' },
      { icon: Clock, text: 'Quick & easy booking' },
      { icon: User, text: 'Expert specialists' },
    ],
    modalTitle: 'Online booking coming soon',
    modalText: 'For now, please send us a direct message on Instagram to book your appointment. We respond quickly!',
    modalCta: 'Message us on Instagram',
    modalClose: 'Close',
  },
  de: {
    title: 'Termin Buchen',
    subtitle: 'Bereit für ein erstklassiges Erlebnis? Buchen Sie noch heute Ihren Termin und lassen Sie sich verwöhnen.',
    cta: 'Jetzt Buchen',
    features: [
      { icon: Calendar, text: 'Flexible Terminplanung' },
      { icon: Clock, text: 'Schnell & einfach buchen' },
      { icon: User, text: 'Erfahrene Spezialisten' },
    ],
    modalTitle: 'Online-Buchung kommt bald',
    modalText: 'Schreiben Sie uns vorerst eine Direktnachricht auf Instagram, um Ihren Termin zu buchen. Wir antworten schnell!',
    modalCta: 'Auf Instagram schreiben',
    modalClose: 'Schließen',
  },
  uk: {
    title: 'Записатися на Прийом',
    subtitle: 'Готові до преміального досвіду? Запишіться на прийом сьогодні, і ми подбаємо про вас.',
    cta: 'Записатися',
    features: [
      { icon: Calendar, text: 'Гнучкий графік' },
      { icon: Clock, text: 'Швидке бронювання' },
      { icon: User, text: 'Професійні майстри' },
    ],
    modalTitle: 'Онлайн-запис скоро буде доступний',
    modalText: 'Наразі, будь ласка, напишіть нам у Direct в Instagram, щоб записатись. Ми відповідаємо швидко!',
    modalCta: 'Написати в Instagram',
    modalClose: 'Закрити',
  },
  fr: {
    title: 'Réserver Votre Rendez-vous',
    subtitle: "Prêt pour une expérience premium? Réservez votre rendez-vous aujourd'hui et laissez-nous vous chouchouter.",
    cta: 'Réserver',
    features: [
      { icon: Calendar, text: 'Planification flexible' },
      { icon: Clock, text: 'Réservation rapide' },
      { icon: User, text: 'Spécialistes experts' },
    ],
    modalTitle: 'Réservation en ligne bientôt disponible',
    modalText: "Pour l'instant, envoyez-nous un message direct sur Instagram pour réserver. Nous répondons rapidement!",
    modalCta: 'Nous contacter sur Instagram',
    modalClose: 'Fermer',
  },
  es: {
    title: 'Reservar su Cita',
    subtitle: '¿Listo para una experiencia premium? Reserve su cita hoy y déjenos consentirle.',
    cta: 'Reservar Ahora',
    features: [
      { icon: Calendar, text: 'Programación flexible' },
      { icon: Clock, text: 'Reserva rápida' },
      { icon: User, text: 'Especialistas expertos' },
    ],
    modalTitle: 'Reserva online próximamente',
    modalText: 'Por ahora, envíenos un mensaje directo en Instagram para reservar su cita. ¡Respondemos rápido!',
    modalCta: 'Escribirnos en Instagram',
    modalClose: 'Cerrar',
  },
  ru: {
    title: 'Записаться на Приём',
    subtitle: 'Готовы к премиальному опыту? Запишитесь на приём сегодня, и мы позаботимся о вас.',
    cta: 'Записаться',
    features: [
      { icon: Calendar, text: 'Гибкое расписание' },
      { icon: Clock, text: 'Быстрое бронирование' },
      { icon: User, text: 'Профессиональные мастера' },
    ],
    modalTitle: 'Онлайн-запись скоро будет доступна',
    modalText: 'Пока что, пожалуйста, напишите нам в Direct в Instagram, чтобы записаться. Мы отвечаем быстро!',
    modalCta: 'Написать в Instagram',
    modalClose: 'Закрыть',
  },
  it: {
    title: 'Prenota il Tuo Appuntamento',
    subtitle: "Pronto per un'esperienza premium? Prenota oggi il tuo appuntamento e lascia che ci prendiamo cura di te.",
    cta: 'Prenota Ora',
    features: [
      { icon: Calendar, text: 'Programmazione flessibile' },
      { icon: Clock, text: 'Prenotazione rapida' },
      { icon: User, text: 'Specialisti esperti' },
    ],
    modalTitle: 'Prenotazione online in arrivo',
    modalText: "Per ora, mandaci un messaggio diretto su Instagram per prenotare. Rispondiamo rapidamente!",
    modalCta: 'Scrivici su Instagram',
    modalClose: 'Chiudi',
  },
};

export function Booking({ language }: BookingProps) {
  const t = translations[language];

  return (
    <section id="booking" className="py-24 bg-transparent">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl text-[#7B5B3E] mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {t.title}
            </h2>
            <div className="w-16 h-1 bg-[#5A4634] mx-auto mb-8" />

            <p className="text-lg md:text-xl text-[#2F2F2F] mb-12 max-w-2xl mx-auto">
              {t.subtitle}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {t.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <feature.icon className="w-12 h-12 text-[#5A4634] mx-auto mb-4" />
                  <p className="text-[#2F2F2F] font-medium">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => window.open(BOOKING_URL, '_blank')}
              className="px-16 py-5 bg-[#5A4634] text-white text-lg rounded-full hover:bg-[#4A3624] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {t.cta}
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12"
            >
              <div className="flex items-center justify-center gap-2">
                <div className="w-12 h-0.5 bg-[#5A4634]" />
                <div className="w-2 h-2 bg-[#5A4634] rounded-full" />
                <div className="w-12 h-0.5 bg-[#5A4634]" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
}
