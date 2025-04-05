
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import SecurityBanner from '@/components/SecurityBanner';

const Index = () => {
  // Adding meta tags for security (these would normally be in server headers)
  React.useEffect(() => {
    // This would normally be done server-side but for demo purposes:
    document.title = "OSHAQuick - Electrical Safety Compliance Documents";
    
    // Add meta description for SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Professional OSHA compliance documentation for electricians. Get our compliance checklist, violation report, and training documents to keep your electrical business safe and compliant.';
    document.head.appendChild(metaDescription);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <ProductsSection />
        <Testimonials />
        <FAQ />
        <SecurityBanner />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
