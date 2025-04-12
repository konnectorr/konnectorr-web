import React from 'react';

interface ATTAuthorizedRetailerProps {
  className?: string;
}

export const ATTAuthorizedRetailer: React.FC<ATTAuthorizedRetailerProps> = ({ className = "h-20 w-auto mx-auto mb-6" }) => {
  return (
    <div className={className}>
      <svg 
        viewBox="0 0 600 200" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* AT&T Globe */}
        <circle cx="140" cy="100" r="100" fill="#00A8E0" />
        <circle cx="140" cy="100" r="85" fill="white" />
        <path d="M140,15 A85,85 0 0 1 140,185 A85,85 0 0 1 140,15" fill="none" stroke="#00A8E0" strokeWidth="14" />
        <path d="M140,30 A70,70 0 0 1 140,170 A70,70 0 0 1 140,30" fill="none" stroke="#00A8E0" strokeWidth="14" />
        <path d="M140,50 A50,50 0 0 1 140,150 A50,50 0 0 1 140,50" fill="none" stroke="#00A8E0" strokeWidth="14" />
        <path d="M140,70 A30,30 0 0 1 140,130 A30,30 0 0 1 140,70" fill="none" stroke="#00A8E0" strokeWidth="14" />
        
        {/* AT&T Text */}
        <g transform="translate(240, 70)">
          <path d="M0,60 L30,0 L50,0 L80,60 L60,60 L55,50 L25,50 L20,60 L0,60 Z M30,35 L50,35 L40,15 L30,35 Z" fill="black" />
          <path d="M85,0 L105,0 L105,25 L125,0 L150,0 L125,30 L150,60 L125,60 L105,35 L105,60 L85,60 L85,0 Z" fill="black" />
          <path d="M155,0 L175,0 L175,15 L195,15 L195,0 L215,0 L215,60 L195,60 L195,35 L175,35 L175,60 L155,60 L155,0 Z" fill="black" />
        </g>
        
        {/* Authorized Retailer Text */}
        <text 
          x="300" 
          y="150" 
          fontFamily="Arial, sans-serif" 
          fontSize="30" 
          fontWeight="bold" 
          fill="black" 
          textAnchor="middle"
        >
          Authorized Retailer
        </text>
      </svg>
    </div>
  );
};