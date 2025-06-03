import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import ServiceSection from '../components/ServiceSection';
import { serviceData } from '../utils/serviceData';

const RailFreightDetailPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const service = serviceData.find(s => s.id === 'rail-freight');
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
            {isRussian ? 'Ж/д перевозки' : 'Rail Freight Services'}
          </h1>
        </div>
      </div>

      {/* Единый блок с текстом */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="max-w-none flex-1">
                <p className="mb-6 text-lg">
                  {isRussian 
                    ? <><strong>Компания ORION</strong> использует свои обширные знания и опыт в организации международных перевозок железнодорожным транспортом, чтобы предложить каждому КЛИЕНТУ индивидуальные решения, адаптированные под конкретные потребности каждого груза.</>
                    : <><strong>ORION Company</strong> uses its extensive knowledge and experience in organizing international rail transportation to offer each CLIENT individual solutions tailored to the specific needs of each cargo.</>
                  }
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-secondary-800">
                  {isRussian ? 'Преимущества международных железнодорожных перевозок:' : 'Advantages of international rail transportation:'}
                </h3>
                <ul className="list-disc pl-8 mb-8 space-y-3">
                  <li>
                    {isRussian 
                      ? <><strong>Универсальность.</strong> Возможность перевозить груз вне зависимости от его размера и объёма. Подходят для перевозки опасных, тяжеловесных, габаритных грузов.</>
                      : <><strong>Versatility.</strong> Ability to transport cargo regardless of its size and volume. Suitable for transporting dangerous, heavy, and oversized cargo.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <><strong>Всесезонность.</strong> Транспортировка не зависит от погодных условий и доступна в любой сезон года. Это обеспечивает своевременность поставок и сводит к минимуму риски задержки товара в дороге.</>
                      : <><strong>All-Season Availability.</strong> Transportation does not depend on weather conditions and is available in any season of the year. This ensures timely deliveries and minimizes the risks of cargo delays en route.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <><strong>Экономичность.</strong> Железнодорожные перевозки часто стоят дешевле, чем другие виды транспорта, такие как авиа и морские перевозки. Это особенно выгодно при перемещении крупных партий между большим количеством государств.</>
                      : <><strong>Cost-Effectiveness.</strong> Rail transportation often costs less than other modes of transport, such as air and sea shipping. This is especially beneficial when moving large shipments between numerous countries.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <><strong>Оперативность.</strong> Доставка груза по железной дороге займёт больше времени, чем воздушная доставка, но гораздо меньше, чем морская.</>
                      : <><strong>Efficiency.</strong> Rail cargo delivery takes longer than air delivery but much less time than sea transport.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <><strong>Безопасность.</strong> Международные железнодорожные перевозки считаются безопасными по сравнению с другими способами перемещения грузов. Риск аварий, а значит повреждения перемещаемых товаров намного меньше.</>
                      : <><strong>Safety.</strong> International rail transportation is considered safe compared to other methods of moving cargo. The risk of accidents, and therefore damage to transported goods, is much lower.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <><strong>Подходят для дальних расстояний.</strong> Маршруты подходят для межконтинентальных перевозок, обеспечивая быструю и надёжную доставку на большие расстояния.</>
                      : <><strong>Suitable for Long Distances.</strong> Routes are suitable for intercontinental transportation, providing fast and reliable delivery over long distances.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <><strong>Упрощённые таможенные процедуры.</strong> Поддержка упрощённых процедур таможенного оформления, что экономит время и деньги для бизнеса.</>
                      : <><strong>Simplified Customs Procedures.</strong> Support for simplified customs clearance procedures, saving time and money for businesses.</>
                    }
                  </li>
                </ul>
                
                <div className="bg-primary-50 p-6 rounded-lg mb-6">
                  <p className="font-bold text-lg mb-2">
                    {isRussian ? 'Наше предложение:' : 'Our offer:'}
                  </p>
                  <p className="text-primary-900">
                    {isRussian 
                      ? <><strong>Компания ORION</strong> — это не просто перевозчик, а надежный партнер в организации железнодорожных перевозок, который помогает любому бизнесу расти. Мы гордимся высоким уровнем сервиса и ответственным подходом к каждому заказу. Независимо от того, какой груз вам нужно доставить и в какую страну, мы гарантируем профессиональный подход, оптимальные сроки и прозрачные тарифы.</>
                      : <><strong>ORION Company</strong> is not just a carrier, but a reliable partner in organizing rail transportation that helps any business grow. We are proud of our high level of service and responsible approach to each order. Regardless of what cargo you need to deliver and to which country, we guarantee a professional approach, optimal timeframes, and transparent rates.</>
                    }
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 flex-shrink-0">
                <div className="sticky top-32">
                  <img 
                    src={service?.iconImage}
                    alt={isRussian ? "Ж/д перевозки" : "Rail Freight"}
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

export default RailFreightDetailPage; 