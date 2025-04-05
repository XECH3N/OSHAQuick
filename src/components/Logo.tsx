
import React from 'react';
import { Shield, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo = ({ className, size = 'md', showText = true }: LogoProps) => {
  const sizes = {
    sm: { icon: 18, fontSize: 'text-lg' },
    md: { icon: 24, fontSize: 'text-2xl' },
    lg: { icon: 32, fontSize: 'text-4xl' },
  };

  return (
    <div className={cn('flex items-center', className)}>
      <div className="relative">
        <Shield 
          size={sizes[size].icon} 
          className="text-primary-700 fill-primary-100" />
        <Check 
          size={sizes[size].icon * 0.6} 
          className="absolute text-secondary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      {showText && (
        <span className={cn('font-montserrat font-bold ml-2', sizes[size].fontSize)}>
          <span className="text-primary-700">OSHA</span>
          <span className="text-secondary">Quick</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
