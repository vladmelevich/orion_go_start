import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail } from 'lucide-react';
import LogoIcon from './LogoIcon';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <LogoIcon className="h-10 w-auto" />
            </div>
            <p className="mb-6 text-gray-300">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('menu.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('menu.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('menu.services')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('menu.contact')}
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('menu.feedback')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/road-freight" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('services.roadTitle')}
                </Link>
              </li>
              <li>
                <Link to="/services/air-freight" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('services.airTitle')}
                </Link>
              </li>
              <li>
                <Link to="/services/rail-freight" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('services.railTitle')}
                </Link>
              </li>
              <li>
                <Link to="/services/sea-freight" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('services.seaTitle')}
                </Link>
              </li>
              <li>
                <Link to="/services/customs" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {t('services.customsTitle')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-primary" />
                <span className="text-gray-300">
                  123456, Moscow, Street Name, 123
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-primary" />
                <a href="tel:+74951434355" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  +7 495 143-43-55
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-primary" />
                <a href="mailto:kv@logiversa.com" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  kv@logiversa.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>{t('footer.copyright').replace('2023', currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;