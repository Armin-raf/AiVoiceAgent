
import React from 'react';
import HighlightCard from './ui/highlight-card';
import { PhoneCall, CalendarCheck, HelpCircle, ArrowRightLeft } from 'lucide-react';

const Solutions: React.FC = () => {
  const items = [
    {
      icon: <PhoneCall className="w-8 h-8 text-white" />,
      title: 'Vorqualifizierung',
      description: [
        'Annahme von Inbound-Calls,',
        'Abfrage von Kundendaten,',
        'Intelligente Anliegen-Prüfung'
      ],
      link: '#contact'
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-white" />,
      title: 'Termin-Management',
      description: [
        'Vollautonome Buchungen,',
        'Abgleich mit Kalendern,',
        'Stornierung & Umbuchung'
      ],
      link: '#contact'
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-white" />,
      title: 'Automatisierter Support',
      description: [
        'Lösung von FAQ-Anfragen,',
        'Statusabfragen (z.B. Versand),',
        'Soforthilfe ohne Wartezeit'
      ],
      link: '#contact'
    },
    {
      icon: <ArrowRightLeft className="w-8 h-8 text-white" />,
      title: 'Smarte Weiterleitung',
      description: [
        'Übergabe an Experten,',
        'Kontext-Transfer (Briefing),',
        'Priorisierung von Notfällen'
      ],
      link: '#contact'
    },
  ];

  return (
    <section className="py-24 bg-white px-6 border-y border-slate-100" id="solutions">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-primary mb-6 text-xs font-bold uppercase tracking-wider">Was wir übernehmen</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">KI-Voice Agents im Einsatz</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Entlasten Sie Ihr Team durch spezialisierte KI-Telefonie. Ein <span className="text-primary font-bold">kostenloses</span> Erstgespräch klärt Ihre Potenziale sofort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <HighlightCard 
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
            Jetzt Termin buchen
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
