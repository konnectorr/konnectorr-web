import React from 'react';
import logoImage from '../assets/xfinity-authorized-dealer.jpg';

interface XfinityDealerLogoProps {
  className?: string;
}

export const XfinityDealerLogo: React.FC<XfinityDealerLogoProps> = ({ className = "h-20 mx-auto mb-6" }) => {
  return (
    <img 
      src={logoImage} 
      alt="Xfinity Authorized Dealer" 
      className={className}
    />
  );
};