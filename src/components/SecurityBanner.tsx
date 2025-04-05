
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, AlertTriangle } from 'lucide-react';

const SecurityBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Why Electricians Trust Our OSHA Compliance Tools
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="text-primary-700" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Complete Protection</h3>
            <p className="text-gray-600">
              Our comprehensive checklist covers all OSHA requirements for electrical contractors, reducing your risk of violations.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle className="text-red-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Avoid Costly Fines</h3>
            <p className="text-gray-600">
              OSHA violations can cost up to $15,000 per instance. Our documentation helps you stay compliant and avoid these penalties.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
              <FileText className="text-secondary-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Professional Documentation</h3>
            <p className="text-gray-600">
              Instantly download professionally crafted documentation that demonstrates your commitment to workplace safety.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecurityBanner;
