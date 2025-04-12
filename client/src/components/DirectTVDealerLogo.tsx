import React from 'react';
import logoImage from '../assets/directv-authorized-dealer.png';

interface DirectTVDealerLogoProps {
  className?: string;
}

export const DirectTVDealerLogo: React.FC<DirectTVDealerLogoProps> = ({ className = "h-20 mx-auto mb-6" }) => {
  return (
    <img 
      src={logoImage} 
      alt="DIRECTV Authorized Dealer" 
      className={className}
    />
  );
};