
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Legal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Legal Information</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Last updated: April 5, 2025</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">1. Introduction</h3>
                <p>
                  Welcome to OSHAQuick ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">2. Information We Collect</h3>
                <p>
                  <strong>Personal Data:</strong> We may collect personal identification information, including but not limited to your name, email address, phone number, and company information when you voluntarily submit such information.
                </p>
                <p>
                  <strong>Usage Data:</strong> We may collect information on how the Service is accessed and used. This may include your computer's IP address, browser type, pages visited, time spent on pages, and other diagnostic data.
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">3. GDPR Compliance</h3>
                <p>
                  For users in the European Economic Area (EEA), we process your personal data based on legitimate interests, and we will only use your personal data as described in this Privacy Policy. You have the right to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Withdraw consent</li>
                </ul>
                
                <h3 className="text-xl font-bold mt-6 mb-3">4. Use of Data</h3>
                <p>We use collected data for various purposes:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information to improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
                
                <h3 className="text-xl font-bold mt-6 mb-3">5. Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at privacy@oshaquick.com.
                </p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">Last updated: April 5, 2025</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">1. Agreement to Terms</h3>
                <p>
                  By accessing or using our website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">2. Use License</h3>
                <p>
                  Permission is granted to temporarily download one copy of the materials on OSHAQuick's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">3. Disclaimer</h3>
                <p>
                  The materials on OSHAQuick's website are provided on an 'as is' basis. OSHAQuick makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">4. Limitations</h3>
                <p>
                  In no event shall OSHAQuick or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on OSHAQuick's website.
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">5. Governing Law</h3>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Legal;
