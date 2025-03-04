
import React from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, QrCode, ArrowRight } from 'lucide-react';

export function QrCodeExample() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Codice QR <span className="text-gradient">Scansionabile</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Scansiona questi codici QR per vedere i cataloghi digitali in azione direttamente sul tuo smartphone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass-card p-8 text-center flex flex-col items-center">
            <div className="mb-6">
              <QrCode className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Menu Ristorante</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Scansiona questo QR code per visualizzare un menu ristorante completo con descrizioni dettagliate, foto e possibilità di ordinare.
            </p>
            
            <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com/restaurant-menu" 
                alt="QR Code Menu Ristorante"
                className="w-52 h-52 mx-auto"
              />
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Inquadra il codice con la fotocamera del tuo smartphone
            </p>
            
            <Button variant="outline" className="flex items-center">
              <Smartphone className="h-4 w-4 mr-2" />
              Vedi anteprima
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          
          <div className="glass-card p-8 text-center flex flex-col items-center">
            <div className="mb-6">
              <QrCode className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Catalogo Prodotti</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Scansiona questo QR code per visualizzare un catalogo prodotti con funzionalità di realtà aumentata e visualizzazione 3D.
            </p>
            
            <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com/product-catalog" 
                alt="QR Code Catalogo Prodotti"
                className="w-52 h-52 mx-auto"
              />
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Inquadra il codice con la fotocamera del tuo smartphone
            </p>
            
            <Button variant="outline" className="flex items-center">
              <Smartphone className="h-4 w-4 mr-2" />
              Vedi anteprima
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Come funziona?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <span className="text-lg font-bold">1</span>
              </div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Genera QR</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                Crea facilmente codici QR dinamici per i tuoi cataloghi digitali
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <span className="text-lg font-bold">2</span>
              </div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Posiziona QR</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                Metti i QR code sui tuoi materiali stampati, prodotti o locali
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <span className="text-lg font-bold">3</span>
              </div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Esperienza digitale</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                I clienti accedono istantaneamente ai tuoi contenuti interattivi
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Button variant="cta" size="lg">
              Inizia con DigiCatalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
