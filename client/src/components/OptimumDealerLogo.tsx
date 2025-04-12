import React from 'react';
import logoImage from '../assets/optimum-dealer-logo.webp';

interface OptimumDealerLogoProps {
  className?: string;
  containerClassName?: string;
}

export const OptimumDealerLogo: React.FC<OptimumDealerLogoProps> = ({ 
  className = "h-20 mb-6", 
  containerClassName = "flex justify-center w-full"
}) => {
  return (
    <div className={containerClassName}>
      <img 
        src={logoImage} 
        alt="Optimum Dealer Logo" 
        className={className}
      />
    </div>
  );
};