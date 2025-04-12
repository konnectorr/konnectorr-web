import React from 'react';

interface ATTAuthorizedRetailerLogoProps {
  className?: string;
}

export const ATTAuthorizedRetailerLogo: React.FC<ATTAuthorizedRetailerLogoProps> = ({ className = "h-24 w-auto mx-auto mb-6" }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
        {/* AT&T Globe */}
        <circle cx="50" cy="50" r="30" fill="#009FDB" />
        <path d="M50 20C33.431 20 20 33.431 20 50s13.431 30 30 30 30-13.431 30-30-13.431-30-30-30zm0 0" 
              fill="none" stroke="#009FDB" strokeWidth="2" />
        <path d="M50 30C38.954 30 30 38.954 30 50s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zm0 0" 
              fill="none" stroke="#009FDB" strokeWidth="2" />
        <path d="M50 40C44.477 40 40 44.477 40 50s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 0" 
              fill="none" stroke="#009FDB" strokeWidth="2" />
        
        {/* AT&T Text */}
        <text x="90" y="45" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="#009FDB">AT&T</text>
        <text x="90" y="65" fontFamily="Arial" fontSize="10" fill="#000">Authorized Retailer</text>
      </svg>
    </div>
  );
};