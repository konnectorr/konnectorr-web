import React from 'react';
import { providerLogos, providerColors } from '@/data/logos';
import { CircleOff, Tv, Satellite, Zap } from 'lucide-react';
import { providerTypes } from '@/data/logos';

interface ProviderLogoDisplayProps {
  providerName: string | null;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  showName?: boolean;
  showIcon?: boolean;
}

/**
 * A component that displays a telecom provider logo based on the provider name.
 * Falls back to a generic icon if the logo is not available.
 */
const ProviderLogoDisplay: React.FC<ProviderLogoDisplayProps> = ({
  providerName,
  size = 'medium',
  className = '',
  showName = false,
  showIcon = true,
}) => {
  if (!providerName) {
    return (
      <div className={`flex items-center ${className}`}>
        <div className={`rounded-full bg-gray-200 flex items-center justify-center ${getSizeClass(size)}`}>
          <CircleOff className="text-gray-500" size={getIconSize(size)} />
        </div>
        {showName && <div className="ml-2 font-medium text-gray-500">Unknown Provider</div>}
      </div>
    );
  }

  // Normalize provider name to lowercase to match our data
  const normalizedName = providerName.toLowerCase();
  
  // Get provider logo URL
  const logoUrl = providerLogos[normalizedName as keyof typeof providerLogos];
  
  // Get display name with proper capitalization
  const displayNameKey = `${normalizedName}DisplayName` as keyof typeof providerLogos;
  const displayName = providerLogos[displayNameKey] || providerName;
  
  // Get provider color for styling
  const providerColor = providerColors[normalizedName as keyof typeof providerColors] || '#4b5563';
  
  // Get provider type for icon fallback
  const providerType = providerTypes[normalizedName as keyof typeof providerTypes] || 'cable';
  
  // Determine the icon based on provider type
  const getProviderIcon = () => {
    switch(providerType) {
      case 'satellite':
        return <Satellite className="text-white" size={getIconSize(size)} />;
      case 'fiber':
        return <Zap className="text-white" size={getIconSize(size)} />;
      default: // 'cable' or unknown
        return <Tv className="text-white" size={getIconSize(size)} />;
    }
  };

  return (
    <div className={`flex items-center ${className}`}>
      {showIcon && (
        logoUrl ? (
          <div className={`${getSizeClass(size)} rounded-lg overflow-hidden border border-gray-100`}>
            <img 
              src={logoUrl} 
              alt={`${displayName} logo`} 
              className="object-contain w-full h-full" 
              onError={(e) => {
                // If image fails to load, replace with provider-colored icon
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.style.backgroundColor = providerColor;
                e.currentTarget.parentElement!.innerHTML = `
                  <div class="flex items-center justify-center w-full h-full">
                    ${getProviderIcon()}
                  </div>
                `;
              }}
            />
          </div>
        ) : (
          <div 
            className={`${getSizeClass(size)} rounded-lg flex items-center justify-center`}
            style={{ backgroundColor: providerColor }}
          >
            {getProviderIcon()}
          </div>
        )
      )}
      
      {showName && (
        <div className="ml-2 font-medium" style={{ color: providerColor }}>
          {displayName}
        </div>
      )}
    </div>
  );
};

// Helper functions to determine sizes
const getSizeClass = (size: 'small' | 'medium' | 'large') => {
  switch(size) {
    case 'small':
      return 'w-8 h-8';
    case 'large':
      return 'w-16 h-16';
    default: // medium
      return 'w-12 h-12';
  }
};

const getIconSize = (size: 'small' | 'medium' | 'large') => {
  switch(size) {
    case 'small':
      return 16;
    case 'large':
      return 32;
    default: // medium
      return 24;
  }
};

export default ProviderLogoDisplay;