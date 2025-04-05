
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SecurityBanner from '@/components/SecurityBanner';
import ProductsSection from '@/components/ProductsSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  React.useEffect(() => {
    document.title = "OSHAQuick - Avoid $15,000 OSHA Fines Today";
    
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Download our professional OSHA compliance checklist to avoid costly fines and keep your electrical business safe and compliant.';
    document.head.appendChild(metaDescription);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <ProductsSection />
        <CTASection />
        <SecurityBanner />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
