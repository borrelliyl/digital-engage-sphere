
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FeatureVideos } from '@/components/features/FeatureVideos';
import { FeatureHero } from '@/components/features/FeatureHero';
import { FeatureDetails } from '@/components/features/FeatureDetails';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <FeatureHero />
        <FeatureVideos />
        <FeatureDetails />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
