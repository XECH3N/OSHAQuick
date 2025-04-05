
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ShieldCheck, AlertTriangle, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProductsSectionProps {
  className?: string;
}

const MotionCard = motion(Card);

const ProductsSection = ({ className }: ProductsSectionProps) => {
  const products = [
    { 
      id: 'compliance-checklist', 
      name: 'Compliance Checklist', 
      price: 7.99,
      url: 'https://sachinlord.gumroad.com/l/ckquu?wanted=true',
      icon: <ShieldCheck className="h-10 w-10 text-primary-700" />,
      description: 'Complete checklist to ensure your electrical work meets all OSHA requirements.',
      features: [
        'Job site safety verification',
        'Equipment compliance checks',
        'Wiring safety protocols'
      ]
    },
    { 
      id: 'violation-report', 
      name: 'Violation Report', 
      price: 4.99,
      url: 'https://sachinlord.gumroad.com/l/owhtb?wanted=true',
      icon: <AlertTriangle className="h-10 w-10 text-primary-700" />,
      description: 'Professional template for documenting and addressing safety violations.',
      features: [
        'Detailed violation documentation',
        'Corrective action planning',
        'Follow-up tracking system'
      ]
    },
    { 
      id: 'training-document', 
      name: 'Training Document', 
      price: 12.99,
      url: 'https://sachinlord.gumroad.com/l/oftwm?wanted=true',
      icon: <FileText className="h-10 w-10 text-primary-700" />,
      description: 'Comprehensive training manual for electrical safety compliance.',
      features: [
        'OSHA-compliant safety procedures',
        'Risk assessment guidelines',
        'Certificate of completion template'
      ]
    },
  ];

  const bundlePrice = 20.00;
  const bundleUrl = 'https://sachinlord.gumroad.com/l/beord?wanted=true';
  const originalPrice = products.reduce((sum, product) => sum + product.price, 0).toFixed(2);

  return (
    <section className={cn('py-16 bg-white', className)} id="products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional OSHA Documentation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything electricians need to stay compliant and protect their business
          </p>
        </div>

        <motion.div 
          className="bg-gradient-to-r from-primary-700 to-secondary-600 p-6 rounded-xl text-white text-center mb-12 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-2">Limited Time Offer</h3>
          <p className="text-xl mb-4">Get all 3 premium PDFs for only ${bundlePrice} (Save ${(parseFloat(originalPrice) - bundlePrice).toFixed(2)})</p>
          <div className="flex justify-center">
            <Button 
              onClick={() => window.open(bundleUrl, '_blank')}
              className="bg-white text-primary-700 hover:bg-gray-100 text-lg py-6 px-8 shadow-md"
            >
              Get The Complete Bundle
              <span className="ml-2 text-xs line-through text-gray-500">${originalPrice}</span>
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <MotionCard 
              key={product.id}
              className="border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary-100">
                    {product.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex flex-col gap-3 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check size={16} className="text-secondary mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <p className="text-3xl font-bold text-primary-700">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  className="w-full bg-primary-700 hover:bg-primary-800"
                  onClick={() => window.open(product.url, '_blank')}
                >
                  Buy Now
                </Button>
              </CardFooter>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
