import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import ServiceSection from '../components/ServiceSection';
import { serviceData } from '../utils/serviceData';

const RoadDetailPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const service = serviceData.find(s => s.id === 'road-freight');
  const isRussian = i18n.language === 'ru';

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-secondary-900"
        style={{
          backgroundImage: `linear-gradient(rgba(38, 70, 83, 0.85), rgba(38, 70, 83, 0.9)), url(${service?.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            {isRussian ? 'Автомобильные перевозки' : 'Road Freight Services'}
          </h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="max-w-none flex-1">
                <p className="text-lg mb-6 text-gray-700">
                  {isRussian 
                    ? 'Перевозки автомобильным транспортом обладают рядом преимуществ:' 
                    : 'Road transportation offers several advantages:'}
                </p>
                
                <div className="mb-8 space-y-6">
                  <div className="pl-6">
                    <p className="mb-1 text-gray-700">
                      {isRussian 
                        ? <><strong>Гибкость маршрутов.</strong> Автотранспорт позволяет оперативно корректировать маршрут при необходимости, что помогает избегать задержек и ускорять процесс доставки.</>
                        : <><strong>Route Flexibility.</strong> Road transport allows for quick route adjustments when necessary, helping to avoid delays and speed up the delivery process.</>
                      }
                    </p>
                  </div>
                  
                  <div className="pl-6">
                    <p className="mb-1 text-gray-700">
                      {isRussian 
                        ? <><strong>Скорость доставки.</strong> В отличие от морских и железнодорожных перевозок, автотранспорт обеспечивает более быстрое перемещение на короткие и средние дистанции, что особенно важно для срочных грузов.</>
                        : <><strong>Delivery Speed.</strong> Unlike sea and rail transport, road transport provides faster movement over short and medium distances, which is especially important for urgent cargo.</>
                      }
                    </p>
                  </div>
                  
                  <div className="pl-6">
                    <p className="mb-1 text-gray-700">
                      {isRussian 
                        ? <><strong>Универсальность.</strong> Автотранспорт подходит для перевозки широкого спектра товаров, включая грузы, требующие особых условий транспортировки, например, температурного режима или защиты от влаги.</>
                        : <><strong>Versatility.</strong> Road transport is suitable for transporting a wide range of goods, including cargo requiring special transportation conditions, such as temperature control or moisture protection.</>
                      }
                    </p>
                  </div>
                  
                  <div className="pl-6">
                    <p className="mb-1 text-gray-700">
                      {isRussian 
                        ? <><strong>Прямая доставка.</strong> Автоперевозки позволяют доставить груз напрямую по принципу "от двери к двери" на склад или в офис, исключая промежуточные этапы разгрузки и перегрузки.</>
                        : <><strong>Direct Delivery.</strong> Road transportation allows for direct "door-to-door" delivery to a warehouse or office, eliminating intermediate stages of unloading and reloading.</>
                      }
                    </p>
                  </div>
                  
                  <div className="pl-6">
                    <p className="mb-1 text-gray-700">
                      {isRussian 
                        ? <><strong>Мониторинг и безопасность.</strong> Современные технологии позволяют отслеживать груз на всём маршруте, что обеспечивает высокий уровень безопасности и минимизирует риски.</>
                        : <><strong>Monitoring and Security.</strong> Modern technologies allow tracking cargo throughout the entire route, providing a high level of security and minimizing risks.</>
                      }
                    </p>
                  </div>
                </div>
                
                <p className="mb-6 text-gray-700">
                  {isRussian 
                    ? 'Международные автомобильные перевозки — одно из ключевых направлений деятельности компании ORION. Наша компания осуществляет перевозки между странами Западной и Восточной Европы, странами СНГ, Южной и Юго-Восточной Азии и Китая.'
                    : 'International road transportation is one of the key areas of ORION company\'s activity. Our company carries out transportation between countries of Western and Eastern Europe, CIS countries, South and Southeast Asia, and China.'
                  }
                </p>
                
                <p className="mb-6 text-gray-700">
                  {isRussian 
                    ? 'Для наших клиентов доступны перевозки различными видами подвижного состава: тентовыми, рефрижераторными, контейнерными. Также мы осуществляем доставку опасных, крупногабаритных, негабаритных и сборных грузов.'
                    : 'For our clients, transportation is available with various types of rolling stock: tarpaulin, refrigerated, and container trucks. We also deliver dangerous, large, oversized, and groupage cargo.'
                  }
                </p>
                
                <p className="mb-6 text-gray-700">
                  {isRussian 
                    ? 'Компания ORION обеспечивает доступный сервис для своих клиентов за счёт использования собственного транспорта и отсутствия посредников.'
                    : 'ORION provides affordable service for its clients through the use of its own transport and the absence of intermediaries.'
                  }
                </p>
                
                <p className="mb-4 text-gray-700">
                  {isRussian 
                    ? 'Международные перевозки грузов автомобильным транспортом — это удобный и надёжный способ доставки грузов. С компанией ORION каждый Клиент получит безопасную и эффективную логистику, адаптированную под его потребности.'
                    : 'International cargo transportation by road is a convenient and reliable method of cargo delivery. With ORION, each Client will receive safe and efficient logistics tailored to their needs.'
                  }
                </p>
              </div>
              <div className="md:w-1/3 flex-shrink-0">
                <div className="sticky top-32">
                  <img 
                    src={service?.iconImage}
                    alt={isRussian ? "Автомобильные перевозки" : "Road Freight"}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {isRussian ? 'Готовы начать сотрудничество?' : 'Ready to Start Cooperation?'}
            </h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              {isRussian 
                ? 'Свяжитесь с нами сегодня, чтобы получить индивидуальное предложение по вашим логистическим потребностям.'
                : 'Contact us today to get a customized offer for your logistics needs.'
              }
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

export default RoadDetailPage; 