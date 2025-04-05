
import React from 'react';
import { Shield, Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeaturesProps {
  className?: string;
}

const Features = ({ className }: FeaturesProps) => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary-700" />,
      title: 'Enhanced Security',
      description: 'Implement modern security headers and best practices to protect your business data.'
    },
    {
      icon: <Check className="h-10 w-10 text-secondary" />,
      title: 'Compliance Ready',
      description: 'Stay OSHA compliant with our comprehensive checklists and documentation.'
    },
    {
      icon: <ArrowRight className="h-10 w-10 text-primary-700" />,
      title: 'Fast Implementation',
      description: 'Quickly integrate security measures with minimal disruption to your workflow.'
    }
  ];

  return (
    <section className={cn('py-16 bg-white', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose OSHAQuick?</h2>
          <p className="text-lg text-gray-600">
            Our platform provides everything you need to maintain security compliance and protect your workforce.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-100 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
