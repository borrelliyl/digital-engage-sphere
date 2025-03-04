
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  ShoppingBag, Ticket, Shirt, Utensils, 
  Building, GraduationCap, Palette, Book 
} from 'lucide-react';

interface ExampleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ExampleCard: React.FC<ExampleCardProps> = ({ title, description, icon, color }) => {
  return (
    <div className="glass-card p-6 hover:shadow-lg transition-shadow">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color} mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export function MoreExamples() {
  const examples = [
    {
      title: 'Retail',
      description: 'Cataloghi di prodotti interattivi con visualizzazione in realtà aumentata.',
      icon: <ShoppingBag className="h-6 w-6 text-white" />,
      color: 'bg-primary'
    },
    {
      title: 'Eventi',
      description: 'Brochure digitali per eventi con funzionalità di prenotazione integrata.',
      icon: <Ticket className="h-6 w-6 text-white" />,
      color: 'bg-accent'
    },
    {
      title: 'Moda',
      description: 'Lookbook digitali con funzionalità di "prova virtuale" e raccomandazioni personalizzate.',
      icon: <Shirt className="h-6 w-6 text-white" />,
      color: 'bg-primary'
    },
    {
      title: 'Ristorazione',
      description: 'Menu digitali interattivi con ordinazione e recensioni integrate.',
      icon: <Utensils className="h-6 w-6 text-white" />,
      color: 'bg-accent'
    },
    {
      title: 'Immobiliare',
      description: 'Tour virtuali di proprietà con visualizzazione planimetrie e prenotazione visite.',
      icon: <Building className="h-6 w-6 text-white" />,
      color: 'bg-primary'
    },
    {
      title: 'Educazione',
      description: 'Materiali didattici interattivi con quiz e tracciamento progressi.',
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      color: 'bg-accent'
    },
    {
      title: 'Arte e Musei',
      description: 'Guide interattive per mostre ed esposizioni con contenuti multimediali.',
      icon: <Palette className="h-6 w-6 text-white" />,
      color: 'bg-primary'
    },
    {
      title: 'Editoria',
      description: 'Cataloghi e magazine digitali con contenuti arricchiti e aggiornamenti automatici.',
      icon: <Book className="h-6 w-6 text-white" />,
      color: 'bg-accent'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Altri <span className="text-gradient">esempi di utilizzo</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            DigiCatalog può essere utilizzato in molteplici settori e con diverse finalità. Ecco altri esempi di applicazione.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((example, index) => (
            <ExampleCard
              key={index}
              title={example.title}
              description={example.description}
              icon={example.icon}
              color={example.color}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Non vedi il tuo settore? DigiCatalog è personalizzabile per qualsiasi tipo di business.
          </p>
          <Button variant="cta" size="lg">
            Contattaci per una soluzione personalizzata
          </Button>
        </div>
      </div>
    </section>
  );
}
