import React from 'react';
import logoImage from '../assets/spectrum-dealer-logo.png';

interface SpectrumDealerLogoProps {
  className?: string;
}

export const SpectrumDealerLogo: React.FC<SpectrumDealerLogoProps> = ({ className = "h-20 mx-auto mb-6" }) => {
  return (
    <img 
      src={logoImage} 
      alt="Spectrum Dealer Logo" 
      className={className}
    />
  );
};