
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className }: CTASectionProps) => {
  return (
    <section className={cn(
      'bg-gradient-to-r from-primary-700 to-primary-800 text-white py-16',
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to secure your compliance?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Start implementing security best practices today with OSHAQuick.
          </p>
          <Button 
            className="bg-white hover:bg-gray-100 text-primary-700 text-lg py-6 px-8 group"
          >
            Get Started 
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
