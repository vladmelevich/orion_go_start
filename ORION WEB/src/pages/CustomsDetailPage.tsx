import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import ServiceSection from '../components/ServiceSection';
import { serviceData } from '../utils/serviceData';

const CustomsDetailPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const service = serviceData.find(s => s.id === 'customs');
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
            {isRussian ? 'Таможенное оформление' : 'Customs Clearance Services'}
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
                    ? <><strong>Услуги по таможенному оформлению</strong> позволяют оптимизировать бизнес-процессы и сэкономить время. Специалисты компании ORION обеспечивают быстрое и точное оформление грузов и товаров на всех этапах таможенного контроля.</>
                    : <><strong>Customs clearance services</strong> help optimize business processes and save time. ORION company specialists ensure fast and accurate processing of cargo and goods at all stages of customs control.</>
                  }
                </p>
                
                <p className="mb-6 text-lg">
                  {isRussian 
                    ? 'Процедуру таможенного оформления проходят импортные и экспортные товары при пересечении границы России или Таможенного союза. Владельцу груза следует своевременно зарегистрировать ввозимую/вывозимую продукцию, получить необходимые документы.'
                    : 'Import and export goods undergo customs clearance procedures when crossing the border of Russia or the Customs Union. The cargo owner should timely register imported/exported products and obtain the necessary documents.'
                  }
                </p>
                
                <p className="mb-6 text-lg">
                  {isRussian 
                    ? 'Зачастую у компаний и предпринимателей возникают трудности с порядком оформления партии товаров, что приводит к задержке грузов на границе и другим проблемам с прохождением таможни. В итоге вместо прибыли бизнес терпит убытки, особенно если перевозится товар с ограниченным сроком хранения.'
                    : 'Companies and entrepreneurs often face difficulties with the procedure for processing shipments, which leads to cargo delays at the border and other problems with customs clearance. As a result, instead of profit, businesses suffer losses, especially if goods with a limited shelf life are being transported.'
                  }
                </p>
                
                <div className="bg-primary-50 p-6 rounded-lg mb-8">
                  <p className="text-lg text-primary-900">
                    {isRussian 
                      ? <><strong>Компания ORION</strong> занимается международными грузоперевозками с 2014 г, имеет опыт работы с любыми грузами. Мы гарантируем грамотное оформление всех документов и быстрое прохождение таможни. Обычно процедура таможенного оформления завершается за сутки при наличии всех заранее подготовленных разрешительных документов.</>
                      : <><strong>ORION Company</strong> has been engaged in international cargo transportation since 2014 and has experience with all types of cargo. We guarantee proper preparation of all documents and quick customs clearance. Usually, the customs clearance procedure is completed within 24 hours if all pre-prepared authorization documents are available.</>
                    }
                  </p>
                </div>
                
                <p className="mb-6 text-lg">
                  {isRussian 
                    ? 'Наша компания обладает богатым опытом в области таможенного оформления, что позволяет нам предоставлять высококачественные услуги на рынке логистики.'
                    : 'Our company has extensive experience in customs clearance, which allows us to provide high-quality services in the logistics market.'
                  }
                </p>
                
                <p className="mb-6 text-lg">
                  {isRussian 
                    ? 'Мы предоставляем полный спектр таможенных услуг в РФ, начиная с консультаций по таможенным вопросам и заканчивая полным сопровождением грузов через таможенные процедуры. Наша команда профессионалов заботится о каждом этапе процесса, чтобы обеспечить своим Клиентам безопасность и эффективность во всех вопросах.'
                    : 'We provide a full range of customs services in the Russian Federation, from consultations on customs issues to full support of goods through customs procedures. Our team of professionals takes care of every stage of the process to ensure safety and efficiency for our Clients in all matters.'
                  }
                </p>
                
                <p className="mb-6 text-lg">
                  {isRussian 
                    ? 'Наша цель - сделать весь процесс таможенного оформления максимально простым и удобным для наших Клиентов.'
                    : 'Our goal is to make the entire customs clearance process as simple and convenient as possible for our Clients.'
                  }
                </p>
                
                <p className="mb-6 text-lg">
                  {isRussian 
                    ? 'Мы стремимся к долгосрочным отношениям и всегда готовы предложить индивидуальный подход к каждому заказу. Доверьте нам свои таможенные нужды, и мы сделаем все возможное, чтобы обеспечить вам беззаботное и успешное прохождение таможенных процедур.'
                    : 'We strive for long-term relationships and are always ready to offer an individual approach to each order. Entrust us with your customs needs, and we will do everything possible to ensure you have a worry-free and successful customs clearance process.'
                  }
                </p>
              </div>
              <div className="md:w-1/3 flex-shrink-0">
                <div className="sticky top-32">
                  <img 
                    src={service?.iconImage}
                    alt={isRussian ? "Таможенное оформление" : "Customs Clearance"}
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

export default CustomsDetailPage; 