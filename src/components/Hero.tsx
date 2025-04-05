
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const bundleUrl = 'https://sachinlord.gumroad.com/l/beord?wanted=true';

  return (
    <section 
      className={cn(
        'py-20 md:py-32 bg-gradient-to-b from-white to-gray-50',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4 animate-pulse">
              URGENT: OSHA COMPLIANCE ALERT
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Avoid <span className="text-red-600">$15,000 OSHA Fines</span> With Our Compliance Checklist
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Professional documentation designed to keep your electrical business compliant, protect your workers, and avoid costly violations.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white text-lg py-6 px-8 shadow-lg"
                onClick={() => window.open(bundleUrl, '_blank')}
              >
                Download Checklist Now
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-primary-700 rounded-full blur-lg opacity-70"></div>
              <div className="relative bg-white rounded-full p-8 shadow-xl">
                <div className="absolute -top-4 -right-4 bg-red-600 rounded-full p-3">
                  <AlertTriangle size={30} className="text-white" />
                </div>
                <Shield size={200} className="text-primary-700 fill-primary-100" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
