import React from 'react';

interface ATTDealerLogoProps {
  className?: string;
}

export const ATTDealerLogo: React.FC<ATTDealerLogoProps> = ({ className = "h-20 mx-auto mb-6" }) => {
  return (
    <svg 
      viewBox="0 0 400 120" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* AT&T Globe and Logo */}
      <g transform="translate(10, 10)">
        <g fill="#00A8E0" fillRule="nonzero">
          <path d="M80,0 C35.8,0 0,20.1 0,45 C0,69.9 35.8,90 80,90 C124.2,90 160,69.9 160,45 C160,20.1 124.2,0 80,0 Z M105.3,65.1 L93.1,65.1 L86.7,48.9 L73.3,48.9 L66.9,65.1 L54.7,65.1 L73.3,25.8 L86.7,25.8 L105.3,65.1 Z M80,43.5 L84.1,34.5 L75.9,34.5 L80,43.5 Z" />
          <path d="M160,45 C160,35.1 151.8,27 141.8,27 C131.8,27 123.6,35.1 123.6,45 C123.6,54.9 131.8,63 141.8,63 C151.8,63 160,54.9 160,45 Z M146.4,51.9 L137.2,51.9 L137.2,48.3 L146.4,48.3 L146.4,44.7 L137.2,44.7 L137.2,41.1 L146.4,41.1 L146.4,37.5 L133.6,37.5 L133.6,55.5 L146.4,55.5 L146.4,51.9 Z" />
        </g>
      </g>
      
      {/* AUTHORIZED DEALER Text */}
      <text 
        x="200" 
        y="60" 
        fontFamily="Arial, sans-serif" 
        fontSize="28" 
        fontWeight="bold" 
        fill="#000000" 
        textAnchor="start"
      >
        AUTHORIZED DEALER
      </text>
    </svg>
  );
};