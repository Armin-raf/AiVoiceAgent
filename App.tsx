
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import Solutions from './components/Services';
import Security from './components/Security';
import Contact from './components/Contact';
import Footer, { InfoModalType } from './components/Footer';
import LegalModals from './components/LegalModals';
import { FlippingCard } from './components/ui/flipping-card';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeInfoModal, setActiveInfoModal] = useState<InfoModalType | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const processSteps = [
    { 
      step: '01', 
      title: 'Analyse', 
      desc: 'Inbound & Outbound Potential-Audit.',
      details: 'Wir analysieren Ihre Anrufvolumen und identifizieren die lohnendsten Use-Cases für eine sichere, automatisierte Telefonie.'
    },
    { 
      step: '02', 
      title: 'Design', 
      desc: 'Steuerbare Dialoglogik & Persona.',
      details: 'Wir entwerfen 100% steuerbare Dialogbäume, damit die KI exakt innerhalb Ihrer geschäftlichen Leitplanken agiert.'
    },
    { 
      step: '03', 
      title: 'Integration', 
      desc: 'Nahtlose Systemanbindung.',
      details: 'Technische Anbindung an Ihre Telefonanlage (SIP/VOIP) sowie Integration in Ihr CRM für einen fehlerfreien Datenaustausch.'
    },
    { 
      step: '04', 
      title: 'Go-Live', 
      desc: 'Sicherer Rollout & Optimierung.',
      details: 'Nach intensiven Tests erfolgt der produktive Einsatz. Wir überwachen die Performance für eine konstante Gesprächsqualität.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        {/* Mission Section (Problem & Solution) */}
        <section className="py-24 bg-white px-6" id="mission">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-primary mb-6 text-xs font-bold uppercase tracking-wider">Sicher & Effizient</div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Telefon-Service neu gedacht: <br />Inbound & Outbound KI.
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Manuelle Telefonie ist teuer, unflexibel und oft fehleranfällig. Lange Warteschleifen bei Inbound-Anfragen oder ineffiziente Outbound-Kampagnen bremsen Ihr Wachstum.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                <strong>Die Lösung: 100% steuerbare KI-Voice Agents.</strong> Unsere Systeme übernehmen Anrufe nicht nur passiv, sondern führen auch aktiv Gespräche – sicher innerhalb Ihrer Vorgaben. Keine "Black Box", sondern volle Kontrolle über jeden Dialogschritt, rund um die Uhr.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Outbound & Inbound', desc: 'Vollständige Abdeckung beider Kommunikationsrichtungen.' },
                { label: '100% Steuerbar', desc: 'Keine unvorhersehbaren Antworten durch feste Leitplanken.' },
                { label: 'Sichere Daten', desc: 'Maximale DSGVO-Sicherheit durch lokales Hosting (DE).' },
                { label: 'Skalierbarer ROI', desc: 'Senken Sie Kosten bei gleichzeitig steigender Qualität.' }
              ].map((card, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                  <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined !text-sm">security</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{card.label}</h4>
                  <p className="text-xs text-slate-500 leading-normal">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Integrations />
        <Solutions />

        {/* Why Us Section */}
        <section className="py-24 bg-slate-900 text-white px-6" id="why-us">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">Warum unsere Voice Agents?</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Spezialisierte B2B-Lösungen: Sicher, steuerbar und ergebnisorientiert.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Inbound & Outbound Power', desc: 'Egal ob Kundensupport oder proaktive Terminvereinbarung – unsere Agenten beherrschen beide Seiten der Telefonie.' },
                { title: '100% Prozess-Kontrolle', desc: 'Sie definieren die Regeln. Unsere KI-Agenten agieren als zuverlässige digitale Mitarbeiter innerhalb Ihrer Dialoglogik.' },
                { title: 'Sicherheits-Garantie', desc: 'Datenverarbeitung nach höchsten Standards. Hosting in Deutschland sorgt für absolute DSGVO-Konformität.' }
              ].map((sector, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold mb-4 text-white">{sector.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{sector.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Security />

        {/* Ablauf / Process Section */}
        <section className="py-24 bg-white px-6" id="process">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">So läuft die Implementierung ab</h2>
              <p className="text-slate-500 text-lg">In vier klaren Phasen zur produktiven und sicheren Sprach-Automatisierung.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((item, i) => (
                <FlippingCard
                  key={i}
                  height={220}
                  frontContent={
                    <div className="flex flex-col h-full w-full p-8 relative overflow-hidden">
                      <span className="text-6xl font-black text-primary/10 absolute top-4 right-6 select-none leading-none">
                        {item.step}
                      </span>
                      <h3 className="text-2xl font-bold mb-3 text-slate-900 relative z-10">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
                      <div className="mt-auto flex items-center gap-1.5 text-[10px] font-bold text-primary uppercase tracking-widest">
                        Details ansehen <span className="material-symbols-outlined !text-[12px]">flip</span>
                      </div>
                    </div>
                  }
                  backContent={
                    <div className="flex flex-col h-full w-full p-8 bg-primary justify-center">
                      <p className="text-sm font-medium leading-relaxed text-white text-center">
                        {item.details}
                      </p>
                      <div className="mt-6 flex justify-center">
                        <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                          Phase {item.step}
                        </div>
                      </div>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer onOpenInfo={(type) => setActiveInfoModal(type)} />
      
      <LegalModals 
        type={activeInfoModal} 
        onClose={() => setActiveInfoModal(null)} 
      />
    </div>
  );
};

export default App;
