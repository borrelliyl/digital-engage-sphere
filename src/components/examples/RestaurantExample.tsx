
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Utensils, Coffee, Pizza, Wine, 
  Heart, ChevronLeft, ChevronRight, 
  Info, ShoppingCart
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  tags?: string[];
  featured?: boolean;
}

export function RestaurantExample() {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  
  const menuItems: MenuItem[] = [
    {
      id: "pizza-margherita",
      name: "Pizza Margherita",
      description: "Pomodoro, mozzarella, basilico e olio d'oliva",
      price: "9,50",
      image: "https://images.unsplash.com/photo-1604917877934-07d8d248d396",
      category: "pizze",
      featured: true
    },
    {
      id: "pizza-diavola",
      name: "Pizza Diavola",
      description: "Pomodoro, mozzarella, salame piccante e peperoncino",
      price: "11,50",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
      category: "pizze"
    },
    {
      id: "pasta-carbonara",
      name: "Spaghetti alla Carbonara",
      description: "Spaghetti con uova, pecorino, guanciale e pepe nero",
      price: "12,00",
      image: "https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9",
      category: "primi",
      featured: true
    },
    {
      id: "risotto-funghi",
      name: "Risotto ai Funghi",
      description: "Riso carnaroli con funghi porcini e parmigiano",
      price: "14,00",
      image: "https://images.unsplash.com/photo-1633964849772-789a1595fc4d",
      category: "primi"
    },
    {
      id: "tiramisu",
      name: "Tiramisù",
      description: "Classico tiramisù con savoiardi, caffè e mascarpone",
      price: "6,50",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea2756c",
      category: "dolci",
      featured: true
    },
    {
      id: "vino-rosso",
      name: "Chianti Classico",
      description: "Vino rosso toscano corposo e strutturato",
      price: "22,00",
      image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6",
      category: "bevande"
    }
  ];
  
  const selectedItem = menuItems.find(item => item.id === selectedItemId);
  
  // Filtra gli elementi per categoria
  const pizzas = menuItems.filter(item => item.category === "pizze");
  const firstCourses = menuItems.filter(item => item.category === "primi");
  const desserts = menuItems.filter(item => item.category === "dolci");
  const drinks = menuItems.filter(item => item.category === "bevande");

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Esempio: <span className="text-gradient">Menu Ristorante</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ecco come un ristorante può utilizzare DigiCatalog per creare un menu digitale interattivo.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="glass-card overflow-hidden p-4 sm:p-8 rounded-3xl">
            {/* Header del menu */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Trattoria La Rustica</h3>
                <p className="text-gray-600 dark:text-gray-300">Menu Digitale Interattivo</p>
              </div>
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <Button variant="outline" size="sm">
                  <Info className="h-4 w-4 mr-1" />
                  Info
                </Button>
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-1" />
                  Preferiti
                </Button>
                <Button variant="primary" size="sm">
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Ordina
                </Button>
              </div>
            </div>

            {/* Menu tabs */}
            <Tabs defaultValue="pizze">
              <TabsList className="mb-6 grid grid-cols-4 h-auto">
                <TabsTrigger value="pizze" className="flex flex-col items-center py-3 px-2 h-auto">
                  <Pizza className="h-5 w-5 mb-1" />
                  <span className="text-xs">Pizze</span>
                </TabsTrigger>
                <TabsTrigger value="primi" className="flex flex-col items-center py-3 px-2 h-auto">
                  <Utensils className="h-5 w-5 mb-1" />
                  <span className="text-xs">Primi</span>
                </TabsTrigger>
                <TabsTrigger value="dolci" className="flex flex-col items-center py-3 px-2 h-auto">
                  <Coffee className="h-5 w-5 mb-1" />
                  <span className="text-xs">Dolci</span>
                </TabsTrigger>
                <TabsTrigger value="bevande" className="flex flex-col items-center py-3 px-2 h-auto">
                  <Wine className="h-5 w-5 mb-1" />
                  <span className="text-xs">Bevande</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="pizze">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pizzas.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => setSelectedItemId(item.id)}
                    >
                      <div className="w-1/3 h-32 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                          <span className="font-bold text-primary">€{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                          {item.description}
                        </p>
                        {item.featured && (
                          <span className="mt-2 inline-block bg-accent/20 text-accent text-xs px-2 py-0.5 rounded-full">
                            Consigliato
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="primi">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {firstCourses.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => setSelectedItemId(item.id)}
                    >
                      <div className="w-1/3 h-32 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                          <span className="font-bold text-primary">€{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                          {item.description}
                        </p>
                        {item.featured && (
                          <span className="mt-2 inline-block bg-accent/20 text-accent text-xs px-2 py-0.5 rounded-full">
                            Consigliato
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="dolci">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {desserts.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => setSelectedItemId(item.id)}
                    >
                      <div className="w-1/3 h-32 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                          <span className="font-bold text-primary">€{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                          {item.description}
                        </p>
                        {item.featured && (
                          <span className="mt-2 inline-block bg-accent/20 text-accent text-xs px-2 py-0.5 rounded-full">
                            Consigliato
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="bevande">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {drinks.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => setSelectedItemId(item.id)}
                    >
                      <div className="w-1/3 h-32 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                          <span className="font-bold text-primary">€{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                          {item.description}
                        </p>
                        {item.featured && (
                          <span className="mt-2 inline-block bg-accent/20 text-accent text-xs px-2 py-0.5 rounded-full">
                            Consigliato
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Item detail modal */}
            {selectedItem && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white dark:bg-gray-800 max-w-lg w-full rounded-2xl overflow-hidden">
                  <div className="h-48 relative">
                    <img 
                      src={selectedItem.image} 
                      alt={selectedItem.name}
                      className="w-full h-full object-cover"
                    />
                    <button 
                      className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      onClick={() => setSelectedItemId(null)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedItem.name}</h3>
                      <span className="font-bold text-lg text-primary">€{selectedItem.price}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {selectedItem.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="outline" className="flex-1" onClick={() => setSelectedItemId(null)}>
                        Chiudi
                      </Button>
                      <Button className="flex-1">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Aggiungi all'ordine
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Questo è solo un esempio di come un ristorante può utilizzare DigiCatalog. Le possibilità sono infinite!
            </p>
            <Button variant="cta" size="lg">
              Crea il tuo menu digitale
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
