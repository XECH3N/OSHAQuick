
import React from 'react';
import { Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SecurityBannerProps {
  className?: string;
}

const SecurityBanner = ({ className }: SecurityBannerProps) => {
  return (
    <section className={cn(
      'bg-primary-700 text-white py-10',
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-6">
          <Shield className="h-12 w-12 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold mb-2">Secure by Default</h2>
            <p className="text-primary-100">
              OSHAQuick implements strict security headers including HSTS, CSP, and modern 
              permissions policies to keep your data safe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityBanner;
