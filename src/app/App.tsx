import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Booking } from './components/Booking';
import { About } from './components/About';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'de' | 'uk' | 'fr' | 'es' | 'ru' | 'it'>('en');

  return (
    <div
      className="min-h-screen bg-[#D6D2CC] relative overflow-x-hidden"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1694533483509-f743b0f18619?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9vdGglMjBjb25jcmV0ZSUyMHBsYXN0ZXIlMjB3YWxsJTIwbmV1dHJhbHxlbnwxfHx8fDE3NzQyMDEwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Semi-transparent overlay for subtle texture */}
      <div className="absolute inset-0 bg-[#D6D2CC]/85 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-black/15" />
      
      <div className="relative z-10 w-full overflow-x-hidden">
        <Header language={language} onLanguageChange={setLanguage} />
        <Hero language={language} />
        <Services language={language} />
        <Booking language={language} />
        <About language={language} />
        <Location language={language} />
        <Footer language={language} onLanguageChange={setLanguage} />
      </div>
    </div>
  );
}