import { motion } from 'motion/react';
import { Heart, Shield, Sparkles, Users } from 'lucide-react';
import greenNails from '@/imports/IMAGE_2026-06-25_13_53_37.jpg';
import salonLounge from '@/imports/Screenshot_2026-06-25_at_13.57.00.png';
import pedicureRoom from '@/imports/Screenshot_2026-06-25_at_13.57.23.png';

interface AboutProps {
  language: 'en' | 'de' | 'uk' | 'fr' | 'es' | 'ru' | 'it';
}

export function About({ language }: AboutProps) {
  const translations = {
    en: {
      title: 'About Perle',
      intro: 'Experience exceptional beauty care at Perle, Vienna\'s premier beauty salon. We combine artistry with precision to deliver an unparalleled experience.',
      features: [
        {
          icon: Shield,
          title: 'Hygiene Excellence',
          description: 'The highest standards of cleanliness and sterilization are maintained.',
        },
        {
          icon: Heart,
          title: 'Personalized Service',
          description: 'Every treatment is tailored to your unique needs and preferences.',
        },
        {
          icon: Sparkles,
          title: 'Premium Products',
          description: 'We use only the finest, high-end beauty products from leading brands.',
        },
        {
          icon: Users,
          title: 'Expert Artisans',
          description: 'Our team of professionals brings years of expertise and passion.',
        },
      ],
    },
    de: {
      title: 'Über Perle',
      intro: 'Erleben Sie außergewöhnliche Schönheitspflege im Perle, Wiens führendem Beauty Salon. Wir kombinieren Kunstfertigkeit mit Präzision für ein unvergleichliches Erlebnis.',
      features: [
        {
          icon: Shield,
          title: 'Höchste Hygiene',
          description: 'Wir garantieren die höchsten Standards für Sauberkeit und Sterilisation.',
        },
        {
          icon: Heart,
          title: 'Persönlicher Service',
          description: 'Jede Behandlung wird auf Ihre individuellen Bedürfnisse abgestimmt.',
        },
        {
          icon: Sparkles,
          title: 'Premium Produkte',
          description: 'Wir verwenden nur die feinsten Beauty-Produkte führender Marken.',
        },
        {
          icon: Users,
          title: 'Experten-Team',
          description: 'Unser Profi-Team bringt jahrelange Expertise und Leidenschaft mit.',
        },
      ],
    },
    uk: {
      title: 'Про Perle',
      intro: 'Відчуйте виняткову якість догляду за красою в Perle, провідному салоні краси Відня. Ми поєднуємо майстерність з точністю для неперевершеного досвіду.',
      features: [
        {
          icon: Shield,
          title: 'Бездоганна Гігієна',
          description: 'Дотримуємось найвищих стандартів чистоти та стерилізації.',
        },
        {
          icon: Heart,
          title: 'Персональний Сервіс',
          description: 'Кожна процедура адаптована до ваших унікальних потреб та уподобань.',
        },
        {
          icon: Sparkles,
          title: 'Преміум Продукти',
          description: 'Ми використовуємо лише найкращу косметику провідних брендів.',
        },
        {
          icon: Users,
          title: 'Експертні Майстри',
          description: 'Наша команда професіоналів має багаторічний досвід та пристрасть.',
        },
      ],
    },
    fr: {
      title: 'À Propos de Perle',
      intro: 'Découvrez des soins de beauté exceptionnels chez Perle, le premier salon de beauté de Vienne. Nous combinons l\'art et la précision pour offrir une expérience inégalée.',
      features: [
        {
          icon: Shield,
          title: 'Excellence Hygiénique',
          description: 'Les normes les plus élevées de propreté et de stérilisation sont maintenues.',
        },
        {
          icon: Heart,
          title: 'Service Personnalisé',
          description: 'Chaque traitement est adapté à vos besoins et préférences uniques.',
        },
        {
          icon: Sparkles,
          title: 'Produits Premium',
          description: 'Nous utilisons uniquement les meilleurs produits de beauté de marques leaders.',
        },
        {
          icon: Users,
          title: 'Artisans Experts',
          description: 'Notre équipe de professionnels apporte des années d\'expertise et de passion.',
        },
      ],
    },
    es: {
      title: 'Acerca de Perle',
      intro: 'Experimente un cuidado de belleza excepcional en Perle, el principal salón de belleza de Viena. Combinamos arte con precisión para ofrecer una experiencia incomparable.',
      features: [
        {
          icon: Shield,
          title: 'Excelencia en Higiene',
          description: 'Mantenemos los más altos estándares de limpieza y esterilización.',
        },
        {
          icon: Heart,
          title: 'Servicio Personalizado',
          description: 'Cada tratamiento está adaptado a sus necesidades y preferencias únicas.',
        },
        {
          icon: Sparkles,
          title: 'Productos Premium',
          description: 'Usamos solo los mejores productos de belleza de marcas líderes.',
        },
        {
          icon: Users,
          title: 'Artesanos Expertos',
          description: 'Nuestro equipo de profesionales aporta años de experiencia y pasión.',
        },
      ],
    },
    ru: {
      title: 'О Perle',
      intro: 'Испытайте исключительный уход за красотой в Perle, ведущем салоне красоты Вены. Мы сочетаем искусство с точностью для непревзойденного опыта.',
      features: [
        {
          icon: Shield,
          title: 'Превосходная Гигиена',
          description: 'Поддерживаются самые высокие стандарты чистоты и стерилизации.',
        },
        {
          icon: Heart,
          title: 'Персональный Сервис',
          description: 'Каждая процедура адаптирована к вашим уникальным потребностям и предпочтениям.',
        },
        {
          icon: Sparkles,
          title: 'Премиум Продукты',
          description: 'Мы используем только лучшие косметические продукты ведущих брендов.',
        },
        {
          icon: Users,
          title: 'Экспертные Мастера',
          description: 'Наша команда профессионалов обладает многолетним опытом и страстью.',
        },
      ],
    },
    it: {
      title: 'Chi Siamo - Perle',
      intro: 'Vivi una cura della bellezza eccezionale da Perle, il principale salone di bellezza di Vienna. Combiniamo arte e precisione per offrire un\'esperienza senza pari.',
      features: [
        {
          icon: Shield,
          title: 'Eccellenza Igienica',
          description: 'Vengono mantenuti i più alti standard di pulizia e sterilizzazione.',
        },
        {
          icon: Heart,
          title: 'Servizio Personalizzato',
          description: 'Ogni trattamento è adattato alle tue esigenze e preferenze uniche.',
        },
        {
          icon: Sparkles,
          title: 'Prodotti Premium',
          description: 'Utilizziamo solo i migliori prodotti di bellezza di marchi leader.',
        },
        {
          icon: Users,
          title: 'Artigiani Esperti',
          description: 'Il nostro team di professionisti porta anni di esperienza e passione.',
        },
      ],
    },
  };

  const t = translations[language];

  return (
    <section id="about" className="py-24 bg-white/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-[#7B5B3E] mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
            {t.title}
          </h2>
          <div className="w-16 h-1 bg-[#5A4634] mx-auto mb-8" />
          <p className="text-lg text-[#2F2F2F] max-w-3xl mx-auto font-light leading-relaxed">
            {t.intro}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-[#D6D2CC]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-[#5A4634]" />
                </div>
                <h3 className="text-xl text-[#7B5B3E] mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {feature.title}
                </h3>
                <p className="text-[#2F2F2F] font-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={greenNails}
              alt="Green nail art with red french tips"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={salonLounge}
              alt="Perle salon lounge interior"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={pedicureRoom}
              alt="Perle pedicure treatment room"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
