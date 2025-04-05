
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className }: CTASectionProps) => {
  const handleBundlePurchase = () => {
    // This would connect to your payment processor
    console.log("Purchasing bundle");
    alert("This would take you to checkout for the complete bundle");
  };

  return (
    <section className={cn(
      'bg-gradient-to-r from-primary-700 to-primary-800 text-white py-16',
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center mb-6">
              <ShieldCheck className="h-12 w-12 text-secondary mr-3" />
              <span className="text-2xl font-bold">Limited Time Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get The Complete OSHA Compliance Bundle
            </h2>
            <p className="text-xl mb-6 text-primary-100">
              All 3 premium PDFs for only $14.99 - Save 28% until April 17, 2025
            </p>
            <div className="bg-white/10 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-secondary mr-2" />
                  <span>Compliance Checklist</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-secondary mr-2" />
                  <span>Violation Report</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-secondary mr-2" />
                  <span>Training Document</span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <span className="text-3xl font-bold mr-4">$14.99</span>
                <span className="text-xl line-through text-primary-200">$20.97</span>
              </div>
            </div>
            <Button 
              onClick={handleBundlePurchase}
              className="bg-secondary hover:bg-secondary-700 text-white text-lg py-6 px-8 group transition-all duration-300 transform hover:scale-105"
            >
              Get All 3 Documents Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
