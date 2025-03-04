
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  description: string;
  price: {
    monthly: string;
    yearly: string;
  };
  features: string[];
  cta: string;
  popular?: boolean;
}

export function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  const pricingTiers: PricingTier[] = [
    {
      name: 'Basic',
      description: 'Tutto il necessario per iniziare con i cataloghi digitali',
      price: {
        monthly: '19',
        yearly: '15',
      },
      features: [
        'QR Code dinamici illimitati',
        'Editor WYSIWYG base',
        'Fino a 3 cataloghi',
        'Supporto email',
        'Statistiche base',
        'Aggiornamenti in tempo reale',
      ],
      cta: 'Inizia gratis',
    },
    {
      name: 'Pro',
      description: 'Funzionalità avanzate per professionisti e PMI',
      price: {
        monthly: '49',
        yearly: '39',
      },
      features: [
        'Tutte le funzionalità Basic',
        'Cataloghi illimitati',
        'Realtà aumentata',
        'Prezzi dinamici',
        'Multi-lingua (fino a 5)',
        'Analytics avanzati',
        'Prenotazioni integrate',
        'Supporto prioritario',
      ],
      cta: 'Inizia con Pro',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Soluzioni personalizzate per grandi aziende',
      price: {
        monthly: '99',
        yearly: '79',
      },
      features: [
        'Tutte le funzionalità Pro',
        'Multi-lingua illimitato',
        'API complete',
        'Integrazioni IoT',
        'White label',
        'Gamification',
        'Account manager dedicato',
        'SLA garantito',
        'Formazione personalizzata',
      ],
      cta: 'Contattaci',
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Prezzi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Scegli il piano <span className="text-gradient">perfetto per te</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Offriamo piani flessibili per soddisfare le esigenze di qualsiasi attività, dalla piccola impresa alla grande azienda.
          </p>
          
          <div className="flex items-center justify-center mt-8 mb-12">
            <span className={`mr-3 text-sm ${billingCycle === 'monthly' ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500'}`}>
              Mensile
            </span>
            <button
              type="button"
              className={`relative inline-flex h-6 w-11 items-center rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                billingCycle === 'yearly' ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
              }`}
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 flex items-center text-sm ${billingCycle === 'yearly' ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500'}`}>
              Annuale
              <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-800/30 dark:text-green-400">
                Risparmio 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${
                tier.popular
                  ? 'border-2 border-accent dark:border-accent shadow-xl'
                  : 'border border-gray-200 dark:border-gray-800 shadow-md'
              } p-8 flex flex-col h-full transition-transform hover:scale-[1.02] duration-300`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-white text-xs font-bold uppercase py-1 px-4 rounded-full">
                  Più popolare
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{tier.name}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">{tier.description}</p>
              
              <div className="mt-6 mb-6">
                <div className="flex items-end">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">€{billingCycle === 'monthly' ? tier.price.monthly : tier.price.yearly}</span>
                  <span className="text-base ml-1 mb-1 text-gray-600 dark:text-gray-400">/mese</span>
                </div>
                {billingCycle === 'yearly' && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Fatturato annualmente (€{Number(tier.price.yearly) * 12}/anno)
                  </p>
                )}
              </div>
              
              <ul className="mt-4 space-y-3 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Button
                  variant={tier.popular ? 'cta' : (tier.name === 'Basic' ? 'default' : 'outline')}
                  className={`w-full rounded-lg`}
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
