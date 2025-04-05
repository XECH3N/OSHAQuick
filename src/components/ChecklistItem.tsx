
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChecklistItemProps {
  children: React.ReactNode;
  checked?: boolean;
  className?: string;
}

const ChecklistItem = ({ 
  children, 
  checked = true,
  className 
}: ChecklistItemProps) => {
  return (
    <div className={cn('flex items-start space-x-3', className)}>
      <div className={cn(
        'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5',
        checked ? 'bg-secondary' : 'bg-gray-200'
      )}>
        <Check size={16} className="text-white" />
      </div>
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

export default ChecklistItem;
