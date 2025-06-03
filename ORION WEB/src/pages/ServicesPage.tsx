import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Truck, Plane, Train, Ship, FileCheck, 
  Warehouse, Barcode, Globe, ArrowRight
} from 'lucide-react';

// Service card component for this page
const ServiceItem: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}> = ({ title, description, icon, link }) => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-2">
      <div className="p-8">
        <div className="p-4 bg-primary-50 rounded-full inline-block text-primary mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-primary font-medium hover:underline"
        >
          {t('common.readMore')} <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-secondary-900"
        style={{
          backgroundImage: `linear-gradient(rgba(38, 70, 83, 0.85), rgba(38, 70, 83, 0.9)), url(https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            {t('services.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-gray-200 animate-slide-up">
            {t('services.subtitle')}
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-700">
              {t('services.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceItem 
              title={t('services.roadTitle')}
              description={t('services.roadDescription')}
              icon={<Truck size={32} />}
              link="/services/road-freight"
            />
            <ServiceItem 
              title={t('services.airTitle')}
              description={t('services.airDescription')}
              icon={<Plane size={32} />}
              link="/services/air-freight"
            />
            <ServiceItem 
              title={t('services.railTitle')}
              description={t('services.railDescription')}
              icon={<Train size={32} />}
              link="/services/rail-freight"
            />
            <ServiceItem 
              title={t('services.seaTitle')}
              description={t('services.seaDescription')}
              icon={<Ship size={32} />}
              link="/services/sea-freight"
            />
            <ServiceItem 
              title={t('services.customsTitle')}
              description={t('services.customsDescription')}
              icon={<FileCheck size={32} />}
              link="/services/customs"
            />
            <ServiceItem 
              title={t('services.warehouseTitle')}
              description={t('services.warehouseDescription')}
              icon={<Warehouse size={32} />}
              link="/services/warehouse"
            />
            <ServiceItem 
              title={t('services.markingTitle')}
              description={t('services.markingDescription')}
              icon={<Barcode size={32} />}
              link="/services/marking"
            />
            <ServiceItem 
              title={t('services.outsourcingTitle')}
              description={t('services.outsourcingDescription')}
              icon={<Globe size={32} />}
              link="/services/outsourcing"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t('home.ctaTitle')}</h2>
          <p className="max-w-2xl mx-auto text-white opacity-80 mb-8">
            {t('home.ctaDescription')}
          </p>
          <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            {t('common.contactUs')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;