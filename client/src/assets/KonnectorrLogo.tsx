import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export const KonnectorrLogo: React.FC<LogoProps> = ({ className = "h-8", dark = false }) => {
  return (
    <div className={`font-extrabold ${className} flex items-center`}>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transform-uppercase tracking-wider">
        K<span className="text-blue-500 dark:text-blue-400">O</span>NNECT<span className="text-blue-500 dark:text-blue-400">O</span>RR
      </span>
      <span className="ml-0.5 text-xs bg-blue-600 dark:bg-blue-500 text-white px-1 py-0.5 rounded font-semibold tracking-tight -translate-y-2">PRO</span>
    </div>
  );
};