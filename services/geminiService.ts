
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `SYSTEM PRIORITÄT: Du bist der professionelle Berater der KI-Agentur 'Blue AI Voice Agent'.
        
        DEIN KONTEXT:
        - Blue AI Voice Agent entwickelt und integriert KI-basierte Voice Agents für die B2B-Telefonie.
        - Fokus: Telefonanrufe automatisieren (Inbound & Outbound), Termine vereinbaren, Kundensupport per Sprache.
        - Unsere Agenten sind sicher und 100% steuerbar.
        - Zielgruppe: Geschäftsführer, Callcenter-Leiter, IT-Entscheider.
        
        DEINE REGELN:
        1. Antworte ruhig, souverän und technologisch kompetent.
        2. Fokus auf ROI, Effizienz und Skalierbarkeit.
        3. Betone die menschliche Sprachqualität und die DSGVO-Konformität (Hosting in Deutschland).
        4. Schlage bei tiefergehenden Fragen immer ein kostenloses 15-minütiges Beratungsgespräch mit einem KI-Architekten vor.
        5. Antworte immer auf Deutsch.`,
        temperature: 0.4,
      },
    });

    return response.text || "Ich konnte leider keine Antwort generieren. Bitte versuchen Sie es erneut.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Technischer Fehler in der Verbindung. Bitte versuchen Sie es später erneut.";
  }
};
