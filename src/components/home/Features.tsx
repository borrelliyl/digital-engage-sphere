import React from 'react';
import { 
  Smartphone, QrCode, PenTool, Globe, Clock, LineChart, 
  Accessibility, CalendarClock, Zap, 
  SunMoon, BellRing, Navigation 
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isNew?: boolean;
  accentColor?: 'primary' | 'accent';
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, isNew, accentColor = 'primary' }) => {
  return (
    <div className="glass-card p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group">
      <div className="flex items-center space-x-4 mb-4">
        <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-${accentColor}/10 text-${accentColor} group-hover:bg-${accentColor} group-hover:text-white transition-colors`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          {title}
          {isNew && (
            <span className={`ml-2 inline-flex items-center rounded-full bg-accent/20 px-2 py-1 text-xs font-medium text-accent`}>
              Nuovo
            </span>
          )}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export function Features() {
  const features = [
    {
      icon: <QrCode />,
      title: "QR Code Dinamici",
      description: "Genera QR code che puntano sempre ai contenuti aggiornati, modificabili in tempo reale.",
      accentColor: "primary"
    },
    {
      icon: <PenTool />,
      title: "Editor WYSIWYG",
      description: "Crea e modifica i tuoi contenuti con un editor intuitivo, senza bisogno di competenze tecniche.",
      accentColor: "accent"
    },
    {
      icon: <Smartphone />,
      title: "Realtà Aumentata",
      description: "Permetti ai clienti di visualizzare i prodotti in AR direttamente dal loro dispositivo.",
      isNew: true,
      accentColor: "primary"
    },
    {
      icon: <CalendarClock />,
      title: "Prenotazioni Integrate",
      description: "Sistema di prenotazioni e appuntamenti integrato con sincronizzazione calendario.",
      isNew: true,
      accentColor: "accent"
    },
    {
      icon: <Clock />,
      title: "Prezzi Dinamici",
      description: "Modifica automaticamente i prezzi in base a orari, giorno della settimana o fasce d'età.",
      isNew: true,
      accentColor: "primary"
    },
    {
      icon: <Globe />,
      title: "Multi-lingua",
      description: "Traduci automaticamente i tuoi contenuti in più lingue per raggiungere clienti internazionali.",
      isNew: true,
      accentColor: "accent"
    },
    {
      icon: <LineChart />,
      title: "Analytics Avanzati",
      description: "Analizza il comportamento degli utenti con heatmap e metriche dettagliate di engagement.",
      isNew: true,
      accentColor: "primary"
    },
    {
      icon: <Zap />,
      title: "Integrazione IoT",
      description: "Collega il tuo catalogo ai sistemi POS per aggiornamenti automatici in tempo reale.",
      isNew: true,
      accentColor: "accent"
    },
    {
      icon: <Accessibility />,
      title: "Gamification",
      description: "Implementa programmi fedeltà digitali per incentivare l'engagement e le conversioni.",
      isNew: true,
      accentColor: "primary"
    },
    {
      icon: <SunMoon />,
      title: "Tema Automatico",
      description: "Passa automaticamente da modalità chiara a scura in base all'ora o alle preferenze dell'utente.",
      isNew: true,
      accentColor: "accent"
    },
    {
      icon: <BellRing />,
      title: "Notifiche Push",
      description: "Invia notifiche push per promozioni flash e offerte limitate direttamente ai dispositivi.",
      isNew: true,
      accentColor: "primary"
    },
    {
      icon: <Navigation />,
      title: "Geofencing",
      description: "Attiva contenuti specifici quando i clienti si trovano in determinate aree geografiche.",
      isNew: true,
      accentColor: "accent"
    }
  ];

  return (
    <section id="features" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Funzionalità
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Tutto ciò che serve per i tuoi <span className="text-gradient">cataloghi digitali</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Scopri le potenti funzionalità che trasformano un semplice catalogo in un'esperienza interattiva coinvolgente e orientata alla conversione.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isNew={feature.isNew}
              accentColor={index % 2 === 0 ? 'primary' : 'accent'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
