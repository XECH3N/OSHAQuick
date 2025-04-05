
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Check } from 'lucide-react';
import ChecklistItem from './ChecklistItem';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section 
      className={cn(
        'py-16 md:py-24 bg-gradient-to-b from-white to-gray-50',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Safety Compliance{' '}
              <span className="text-primary-700">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              OSHAQuick helps you maintain compliance with security best practices and OSHA regulations to protect your business.
            </p>
            
            <div className="space-y-4 mb-8">
              <ChecklistItem>Fast OSHA compliance verification</ChecklistItem>
              <ChecklistItem>Secure data handling and storage</ChecklistItem>
              <ChecklistItem>Professional documentation generation</ChecklistItem>
              <ChecklistItem>Regular compliance updates</ChecklistItem>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-secondary hover:bg-secondary-700 text-lg py-6 px-8">
                Get Started
              </Button>
              <Button variant="outline" className="text-lg py-6 px-8">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-700 to-secondary-600 rounded-full blur-lg opacity-70"></div>
              <div className="relative bg-white rounded-full p-8 shadow-xl">
                <Shield size={200} className="text-primary-700 fill-primary-100" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary rounded-full p-3">
                  <Check size={50} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
