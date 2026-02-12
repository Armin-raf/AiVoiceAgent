
import React from 'react';
import { Youtube, Linkedin } from 'lucide-react';

export type InfoModalType = 
  | 'impressum' | 'agb' | 'datenschutz' 
  | 'use-cases' | 'integrations' | 'process' 
  | 'compliance' | 'security-tech' | 'hosting';

interface FooterProps {
  onOpenInfo: (type: InfoModalType) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenInfo }) => {
  return (
    <footer className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        {/* Branding */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
            <span className="material-symbols-outlined text-primary !text-3xl">smart_toy</span>
            <h2 className="text-2xl font-bold tracking-tight text-white">Blue AI Voice Agent</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Spezialisierte Experten für Inbound & Outbound Telefonie-Automatisierung. Wir transformieren Ihren Kundenservice durch sichere KI-Sprachtechnologie.
          </p>
        </div>

        {/* Lösungen Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Angebot</h4>
          <button onClick={() => onOpenInfo('use-cases')} className="text-sm text-slate-400 hover:text-white transition-colors text-center md:text-left">Voice Agent Use-Cases</button>
          <button onClick={() => onOpenInfo('integrations')} className="text-sm text-slate-400 hover:text-white transition-colors text-center md:text-left">System-Integrationen</button>
          <button onClick={() => onOpenInfo('process')} className="text-sm text-slate-400 hover:text-white transition-colors text-center md:text-left">Implementierungs-Ablauf</button>
        </div>

        {/* Sicherheit Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Vertrauen</h4>
          <button onClick={() => onOpenInfo('compliance')} className="text-sm text-slate-400 hover:text-white transition-colors text-center md:text-left">Datenschutz & Compliance</button>
          <button onClick={() => onOpenInfo('security-tech')} className="text-sm text-slate-400 hover:text-white transition-colors text-center md:text-left">Sicherheits-Technologie</button>
          <button onClick={() => onOpenInfo('hosting')} className="text-sm text-slate-400 hover:text-white transition-colors text-center md:text-left">Hosting in Deutschland</button>
        </div>

        {/* Rechtliches */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Rechtliches</h4>
          <button onClick={() => onOpenInfo('impressum')} className="text-sm text-slate-400 hover:text-white transition-colors text-center md:text-left">Impressum</button>
          <button onClick={() => onOpenInfo('datenschutz')} className="text-sm text-slate-400 hover:text-white transition-colors text-center md:text-left">Datenschutz</button>
          <button onClick={() => onOpenInfo('agb')} className="text-sm text-slate-400 hover:text-white transition-colors text-center md:text-left">AGB</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-slate-500">
          © 2025 Blue Process | Amin Rafai
        </p>
        <div className="flex gap-8 items-center">
          <a 
            href="https://x.com/arminrafai?s=11&t=5DUIY9pDipmmQneUT3wHLQ" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-500 hover:text-white transition-all transform hover:scale-110"
            title="X (Twitter)"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>
          <a 
            href="https://www.youtube.com/@BlueProcess-i8f" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-500 hover:text-red-600 transition-all transform hover:scale-110"
            title="YouTube"
          >
            <Youtube className="size-5" />
          </a>
          <a 
            href="https://www.linkedin.com/company/blueprocess/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-500 hover:text-primary transition-all transform hover:scale-110"
            title="LinkedIn"
          >
            <Linkedin className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
