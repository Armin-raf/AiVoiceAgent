
import React, { useEffect, useRef, useState } from 'react';

const Contact: React.FC = () => {
  const calendarRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Sicherstellen, dass das Attribut 'link' gesetzt ist, da React es sonst evtl. filtert
    if (calendarRef.current) {
      calendarRef.current.setAttribute('link', 'https://cal.meetergo.com/amin-rafai/30-min-meeting-or-amin-rafai');
    }

    // Skript dynamisch laden
    const script = document.createElement('script');
    script.src = "https://liv-showcase.s3.eu-central-1.amazonaws.com/browser-v3.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Aufräumen falls nötig (Skript entfernen)
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://hypobranchial-inez-nonmonogamous.ngrok-free.dev/webhook/a02a2d3c-7327-4845-a0ec-f649db17a272', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: window.location.href
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Webhook Error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-100" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Linke Seite: Infos & Kalender */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Bereit für die Zukunft der Telefonie?</h2>
            <p className="text-slate-600 text-lg">
              Lassen Sie uns gemeinsam analysieren, wie viel Zeit und Kosten Sie durch einen maßgeschneiderten KI-Voice Agent einsparen können. Unsere Lösungen sind sicher und 100% steuerbar für Inbound & Outbound.
            </p>
            
            <div className="space-y-6 mt-4">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-blue-50 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Anfrage senden</p>
                  <a href="mailto:herr.rafai@gmail.com" className="text-xl font-bold text-slate-900 hover:text-primary transition-colors">herr.rafai@gmail.com</a>
                </div>
              </div>
              
              {/* Meetergo Widget Container */}
              <div className="p-4 bg-white rounded-[2.5rem] border border-slate-200 mt-8 shadow-sm overflow-hidden min-h-[700px] flex flex-col">
                <div className="p-6">
                   <h4 className="text-xl font-bold text-slate-900 mb-2">Beratungsgespräch buchen</h4>
                   <p className="text-slate-500 text-sm mb-6">Wählen Sie einen passenden Termin für Ihr unverbindliches Erstgespräch.</p>
                </div>
                
                {/* meetergo widget container */}
                <div className="flex-1 w-full bg-slate-50/50 rounded-2xl overflow-hidden min-h-[600px]">
                   <div 
                     ref={calendarRef}
                     style={{ minWidth: '330px', minHeight: '600px', width: '100%' }} 
                     className="meetergo-iframe"
                   ></div>
                </div>
                
                <p className="text-center py-4 text-xs text-slate-400">Absolut kostenfrei. Volle Transparenz.</p>
              </div>
            </div>
          </div>

          {/* Rechte Seite: Schnellanfrage Formular */}
          <div className="lg:col-span-5 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 sticky top-32">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Schnellanfrage</h3>
              <p className="text-slate-500 text-sm">Sie haben eine spezifische Frage? Schreiben Sie uns direkt.</p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">E-Mail</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Anliegen</label>
                  <textarea 
                    rows={5}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                    placeholder="Wie können wir Ihnen helfen?"
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit"
                disabled={status === 'loading'}
                className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all shadow-lg ${
                  status === 'loading' 
                  ? 'bg-slate-400 cursor-not-allowed' 
                  : 'bg-slate-900 hover:bg-slate-800 shadow-slate-900/10 text-white'
                }`}
              >
                {status === 'loading' && <span className="animate-spin material-symbols-outlined !text-xl">progress_activity</span>}
                {status === 'success' ? 'Erfolgreich gesendet!' : status === 'loading' ? 'Wird gesendet...' : 'Anfrage absenden'}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-100 text-green-700 text-sm rounded-xl text-center animate-in fade-in slide-in-from-top-1">
                  Vielen Dank! Wir haben Ihre Nachricht erhalten und melden uns in Kürze.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-100 text-red-700 text-sm rounded-xl text-center">
                  Es gab ein Problem. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.
                </div>
              )}

              <p className="text-center text-xs text-slate-400">Ihre Daten sind sicher und werden DSGVO-konform behandelt.</p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
