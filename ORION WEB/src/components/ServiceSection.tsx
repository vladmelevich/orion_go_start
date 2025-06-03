import React, { ReactNode } from 'react';

interface ServiceSectionProps {
  iconSrc?: string;
  iconComponent?: ReactNode;
  title: string;
  children: ReactNode;
  imagePosition?: 'left' | 'right';
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  iconSrc,
  iconComponent,
  title,
  children,
  imagePosition = 'left'
}) => {
  const renderIcon = () => {
    if (iconSrc) {
      return (
        <div className="service-icon-container flex-shrink-0">
          <img 
            src={iconSrc} 
            alt={`${title} icon`} 
            className="service-icon w-24 h-24 object-contain"
          />
        </div>
      );
    } else if (iconComponent) {
      return (
        <div className="service-icon-container flex-shrink-0">
          {iconComponent}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="service-section py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-secondary">{title}</h2>
        
        <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-start`}>
          {renderIcon()}
          
          <div className="service-content flex-1">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection; 