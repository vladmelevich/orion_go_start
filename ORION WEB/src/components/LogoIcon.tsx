import React from 'react';

interface LogoIconProps {
  className?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ className = 'h-[100px] w-auto' }) => {
  return (
    <img 
      src="/logo-orion.png"
      alt="ORION Logistics"
      className={className}
    />
  );
};

export default LogoIcon;