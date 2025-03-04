
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ExamplesHero } from '@/components/examples/ExamplesHero';
import { RestaurantExample } from '@/components/examples/RestaurantExample';
import { QrCodeExample } from '@/components/examples/QrCodeExample';
import { MoreExamples } from '@/components/examples/MoreExamples';

const Examples = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <ExamplesHero />
        <RestaurantExample />
        <QrCodeExample />
        <MoreExamples />
      </main>
      <Footer />
    </div>
  );
};

export default Examples;
