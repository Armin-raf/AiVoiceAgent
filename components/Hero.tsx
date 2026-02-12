
import React from 'react';
import Hyperspeed from './Hyperspeed';

const HYPERSPEED_OPTIONS = {
  onSpeedUp: () => {},
  onSlowDown: () => {},
  "distortion": "turbulentDistortion",
  "length": 400,
  "roadWidth": 10,
  "islandWidth": 2,
  "lanesPerRoad": 3,
  "fov": 90,
  "fovSpeedUp": 150,
  "speedUp": 2,
  "carLightsFade": 0.4,
  "totalSideLightSticks": 20,
  "lightPairsPerRoadWay": 40,
  "shoulderLinesWidthPercentage": 0.05,
  "brokenLinesWidthPercentage": 0.1,
  "brokenLinesLengthPercentage": 0.5,
  "lightStickWidth": [0.12, 0.5],
  "lightStickHeight": [1.3, 1.7],
  "movingAwaySpeed": [60, 80],
  "movingCloserSpeed": [-120, -160],
  "carLightsLength": [12, 80],
  "carLightsRadius": [0.05, 0.14],
  "carWidthPercentage": [0.3, 0.5],
  "carShiftX": [-0.8, 0.8],
  "carFloorSeparation": [0, 5],
  "colors": {
    "roadColor": 0x080808,
    "islandColor": 0x0a0a0a,
    "background": 0x000000,
    "shoulderLines": 0x131318,
    "brokenLines": 0x131318,
    "leftCars": [0xbf00ff, 0xff00ff, 0x4d00ff], // Electric Neon Purple/Magenta
    "rightCars": [0x39ff14, 0x00ff00, 0x7fff00], // Electric Neon Green/Lime
    "sticks": 0x00f7ff // Electric Cyan for side sticks
  }
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden bg-black" id="home">
      <div className="absolute inset-0 z-0">
        <Hyperspeed effectOptions={HYPERSPEED_OPTIONS} />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-space/60 via-transparent to-dark-space/90"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 py-32 text-center lg:text-left">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-10 xl:col-span-9 flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 text-blue-300 w-fit mx-auto lg:mx-0">
              <span className="material-symbols-outlined !text-sm">record_voice_over</span>
              <span className="text-xs font-bold uppercase tracking-widest">Inbound & Outbound Automatisierung</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white text-glow">
              Ihre Telefonie auf Autopilot: <br />
              <span className="text-primary">Sicher & 100% steuerbare</span> KI-Voice Agents.
            </h1>
            
            <p className="text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              Automatisieren Sie Inbound-Anfragen und führen Sie aktive Outbound-Gespräche – natürlich klingend, absolut sicher und vollkommen integriert. Skalieren Sie Ihren Service ohne steigende Personalkosten.
            </p>

            <div className="flex flex-wrap gap-4 pt-6 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all flex items-center gap-3 shadow-2xl shadow-primary/40"
              >
                Beratungsgespräch buchen
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a 
                href="#solutions" 
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all"
              >
                Anwendungsfälle
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-8 mt-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-white/60 text-sm font-medium">
                <span className="material-symbols-outlined text-primary !text-lg">verified</span>
                Sicher & DSGVO-Konform
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm font-medium">
                <span className="material-symbols-outlined text-primary !text-lg">tune</span>
                100% Steuerbar
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm font-medium">
                <span className="material-symbols-outlined text-primary !text-lg">call</span>
                Inbound & Outbound
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
