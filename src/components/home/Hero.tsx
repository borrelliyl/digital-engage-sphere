
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, QrCode, Globe, Clock } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden pt-[120px] pb-16 sm:pb-24 lg:pb-32 lg:pt-[144px]">
      {/* Background decorative elements */}
      <div className="hidden lg:block absolute right-[-10%] top-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="hidden lg:block absolute left-[-10%] bottom-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto lg:mx-0 lg:col-span-6 lg:text-left lg:flex lg:flex-col lg:justify-center">
            <div>
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
                Novità
                <span className="ml-2 h-1.5 w-1.5 rounded-full bg-accent"></span>
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Cataloghi digitali{' '}
              <span className="text-gradient">interattivi</span>{' '}
              per la tua attività
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Trasforma il tuo catalogo in un'esperienza digitale coinvolgente. Aumenta l'engagement e le conversioni con funzionalità avanzate di presentazione e interazione.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Button variant="cta" size="lg" className="rounded-full px-8">
                Prova gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Scopri di più
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-6">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <QrCode className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">QR Code Dinamici</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center lg:text-left">Aggiorna contenuti in tempo reale</p>
              </div>
              
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Multi-lingua</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center lg:text-left">Raggiungi clienti internazionali</p>
              </div>
              
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Prezzi Dinamici</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center lg:text-left">Cambia prezzi in base a orari e target</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
            <div className="bg-white dark:bg-gray-800 sm:mx-auto sm:w-full sm:overflow-hidden sm:rounded-2xl shadow-xl ring-1 ring-gray-900/10 dark:ring-white/10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
                <img
                  src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=2070&auto=format&fit=crop"
                  alt="Catalogo interattivo su tablet"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-800 to-transparent opacity-30"></div>
              </div>
              <div className="px-6 py-8">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-1 flex flex-col">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">87%</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Aumento engagement</span>
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">56%</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Incremento vendite</span>
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">92%</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Clienti soddisfatti</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
