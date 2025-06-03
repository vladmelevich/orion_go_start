import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Truck, Plane, Train, Ship, FileCheck, 
  Warehouse, FileText, Barcode, Globe, ArrowRight,
  Users, Calendar, Shield, Award, MapPin, Phone, Mail, X, ZoomIn
} from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    console.log('HomePage компонент загружен');
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title={t('home.heroTitle')}
        subtitle={t('home.heroSubtitle')}
        buttonText={t('common.readMore')}
        buttonLink="/about"
        interval={5000}
      />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg" 
                  alt="ORION Team" 
                  className="rounded-lg shadow-xl max-w-full h-auto"
                />
                <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 bg-primary rounded-lg p-5 shadow-lg md:p-8 animate-fade-in">
                  <div className="text-white text-center">
                    <p className="text-3xl md:text-4xl font-bold">{t('common.year')}</p>
                    <p className="text-sm md:text-base mt-1">{t('about.history')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('home.aboutTitle')}</h2>
              <p className="text-xl text-gray-600 mb-6">{t('home.aboutSubtitle')}</p>
              <p className="text-gray-600 mb-8">
                {t('about.visionText')}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary-50 rounded-lg text-primary">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('about.value1Title')}</h3>
                    <p className="text-gray-600 text-sm">{t('about.value1Text')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary-50 rounded-lg text-primary">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('about.value4Title')}</h3>
                    <p className="text-gray-600 text-sm">{t('about.value4Text')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary-50 rounded-lg text-primary">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('about.value1Title')}</h3>
                    <p className="text-gray-600 text-sm">{t('about.value1Text')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary-50 rounded-lg text-primary">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('about.advantages.items.3')}</h3>
                    <p className="text-gray-600 text-sm">{t('about.advantages.items.0')}</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary inline-flex items-center">
                {t('common.readMore')} <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('home.servicesTitle')}</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              {t('services.description')}
            </p>
          </div>

          <div className="bento-grid">
            <ServiceCard 
              title={t('services.roadTitle')}
              description={t('services.roadDescription')}
              icon={<Truck size={24} />}
              link="/services/road-freight"
              featured={true}
            />
            <ServiceCard 
              title={t('services.airTitle')}
              description={t('services.airDescription')}
              icon={<Plane size={24} />}
              link="/services/air-freight"
            />
            <ServiceCard 
              title={t('services.railTitle')}
              description={t('services.railDescription')}
              icon={<Train size={24} />}
              link="/services/rail-freight"
            />
            <ServiceCard 
              title={t('services.seaTitle')}
              description={t('services.seaDescription')}
              icon={<Ship size={24} />}
              link="/services/sea-freight"
            />
            <ServiceCard 
              title={t('services.customsTitle')}
              description={t('services.customsDescription')}
              icon={<FileCheck size={24} />}
              link="/services/customs"
            />
            <ServiceCard 
              title={t('services.warehouseTitle')}
              description={t('services.warehouseDescription')}
              icon={<Warehouse size={24} />}
              link="/services/warehouse"
              featured={true}
            />
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 inline-flex items-center transition-colors duration-300">
              {t('common.readMore')} <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('contact.location')}</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-primary mb-4">{t('footer.contactInfo')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 text-gray-700">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium">{t('contact.address')}:</h4>
                      <p className="text-gray-600">141401, Московская область,<br />г. Химки, ул. Рабочая, д.2А, корпус 26, офис 107</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <Phone size={24} />
                    <div className="ml-4">
                      <h4 className="font-medium">{t('contact.phone')}:</h4>
                      <p className="text-gray-600">+7 495 143-43-55</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 text-gray-700">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium">{t('contact.email')}:</h4>
                      <p className="text-gray-600">kv@logiversa.com</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/contact" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 inline-flex items-center transition-colors duration-300">
                    {t('common.contactUs')} <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden h-96 shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2236.5594267899454!2d37.44111937691172!3d55.90191537489378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b53845747acc39%3A0x2e4f0468d04b4f18!2z0YPQuy4g0KDQsNCx0L7Rh9Cw0Y8sIDLQkCwg0LrQvtGA0L_Rg9GBIDI2LCDQpdC40LzQutC4LCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCAxNDE0MDE!5e0!3m2!1sru!2sru!4v1698567698890!5m2!1sru!2sru" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('home.ctaTitle')}</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            {t('home.ctaDescription')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-300">
              {t('common.contactUs')}
            </Link>
            <Link to="/services" className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              {t('menu.services')}
            </Link>
          </div>
        </div>
      </section>

      {/* Модальное окно для просмотра изображений */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-3 bg-black bg-opacity-50 rounded-full"
            onClick={closeImageModal}
            aria-label="Закрыть просмотр"
          >
            <X size={32} />
          </button>
          
          <div className="relative max-h-[90vh] max-w-[90vw] flex items-center justify-center">
            <img 
              src={selectedImage}
              alt="Увеличенное изображение" 
              className="max-h-[85vh] max-w-[85vw] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;