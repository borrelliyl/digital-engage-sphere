
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, Zap, PlusCircle, MinusCircle } from 'lucide-react';

interface CreditPack {
  id: number;
  name: string;
  credits: number;
  price: number;
  discountPercentage?: number;
  popular?: boolean;
}

export function CreditsSection() {
  const [selectedPack, setSelectedPack] = useState<number>(2);
  const [quantity, setQuantity] = useState<number>(1);

  const creditPacks: CreditPack[] = [
    {
      id: 1,
      name: 'Starter',
      credits: 100,
      price: 19,
    },
    {
      id: 2,
      name: 'Pro',
      credits: 500,
      price: 89,
      discountPercentage: 10,
      popular: true,
    },
    {
      id: 3,
      name: 'Premium',
      credits: 1000,
      price: 159,
      discountPercentage: 20,
    },
    {
      id: 4,
      name: 'Enterprise',
      credits: 5000,
      price: 699,
      discountPercentage: 30,
    },
  ];

  const selectedPackData = creditPacks.find(pack => pack.id === selectedPack) || creditPacks[0];
  
  const totalCredits = selectedPackData.credits * quantity;
  const totalPrice = selectedPackData.price * quantity;
  
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Crediti
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Acquista <span className="text-gradient">crediti extra</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Acquista pacchetti di crediti da utilizzare per funzionalità avanzate e servizi premium.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Scegli il pacchetto</h3>
              
              <div className="space-y-4">
                {creditPacks.map((pack) => (
                  <div 
                    key={pack.id}
                    className={`border p-4 rounded-xl cursor-pointer transition-all ${
                      pack.id === selectedPack 
                        ? 'border-primary bg-primary/5 dark:bg-primary/10' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedPack(pack.id)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-medium text-gray-900 dark:text-white">{pack.name}</h4>
                          {pack.popular && (
                            <span className="ml-2 bg-accent/20 text-accent text-xs px-2 py-0.5 rounded-full">
                              Più popolare
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {pack.credits} crediti
                          {pack.discountPercentage && (
                            <span className="ml-2 text-accent">(-{pack.discountPercentage}%)</span>
                          )}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900 dark:text-white">€{pack.price}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {(pack.price / pack.credits).toFixed(2)}€ per credito
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Quantità</h3>
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    <MinusCircle className="h-4 w-4" />
                  </Button>
                  <span className="text-xl font-semibold text-gray-900 dark:text-white">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={increaseQuantity}
                  >
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Riepilogo ordine</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Pacchetto</span>
                  <span className="font-medium text-gray-900 dark:text-white">{selectedPackData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Crediti per pacchetto</span>
                  <span className="font-medium text-gray-900 dark:text-white">{selectedPackData.credits}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Quantità</span>
                  <span className="font-medium text-gray-900 dark:text-white">{quantity}</span>
                </div>
                {selectedPackData.discountPercentage && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Sconto</span>
                    <span className="font-medium text-accent">-{selectedPackData.discountPercentage}%</span>
                  </div>
                )}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 dark:text-gray-300">Totale crediti</span>
                  <span className="font-semibold text-lg text-gray-900 dark:text-white flex items-center">
                    <Zap className="h-4 w-4 mr-1 text-primary" />
                    {totalCredits} crediti
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Totale</span>
                  <span className="font-bold text-2xl text-gray-900 dark:text-white">€{totalPrice}</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  variant="cta" 
                  className="w-full h-12"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Acquista ora
                </Button>
                <p className="text-xs text-center mt-4 text-gray-500 dark:text-gray-400">
                  I crediti non scadono mai e possono essere utilizzati in qualsiasi momento.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">A cosa servono i crediti?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <div className="mb-4 text-primary">
                <Smartphone className="h-10 w-10" />
              </div>
              <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Modelli AR avanzati</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Converti i tuoi prodotti in modelli 3D interattivi per la realtà aumentata.
              </p>
              <p className="text-primary mt-2 font-medium">50-100 crediti per modello</p>
            </div>
            
            <div className="glass-card p-6">
              <div className="mb-4 text-primary">
                <Globe className="h-10 w-10" />
              </div>
              <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Traduzioni premium</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Traduzioni professionali per cataloghi multilingua oltre quelle automatiche.
              </p>
              <p className="text-primary mt-2 font-medium">1 credito per 100 parole</p>
            </div>
            
            <div className="glass-card p-6">
              <div className="mb-4 text-primary">
                <LineChart className="h-10 w-10" />
              </div>
              <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Report personalizzati</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Report dettagliati e personalizzati sull'engagement e le conversioni.
              </p>
              <p className="text-primary mt-2 font-medium">20 crediti per report</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
