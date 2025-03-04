
import React from 'react';
import { Button } from '@/components/ui/button';

export function ExamplesHero() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Esempi
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Cataloghi digitali <span className="text-gradient">in azione</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Esplora esempi reali di come i nostri clienti utilizzano DigiCatalog per trasformare la loro attività.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="lg" className="w-full sm:w-auto">
              Prova gratis per 14 giorni
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Contattaci per una demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
