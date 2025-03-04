
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PricingPlans } from '@/components/pricing/PricingPlans';
import { PricingFAQ } from '@/components/pricing/PricingFAQ';
import { CreditsSection } from '@/components/pricing/CreditsSection';

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <PricingPlans />
        <CreditsSection />
        <PricingFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
