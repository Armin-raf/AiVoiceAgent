
import React from 'react';
import { InfoModalType } from './Footer';

interface LegalModalProps {
  type: InfoModalType | null;
  onClose: () => void;
}

const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const content = {
    impressum: (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">Impressum</h2>
        <div className="space-y-6 text-slate-600">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Angaben gemäß § 5 TMG</p>
            <p className="font-bold text-slate-900 text-lg">Amin Rafai | Blue Process</p>
            <p>Annenstraße 29</p>
            <p>31134 Hildesheim, Deutschland</p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Kontakt</p>
            <p className="flex items-center gap-2"><span className="font-medium text-slate-900 w-20">Telefon:</span><span>+49 176 4334 7838</span></p>
            <p className="flex items-center gap-2"><span className="font-medium text-slate-900 w-20">E-Mail:</span><a href="mailto:herr.rafai@gmail.com" className="text-primary hover:underline">herr.rafai@gmail.com</a></p>
          </div>
        </div>
      </div>
    ),
    agb: (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Allgemeine Geschäftsbedingungen</h2>
        <div className="space-y-4 text-slate-600 overflow-y-auto max-h-[60vh] pr-4">
          <p>Diese AGB regeln die Zusammenarbeit zwischen Blue Process und seinen gewerblichen Kunden...</p>
          <h3 className="font-bold text-slate-900">§ 1 Leistungen</h3>
          <p>Blue Process bietet die Konzeption, Implementierung und Wartung von KI-gestützten Voice-Agents an.</p>
        </div>
      </div>
    ),
    datenschutz: (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Datenschutzerklärung</h2>
        <div className="space-y-4 text-slate-600 overflow-y-auto max-h-[60vh] pr-4">
          <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst...</p>
          <h3 className="font-bold text-slate-900">1. Verantwortliche Stelle</h3>
          <p>Amin Rafai, Annenstraße 29, 31134 Hildesheim.</p>
        </div>
      </div>
    ),
    'use-cases': (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Voice Agent Use-Cases</h2>
        <div className="space-y-6 text-slate-600">
          <p>Unsere KI-Agenten decken eine breite Palette an Szenarien ab:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-2xl">
              <h4 className="font-bold text-slate-900 mb-1">Inbound Support</h4>
              <p className="text-sm text-slate-500">Sofortige Beantwortung von FAQ, Bestellstatus-Abfragen und Ticket-Erstellung ohne Wartezeit.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl">
              <h4 className="font-bold text-slate-900 mb-1">Outbound Sales</h4>
              <p className="text-sm text-slate-500">Qualifizierung von Leads, Terminvereinbarungen und proaktive Kundenrückrufe.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl">
              <h4 className="font-bold text-slate-900 mb-1">Termin-Bot</h4>
              <p className="text-sm text-slate-500">Vollautomatisierte Buchung, Umbuchung und Stornierung von Terminen direkt am Telefon.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl">
              <h4 className="font-bold text-slate-900 mb-1">Eskalations-Management</h4>
              <p className="text-sm text-slate-500">Intelligente Erkennung von Notfällen und direkte Weiterleitung an menschliche Experten.</p>
            </div>
          </div>
        </div>
      </div>
    ),
    'integrations': (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">System-Integrationen</h2>
        <div className="space-y-4 text-slate-600">
          <p>Ein Voice Agent ist nur so gut wie die Daten, auf die er zugreifen kann. Wir integrieren unsere Lösung nahtlos in Ihren Stack:</p>
          <ul className="space-y-3">
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-primary">hub</span>
              <div><span className="font-bold text-slate-900">CRM & ERP:</span> Salesforce, HubSpot, SAP, Odoo.</div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-primary">call</span>
              <div><span className="font-bold text-slate-900">Telefonanlagen:</span> 3CX, Asterisk, Placetel, Microsoft Teams Voice.</div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-primary">data_object</span>
              <div><span className="font-bold text-slate-900">API First:</span> Individuelle Anbindung über n8n, Make oder eigene Webhooks.</div>
            </li>
          </ul>
        </div>
      </div>
    ),
    'process': (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Implementierungs-Ablauf</h2>
        <div className="relative pl-8 border-l-2 border-slate-100 space-y-8">
          {[
            { step: '1', title: 'Strategie-Workshop', text: 'Analyse Ihrer aktuellen Prozesse und Definition der KPIs.' },
            { step: '2', title: 'Persona Design', text: 'Festlegung von Stimme, Tonalität und Dialogleitplanken.' },
            { step: '3', title: 'Technische Kopplung', text: 'Integration in Telefonie und CRM-Systeme.' },
            { step: '4', title: 'Beta & Optimierung', text: 'Testlauf mit Real-Daten und Feinjustierung der KI-Logik.' }
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[41px] top-0 size-8 rounded-full bg-white border-2 border-primary flex items-center justify-center font-bold text-primary text-sm">
                {item.step}
              </div>
              <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
              <p className="text-sm text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    'compliance': (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Datenschutz & Compliance</h2>
        <div className="space-y-4 text-slate-600">
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined">verified_user</span>
              DSGVO als Standard
            </h4>
            <p className="text-sm leading-relaxed">Unsere Systeme sind "Privacy by Design" konzipiert. Wir nutzen Anonymisierungstechniken, bevor Daten verarbeitet werden, und garantieren eine rechtssichere Auftragsdatenverarbeitung (AVV).</p>
          </div>
          <p>Wir arbeiten eng mit Ihren Datenschutzbeauftragten zusammen, um sicherzustellen, dass jeder Aspekt – von der Gesprächsaufzeichnung bis zur Datenspeicherung – den höchsten europäischen Standards entspricht.</p>
        </div>
      </div>
    ),
    'security-tech': (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Sicherheits-Technologie</h2>
        <div className="space-y-4 text-slate-600">
          <p>Wir setzen auf einen mehrstufigen Sicherheits-Stack:</p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="font-bold text-slate-900 min-w-[120px]">Verschlüsselung:</span>
              <span>TLS 1.3 für alle Datenübertragungen und AES-256 für ruhende Daten.</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-slate-900 min-w-[120px]">KI-Guardrails:</span>
              <span>Proprietäre Filtermechanismen verhindern "Halluzinationen" und stellen sicher, dass die KI niemals unautorisierte Informationen teilt.</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-slate-900 min-w-[120px]">Zero Retention:</span>
              <span>Optionale Konfiguration, bei der keine Gesprächsdaten nach der Prozessierung gespeichert werden.</span>
            </div>
          </div>
        </div>
      </div>
    ),
    'hosting': (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Hosting in Deutschland</h2>
        <div className="space-y-4 text-slate-600">
          <p>Ihre Daten verlassen niemals den deutschen Rechtsraum, sofern nicht anders vereinbart.</p>
          <ul className="space-y-4">
            <li className="p-4 bg-slate-50 rounded-2xl flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">dns</span>
              <div>
                <h5 className="font-bold text-slate-900">Hetzner Data Centers</h5>
                <p className="text-sm text-slate-500">Hosting in Frankfurt am Main und Falkenstein. ISO 27001 zertifiziert und 100% Ökostrom.</p>
              </div>
            </li>
            <li className="p-4 bg-slate-50 rounded-2xl flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">security</span>
              <div>
                <h5 className="font-bold text-slate-900">Physische Sicherheit</h5>
                <p className="text-sm text-slate-500">Zutrittskontrollen, 24/7 Überwachung und redundante Anbindungen garantieren 99,9% Verfügbarkeit.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    ),
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-3xl rounded-[2.5rem] shadow-2xl relative p-6 md:p-12 animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 size-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors z-20"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <div className="overflow-y-auto flex-1 pr-2 custom-scrollbar">
          {content[type]}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-primary/20"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModals;
