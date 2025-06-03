import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Check, ArrowLeft, Phone } from 'lucide-react';
import { serviceData } from '../utils/serviceData';

// Определим интерфейс для данных перевода
interface ServiceTranslation {
  title: string;
  description: string;
  features: string[];
}

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { t } = useTranslation();
  
  const service = serviceData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="pt-32 pb-16 container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">{t('services.notFound')}</h1>
        <p className="mb-8">{t('services.notFoundDesc')}</p>
        <Link to="/services" className="btn btn-primary">
          <ArrowLeft size={16} className="mr-2" /> {t('services.backToServices')}
        </Link>
      </div>
    );
  }

  const serviceTrans = t(`serviceDetails.${service.translationKey}`, { returnObjects: true }) as ServiceTranslation;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-secondary-900"
        style={{
          backgroundImage: `linear-gradient(rgba(38, 70, 83, 0.85), rgba(38, 70, 83, 0.9)), url(${service.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            {serviceTrans.title}
          </h1>
        </div>
      </div>

      {/* Service Description */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/3 lg:pr-16 mb-10 lg:mb-0">
              <div 
                className="text-lg text-gray-700 mb-8"
                dangerouslySetInnerHTML={{ __html: serviceTrans.description }}
              />

              <h3 className="text-2xl font-bold text-secondary mb-6">{t('services.keyFeatures')}</h3>
              <ul className="space-y-4 mb-8">
                {serviceTrans.features && serviceTrans.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-secondary mb-4">{t('services.whyChoose')} {serviceTrans.title}?</h3>
                <p className="text-gray-700">
                  {t('services.companyApproach')}
                </p>
              </div>

              <Link to="/contact" className="btn btn-primary inline-flex items-center">
                {t('common.contactUs')} <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold text-secondary mb-6">{t('services.additionalServices')}</h3>
                <ul className="space-y-4">
                  {service.relatedServices.map((relatedService, index) => {
                    const relatedServiceData = serviceData.find(s => s.id === relatedService);
                    if (!relatedServiceData) return null;
                    
                    const relatedTrans = t(`services.${relatedServiceData.translationKey}Title`);
                    return (
                      <li key={index}>
                        <Link 
                          to={`/services/${relatedService}`} 
                          className="flex items-center text-gray-700 hover:text-primary transition-colors"
                        >
                          {relatedServiceData.icon}
                          <span className="ml-3">{relatedTrans}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="border-t border-gray-200 mt-8 pt-8">
                  <h4 className="font-semibold mb-4">{t('services.needConsultation')}</h4>
                  <p className="text-gray-600 mb-4">{t('services.contactExperts')}</p>
                  <div className="flex items-center mt-8">
                    <Phone size={24} className="text-primary mr-2" />
                    <a 
                      href="tel:+74951434355" 
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      +7 495 143-43-55
                    </a>
                  </div>
                  <a 
                    href="mailto:kv@logiversa.com" 
                    className="block text-primary font-medium hover:underline mt-2"
                  >
                    kv@logiversa.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-secondary rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('services.readyToStart')}</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              {t('services.contactUsToday')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn bg-primary text-white hover:bg-primary-600">
                {t('common.contactUs')}
              </Link>
              <Link to="/services" className="btn bg-white text-secondary hover:bg-gray-100">
                <ArrowLeft size={16} className="mr-1" /> {t('menu.services')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;