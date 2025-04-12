import React from 'react';
import logoImage from '../assets/dish-network-dealer-logo.png';

interface DishNetworkDealerLogoProps {
  className?: string;
}

export const DishNetworkDealerLogo: React.FC<DishNetworkDealerLogoProps> = ({ className = "h-20 mx-auto mb-6" }) => {
  return (
    <img 
      src={logoImage} 
      alt="DISH Network Authorized Retailer" 
      className={className}
    />
  );
};