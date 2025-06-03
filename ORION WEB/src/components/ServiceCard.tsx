import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  link,
  featured = false
}) => {
  const { t } = useTranslation();
  
  return (
    <div className={`bento-card group ${featured ? 'bento-card-featured' : ''}`}>
      <div className="flex items-start">
        <div className="mr-4 p-3 bg-primary-50 rounded-lg text-primary">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <Link 
            to={link} 
            className="inline-flex items-center text-primary font-medium hover:underline group-hover:translate-x-1 transition-transform"
          >
            {t('common.readMore')} <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;