
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTASection from '@/components/CTASection';
import SecurityBanner from '@/components/SecurityBanner';

const Index = () => {
  // Adding meta tags for security (these would normally be in server headers)
  React.useEffect(() => {
    // This would normally be done server-side but for demo purposes:
    document.title = "OSHAQuick - Security Compliance Made Simple";
    
    // Add meta description for SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'OSHAQuick provides secure, professional OSHA compliance solutions to help businesses maintain safety standards and protect their workforce.';
    document.head.appendChild(metaDescription);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <SecurityBanner />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
