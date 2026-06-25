import { motion } from 'motion/react';
import { Eye, Sparkles, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface ServicesProps {
  language: 'en' | 'de' | 'uk' | 'fr' | 'es' | 'ru' | 'it';
}

interface BrowService {
  name: string;
  price: string;
  duration: string;
  note?: string;
}

interface NailService {
  name: string;
  simple: string;
  standard: string;
  complex: string;
  luxury: string;
}

interface BrowCategory {
  type: 'brows';
  title: string;
  services: BrowService[];
}

interface NailCategory {
  type: 'nails';
  title: string;
  note: string;
  tiers: { simple: string; standard: string; complex: string; luxury: string };
  services: NailService[];
}

type Category = BrowCategory | NailCategory;

interface Translation {
  title: string;
  duration: string;
  note: string;
  categories: Category[];
}

const translations: Record<string, Translation> = {
  en: {
    title: 'Our Services',
    duration: 'Duration',
    note: 'Note',
    categories: [
      {
        type: 'brows',
        title: 'Brows & Lashes',
        services: [
          { name: 'Brow correction + tinting', price: '€45', duration: '45 min' },
          { name: 'Brow tinting', price: '€20', duration: '20 min' },
          { name: 'Brow correction (women)', price: '€20', duration: '25 min' },
          { name: 'Brow correction (men)', price: '€30', duration: '25 min' },
          { name: 'Lash tinting', price: '€20', duration: '20 min' },
          { name: 'Brow lamination', price: '€50', duration: '30 min', note: 'without tint & correction' },
          { name: 'Brow lamination + correction', price: '€60', duration: '40 min' },
          { name: 'Brow lamination + correction + tinting', price: '€70', duration: '60 min' },
          { name: 'Lash lamination + tinting', price: '€70', duration: '60 min' },
          { name: 'Upper lip waxing', price: '€5', duration: '+5 min', note: 'add-on service' },
        ],
      },
      {
        type: 'nails',
        title: 'Nails',
        note: '* Price depends on design complexity and nail length',
        tiers: { simple: 'Master', standard: 'Top Master', complex: 'Pro Master', luxury: 'Nail Artist' },
        services: [
          { name: 'Manicure, removal, gel polish', simple: '€60', standard: '€70', complex: '€80', luxury: '€90' },
          { name: 'Pedicure, removal, gel polish', simple: '€80', standard: '€90', complex: '€105', luxury: '€120' },
          { name: 'Pedicure', simple: '€50', standard: '€60', complex: '€65', luxury: '€70' },
          { name: 'Manicure', simple: '€40', standard: '€45', complex: '€50', luxury: '€50' },
          { name: 'Regular nail polish', simple: '€25', standard: '—', complex: '—', luxury: '—' },
        ],
      },
    ],
  },
  de: {
    title: 'Unsere Leistungen',
    duration: 'Dauer',
    note: 'Hinweis',
    categories: [
      {
        type: 'brows',
        title: 'Brauen & Wimpern',
        services: [
          { name: 'Brauen formen + färben', price: '€45', duration: '45 min' },
          { name: 'Brauen färben', price: '€20', duration: '20 min' },
          { name: 'Brauen formen (Damen)', price: '€20', duration: '25 min' },
          { name: 'Brauen formen (Herren)', price: '€30', duration: '25 min' },
          { name: 'Wimpern färben', price: '€20', duration: '20 min' },
          { name: 'Brauen-Lamination', price: '€50', duration: '30 min', note: 'ohne Farbe & Formen' },
          { name: 'Brauen-Lamination + Formen', price: '€60', duration: '40 min' },
          { name: 'Brauen-Lamination + Formen + Farbe', price: '€70', duration: '60 min' },
          { name: 'Wimpern-Lamination + Farbe', price: '€70', duration: '60 min' },
          { name: 'Oberlippen-Haarentfernung', price: '€5', duration: '+5 min', note: 'als Zusatzleistung' },
        ],
      },
      {
        type: 'nails',
        title: 'Nägel',
        note: '* Preis abhängig von Designkomplexität und Nagellänge',
        tiers: { simple: 'Master', standard: 'Top Master', complex: 'Pro Master', luxury: 'Nail Artist' },
        services: [
          { name: 'Maniküre, Abnahme, Gel-Lack', simple: '€60', standard: '€70', complex: '€80', luxury: '€90' },
          { name: 'Pediküre, Abnahme, Gel-Lack', simple: '€80', standard: '€90', complex: '€105', luxury: '€120' },
          { name: 'Pediküre', simple: '€50', standard: '€60', complex: '€65', luxury: '€70' },
          { name: 'Maniküre', simple: '€40', standard: '€45', complex: '€50', luxury: '€50' },
          { name: 'Normaler Nagellack', simple: '€25', standard: '—', complex: '—', luxury: '—' },
        ],
      },
    ],
  },
  uk: {
    title: 'Наші Послуги',
    duration: 'Тривалість',
    note: 'Примітка',
    categories: [
      {
        type: 'brows',
        title: 'Брови та Вії',
        services: [
          { name: 'Корекція + фарбування брів', price: '€45', duration: '45 хв' },
          { name: 'Фарбування брів', price: '€20', duration: '20 хв' },
          { name: 'Корекція брів (жіноча)', price: '€20', duration: '25 хв' },
          { name: 'Корекція брів (чоловіча)', price: '€30', duration: '25 хв' },
          { name: 'Фарбування вій', price: '€20', duration: '20 хв' },
          { name: 'Ламінування брів', price: '€50', duration: '30 хв', note: 'без фарбування та корекції' },
          { name: 'Ламінування брів + корекція', price: '€60', duration: '40 хв' },
          { name: 'Ламінування брів + корекція + фарбування', price: '€70', duration: '60 хв' },
          { name: 'Ламінування вій + фарбування', price: '€70', duration: '60 хв' },
          { name: 'Депіляція над губою', price: '€5', duration: '+5 хв', note: 'додаткова послуга' },
        ],
      },
      {
        type: 'nails',
        title: 'Нігті',
        note: '* Ціна залежить від складності дизайну та довжини нігтів',
        tiers: { simple: 'Master', standard: 'Top Master', complex: 'Pro Master', luxury: 'Nail Artist' },
        services: [
          { name: 'Манікюр, зняття, покриття гель-лак', simple: '€60', standard: '€70', complex: '€80', luxury: '€90' },
          { name: 'Педикюр, зняття, покриття гель-лак', simple: '€80', standard: '€90', complex: '€105', luxury: '€120' },
          { name: 'Педикюр', simple: '€50', standard: '€60', complex: '€65', luxury: '€70' },
          { name: 'Манікюр', simple: '€40', standard: '€45', complex: '€50', luxury: '€50' },
          { name: 'Покриття звичайним лаком', simple: '€25', standard: '—', complex: '—', luxury: '—' },
        ],
      },
    ],
  },
  ru: {
    title: 'Наши Услуги',
    duration: 'Длительность',
    note: 'Примечание',
    categories: [
      {
        type: 'brows',
        title: 'Брови и Ресницы',
        services: [
          { name: 'Коррекция + окрашивание бровей', price: '€45', duration: '45 мин' },
          { name: 'Окрашивание бровей', price: '€20', duration: '20 мин' },
          { name: 'Коррекция бровей (женская)', price: '€20', duration: '25 мин' },
          { name: 'Коррекция бровей (мужская)', price: '€30', duration: '25 мин' },
          { name: 'Окрашивание ресниц', price: '€20', duration: '20 мин' },
          { name: 'Ламинирование бровей', price: '€50', duration: '30 мин', note: 'без окрашивания и коррекции' },
          { name: 'Ламинирование бровей + коррекция', price: '€60', duration: '40 мин' },
          { name: 'Ламинирование бровей + коррекция + окрашивание', price: '€70', duration: '60 мин' },
          { name: 'Ламинирование ресниц + окрашивание', price: '€70', duration: '60 мин' },
          { name: 'Депиляция зоны над губой', price: '€5', duration: '+5 мин', note: 'дополнительная услуга' },
        ],
      },
      {
        type: 'nails',
        title: 'Ногти',
        note: '* Цена зависит от сложности дизайна и длины ногтей',
        tiers: { simple: 'Master', standard: 'Top Master', complex: 'Pro Master', luxury: 'Nail Artist' },
        services: [
          { name: 'Маникюр, снятие, покрытие гель-лак', simple: '€60', standard: '€70', complex: '€80', luxury: '€90' },
          { name: 'Педикюр, снятие, покрытие гель-лак', simple: '€80', standard: '€90', complex: '€105', luxury: '€120' },
          { name: 'Педикюр', simple: '€50', standard: '€60', complex: '€65', luxury: '€70' },
          { name: 'Маникюр', simple: '€40', standard: '€45', complex: '€50', luxury: '€50' },
          { name: 'Покрытие обычным лаком', simple: '€25', standard: '—', complex: '—', luxury: '—' },
        ],
      },
    ],
  },
  fr: {
    title: 'Nos Services',
    duration: 'Durée',
    note: 'Remarque',
    categories: [
      {
        type: 'brows',
        title: 'Sourcils & Cils',
        services: [
          { name: 'Correction + teinture sourcils', price: '€45', duration: '45 min' },
          { name: 'Teinture sourcils', price: '€20', duration: '20 min' },
          { name: 'Correction sourcils (femmes)', price: '€20', duration: '25 min' },
          { name: 'Correction sourcils (hommes)', price: '€30', duration: '25 min' },
          { name: 'Teinture cils', price: '€20', duration: '20 min' },
          { name: 'Lamination sourcils', price: '€50', duration: '30 min', note: 'sans teinture & correction' },
          { name: 'Lamination sourcils + correction', price: '€60', duration: '40 min' },
          { name: 'Lamination sourcils + correction + teinture', price: '€70', duration: '60 min' },
          { name: 'Lamination cils + teinture', price: '€70', duration: '60 min' },
          { name: 'Épilation lèvre supérieure', price: '€5', duration: '+5 min', note: 'service complémentaire' },
        ],
      },
      {
        type: 'nails',
        title: 'Ongles',
        note: '* Prix selon complexité du design et longueur des ongles',
        tiers: { simple: 'Master', standard: 'Top Master', complex: 'Pro Master', luxury: 'Nail Artist' },
        services: [
          { name: 'Manucure, retrait, vernis gel', simple: '€60', standard: '€70', complex: '€80', luxury: '€90' },
          { name: 'Pédicure, retrait, vernis gel', simple: '€80', standard: '€90', complex: '€105', luxury: '€120' },
          { name: 'Pédicure', simple: '€50', standard: '€60', complex: '€65', luxury: '€70' },
          { name: 'Manucure', simple: '€40', standard: '€45', complex: '€50', luxury: '€50' },
          { name: 'Vernis classique', simple: '€25', standard: '—', complex: '—', luxury: '—' },
        ],
      },
    ],
  },
  es: {
    title: 'Nuestros Servicios',
    duration: 'Duración',
    note: 'Nota',
    categories: [
      {
        type: 'brows',
        title: 'Cejas & Pestañas',
        services: [
          { name: 'Corrección + tinte cejas', price: '€45', duration: '45 min' },
          { name: 'Tinte cejas', price: '€20', duration: '20 min' },
          { name: 'Corrección cejas (mujeres)', price: '€20', duration: '25 min' },
          { name: 'Corrección cejas (hombres)', price: '€30', duration: '25 min' },
          { name: 'Tinte pestañas', price: '€20', duration: '20 min' },
          { name: 'Laminado de cejas', price: '€50', duration: '30 min', note: 'sin tinte & corrección' },
          { name: 'Laminado cejas + corrección', price: '€60', duration: '40 min' },
          { name: 'Laminado cejas + corrección + tinte', price: '€70', duration: '60 min' },
          { name: 'Laminado pestañas + tinte', price: '€70', duration: '60 min' },
          { name: 'Depilación labio superior', price: '€5', duration: '+5 min', note: 'servicio adicional' },
        ],
      },
      {
        type: 'nails',
        title: 'Uñas',
        note: '* Precio según complejidad del diseño y longitud de uñas',
        tiers: { simple: 'Master', standard: 'Top Master', complex: 'Pro Master', luxury: 'Nail Artist' },
        services: [
          { name: 'Manicura, retirada, esmalte gel', simple: '€60', standard: '€70', complex: '€80', luxury: '€90' },
          { name: 'Pedicura, retirada, esmalte gel', simple: '€80', standard: '€90', complex: '€105', luxury: '€120' },
          { name: 'Pedicura', simple: '€50', standard: '€60', complex: '€65', luxury: '€70' },
          { name: 'Manicura', simple: '€40', standard: '€45', complex: '€50', luxury: '€50' },
          { name: 'Esmalte clásico', simple: '€25', standard: '—', complex: '—', luxury: '—' },
        ],
      },
    ],
  },
  it: {
    title: 'I Nostri Servizi',
    duration: 'Durata',
    note: 'Nota',
    categories: [
      {
        type: 'brows',
        title: 'Sopracciglia & Ciglia',
        services: [
          { name: 'Correzione + tinta sopracciglia', price: '€45', duration: '45 min' },
          { name: 'Tinta sopracciglia', price: '€20', duration: '20 min' },
          { name: 'Correzione sopracciglia (donne)', price: '€20', duration: '25 min' },
          { name: 'Correzione sopracciglia (uomini)', price: '€30', duration: '25 min' },
          { name: 'Tinta ciglia', price: '€20', duration: '20 min' },
          { name: 'Laminazione sopracciglia', price: '€50', duration: '30 min', note: 'senza tinta & correzione' },
          { name: 'Laminazione sopracciglia + correzione', price: '€60', duration: '40 min' },
          { name: 'Laminazione sopracciglia + correzione + tinta', price: '€70', duration: '60 min' },
          { name: 'Laminazione ciglia + tinta', price: '€70', duration: '60 min' },
          { name: 'Ceretta labbro superiore', price: '€5', duration: '+5 min', note: 'servizio aggiuntivo' },
        ],
      },
      {
        type: 'nails',
        title: 'Unghie',
        note: '* Prezzo in base alla complessità del design e alla lunghezza delle unghie',
        tiers: { simple: 'Master', standard: 'Top Master', complex: 'Pro Master', luxury: 'Nail Artist' },
        services: [
          { name: 'Manicure, rimozione, smalto gel', simple: '€60', standard: '€70', complex: '€80', luxury: '€90' },
          { name: 'Pedicure, rimozione, smalto gel', simple: '€80', standard: '€90', complex: '€105', luxury: '€120' },
          { name: 'Pedicure', simple: '€50', standard: '€60', complex: '€65', luxury: '€70' },
          { name: 'Manicure', simple: '€40', standard: '€45', complex: '€50', luxury: '€50' },
          { name: 'Smalto normale', simple: '€25', standard: '—', complex: '—', luxury: '—' },
        ],
      },
    ],
  },
};

export function Services({ language }: ServicesProps) {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0);
  const t = translations[language];

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
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

        <div className="space-y-4">
          {t.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(index)}
                className="w-full flex items-center justify-between p-6 hover:bg-[#D6D2CC]/10 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  {category.type === 'brows' ? (
                    <Eye className="w-6 h-6 text-[#5A4634]" />
                  ) : (
                    <Sparkles className="w-6 h-6 text-[#5A4634]" />
                  )}
                  <h3 className="text-2xl md:text-3xl text-[#7B5B3E]" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {category.title}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-[#5A4634] transition-transform duration-300 ${
                    expandedCategory === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedCategory === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-[#D6D2CC]/30"
                >
                  {category.type === 'brows' ? (
                    <BrowsTable services={category.services} durationLabel={t.duration} noteLabel={t.note} />
                  ) : (
                    <NailsTable services={category.services} tiers={category.tiers} note={category.note} />
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrowsTable({
  services,
  durationLabel,
  noteLabel,
}: {
  services: BrowService[];
  durationLabel: string;
  noteLabel: string;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-[#5A4634]/8 text-[#5A4634] text-sm uppercase tracking-wider">
            <th className="text-left px-6 py-3 font-medium" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Service
            </th>
            <th className="text-right px-4 py-3 font-medium whitespace-nowrap" style={{ fontFamily: "'Oswald', sans-serif" }}>
              €
            </th>
            <th className="text-right px-4 py-3 font-medium whitespace-nowrap" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {durationLabel}
            </th>
            <th className="text-left px-4 py-3 font-medium hidden md:table-cell" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {noteLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map((s, i) => (
            <tr key={i} className={`border-t border-[#D6D2CC]/20 ${i % 2 === 0 ? 'bg-transparent' : 'bg-[#F9F8F7]/40'}`}>
              <td className="px-6 py-3 text-[#2F2F2F] text-sm">{s.name}</td>
              <td className="px-4 py-3 text-right text-[#5A4634] font-semibold whitespace-nowrap text-sm">{s.price}</td>
              <td className="px-4 py-3 text-right text-[#2F2F2F]/70 whitespace-nowrap text-sm">{s.duration}</td>
              <td className="px-4 py-3 text-[#2F2F2F]/60 text-xs italic hidden md:table-cell">{s.note ?? ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function NailsTable({
  services,
  tiers,
  note,
}: {
  services: NailService[];
  tiers: { simple: string; standard: string; complex: string; luxury: string };
  note: string;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-[#5A4634]/8 text-[#5A4634] text-sm uppercase tracking-wider">
            <th className="text-left px-6 py-3 font-medium" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Service
            </th>
            <th className="text-right px-3 py-3 font-medium whitespace-nowrap" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {tiers.simple}
            </th>
            <th className="text-right px-3 py-3 font-medium whitespace-nowrap" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {tiers.standard}
            </th>
            <th className="text-right px-3 py-3 font-medium whitespace-nowrap" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {tiers.complex}
            </th>
            <th className="text-right px-6 py-3 font-medium whitespace-nowrap" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {tiers.luxury}
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map((s, i) => (
            <tr key={i} className={`border-t border-[#D6D2CC]/20 ${i % 2 === 0 ? 'bg-transparent' : 'bg-[#F9F8F7]/40'}`}>
              <td className="px-6 py-3 text-[#2F2F2F] text-sm">{s.name}</td>
              <td className="px-3 py-3 text-right text-[#5A4634] font-semibold text-sm whitespace-nowrap">{s.simple}</td>
              <td className="px-3 py-3 text-right text-[#5A4634] font-semibold text-sm whitespace-nowrap">{s.standard}</td>
              <td className="px-3 py-3 text-right text-[#5A4634] font-semibold text-sm whitespace-nowrap">{s.complex}</td>
              <td className="px-6 py-3 text-right text-[#5A4634] font-semibold text-sm whitespace-nowrap">{s.luxury}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="px-6 pb-4 pt-2 text-[#2F2F2F]/60 text-xs italic">{note}</p>
    </div>
  );
}
