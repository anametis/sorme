import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MaxWithWrapperProps {
  children: ReactNode;
  className?: string;
}

const MaxWithWrapper: React.FC<MaxWithWrapperProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'h-full mx-auto w-full max-w-screen-2xl px-8 md:px-8',
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWithWrapper;