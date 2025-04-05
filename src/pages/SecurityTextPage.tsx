
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SecurityTxt from '@/components/SecurityTxt';

const SecurityTextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Security.txt</h1>
            <p className="mb-6 text-gray-600">
              In accordance with RFC 9116, this file contains security policy and contact information.
            </p>
            
            <SecurityTxt />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityTextPage;
