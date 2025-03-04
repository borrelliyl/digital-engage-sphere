
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FeatureHero() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Tutte le Funzionalità
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Trasforma il tuo <span className="text-gradient">catalogo statico</span> in un'esperienza interattiva
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Scopri tutte le funzionalità avanzate che rendono DigiCatalog la soluzione più completa per la tua attività.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Inizia la tua prova gratuita
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto group">
              Richiedi una demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
