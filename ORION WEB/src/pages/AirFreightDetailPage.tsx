import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import ServiceSection from '../components/ServiceSection';
import { serviceData } from '../utils/serviceData';

const AirFreightDetailPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const service = serviceData.find(s => s.id === 'air-freight');
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
            {isRussian ? 'Авиа перевозки' : 'Air Freight Services'}
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
                    ? 'Международные перевозки воздушным транспортом становятся всё более востребованными. Воздушный транспорт обеспечивает оперативную и надёжную доставку грузов по всему миру. Компания ORION, обладая многолетним опытом в сфере логистики, предлагает профессиональные услуги по организации авиаперевозок. Мы заботимся о том, чтобы каждый груз был доставлен безопасно и вовремя, вне зависимости от его объёма или специфики.'
                    : 'International air transportation is becoming increasingly in demand. Air transport provides prompt and reliable delivery of goods worldwide. ORION company, with years of experience in logistics, offers professional services for organizing air transportation. We ensure that each cargo is delivered safely and on time, regardless of its volume or specifics.'
                  }
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-secondary-800">
                  {isRussian 
                    ? 'Перевозки авиационным транспортом обладают рядом преимуществ:' 
                    : 'Air transportation offers several advantages:'}
                </h3>
                <ul className="list-disc pl-8 mb-8 space-y-3">
                  <li>
                    {isRussian 
                      ? <><strong>Быстрая доставка.</strong> Самолёты могут развивать скорость до 900 км/ч и выше, что позволяет значительно сократить время в пути по сравнению с наземными и водными видами транспорта.</>
                      : <><strong>Fast Delivery.</strong> Aircraft can reach speeds of up to 900 km/h and higher, which significantly reduces travel time compared to land and water transport.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <><strong>Дальность полёта.</strong> Современные самолёты способны преодолевать большие расстояния без дозаправки, что делает их идеальными для международных и межконтинентальных перелётов.</>
                      : <><strong>Flight Range.</strong> Modern aircraft are capable of covering long distances without refueling, making them ideal for international and intercontinental flights.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <><strong>Высокая надёжность.</strong> Авиаперевозки регулируются строгими международными стандартами, что минимизирует риски и обеспечивает безопасность пассажиров и грузов.</>
                      : <><strong>High Reliability.</strong> Air transportation is regulated by strict international standards, which minimizes risks and ensures the safety of passengers and cargo.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <><strong>Глобальная доступность.</strong> Аэропорты расположены по всему миру, что делает воздушный транспорт доступным практически в любой точке планеты.</>
                      : <><strong>Global Accessibility.</strong> Airports are located around the world, making air transport accessible almost anywhere on the planet.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <><strong>Возможность перевозки специальных грузов.</strong> Воздушный транспорт позволяет перевозить опасные вещества, медикаменты и медицинские изделия.</>
                      : <><strong>Ability to Transport Special Cargo.</strong> Air transport allows the transportation of dangerous substances, medications, and medical products.</>
                    }
                  </li>
                </ul>
                
                <div className="bg-primary-50 p-6 rounded-lg mb-6">
                  <p className="text-lg text-primary-900">
                    {isRussian 
                      ? <>Компания <strong>ORION</strong> предлагает клиентам экономичные и эффективные варианты международной авиа доставки генеральных, опасных грузов, а также грузов требующих особого режима перевозки. Мы можем доставить ваши грузы из любой точки мира.</>
                      : <>Company <strong>ORION</strong> offers clients economical and efficient options for international air delivery of general cargo, dangerous goods, as well as cargo requiring special transportation conditions. We can deliver your cargo from any point in the world.</>
                    }
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 flex-shrink-0">
                <div className="sticky top-32">
                  <img 
                    src={service?.iconImage}
                    alt={isRussian ? "Авиаперевозки" : "Air Freight"}
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

export default AirFreightDetailPage; 