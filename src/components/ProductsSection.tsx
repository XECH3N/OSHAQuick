
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ShieldCheck, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProductsSectionProps {
  className?: string;
}

const MotionCard = motion(Card);

const ProductsSection = ({ className }: ProductsSectionProps) => {
  const handlePurchase = (productId: string) => {
    // This would connect to your payment processor
    console.log(`Purchasing product: ${productId}`);
    // For demonstration - you would replace this with actual payment processing
    alert(`This would take you to checkout for ${productId}`);
  };

  const handleBundlePurchase = () => {
    console.log("Purchasing bundle");
    alert("This would take you to checkout for the complete bundle");
  };

  const isLimitedTimeOffer = true; // You would calculate this based on date

  return (
    <section className={cn('py-16 bg-white', className)} id="products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional OSHA Documentation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything electricians need to stay compliant and protect their business
          </p>
        </div>

        {isLimitedTimeOffer && (
          <motion.div 
            className="bg-gradient-to-r from-primary-700 to-secondary-600 p-6 rounded-xl text-white text-center mb-12 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-2">Limited Time Offer</h3>
            <p className="text-xl mb-4">Get all 3 premium PDFs for only $14.99 until April 17, 2025</p>
            <div className="flex justify-center">
              <Button 
                onClick={handleBundlePurchase}
                className="bg-white text-primary-700 hover:bg-gray-100 text-lg py-6 px-8 shadow-md"
              >
                Get The Complete Bundle
                <span className="ml-2 text-xs line-through text-gray-500">$20.97</span>
              </Button>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MotionCard 
            className="border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary-100">
                  <ShieldCheck className="h-10 w-10 text-primary-700" />
                </div>
              </div>
              <CardTitle className="text-2xl">Compliance Checklist</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Complete checklist to ensure your electrical work meets all OSHA requirements.
              </p>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center">
                  <Check size={16} className="text-secondary mr-2" />
                  <span className="text-sm">Job site safety verification</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-secondary mr-2" />
                  <span className="text-sm">Equipment compliance checks</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-secondary mr-2" />
                  <span className="text-sm">Wiring safety protocols</span>
                </div>
              </div>
              <p className="text-3xl font-bold text-primary-700">$7.99</p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button 
                className="w-full bg-primary-700 hover:bg-primary-800"
                onClick={() => handlePurchase('compliance-checklist')}
              >
                Buy Now
              </Button>
            </CardFooter>
          </MotionCard>

          <MotionCard 
            className="border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary-100">
                  <AlertTriangle className="h-10 w-10 text-primary-700" />
                </div>
              </div>
              <CardTitle className="text-2xl">Violation Report</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Professional template for documenting and addressing safety violations.
              </p>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center">
                  <Check size={16} className="text-secondary mr-2" />
                  <span className="text-sm">Detailed violation documentation</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-secondary mr-2" />
                  <span className="text-sm">Corrective action planning</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-secondary mr-2" />
                  <span className="text-sm">Follow-up tracking system</span>
                </div>
              </div>
              <p className="text-3xl font-bold text-primary-700">$4.99</p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button 
                className="w-full bg-primary-700 hover:bg-primary-800"
                onClick={() => handlePurchase('violation-report')}
              >
                Buy Now
              </Button>
            </CardFooter>
          </MotionCard>

          <MotionCard 
            className="border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary-100">
                  <FileText className="h-10 w-10 text-primary-700" />
                </div>
              </div>
              <CardTitle className="text-2xl">Training Document</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Comprehensive training manual for electrical safety compliance.
              </p>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center">
                  <Check size={16} className="text-secondary mr-2" />
                  <span className="text-sm">OSHA-compliant safety procedures</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-secondary mr-2" />
                  <span className="text-sm">Risk assessment guidelines</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-secondary mr-2" />
                  <span className="text-sm">Certificate of completion template</span>
                </div>
              </div>
              <p className="text-3xl font-bold text-primary-700">$7.99</p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button 
                className="w-full bg-primary-700 hover:bg-primary-800"
                onClick={() => handlePurchase('training-document')}
              >
                Buy Now
              </Button>
            </CardFooter>
          </MotionCard>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
