import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRussian = i18n.language === 'ru';

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-secondary-900"
        style={{
          backgroundImage: `linear-gradient(rgba(38, 70, 83, 0.85), rgba(38, 70, 83, 0.9)), url(https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            {t('about.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-gray-200 animate-slide-up">
            {t('about.subtitle')}
          </p>
        </div>
      </div>

      {/* Company History */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 lg:pr-16 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-secondary mb-6">{t('about.history')}</h2>
              <p className="text-gray-700 mb-6">
                {isRussian 
                  ? 'Основанная в 2014 году, компания ООО "ОРИОН" начала свою деятельность как небольшая экспедиторская фирма, специализирующаяся на грузоперевозках между Россией и странами СНГ. Благодаря профессионализму команды и клиентоориентированному подходу, компания быстро завоевала доверие клиентов и расширила географию своей деятельности.'
                  : 'Founded in 2014, ORION LLC began its operations as a small forwarding company specializing in cargo transportation between Russia and CIS countries. Thanks to the team\'s professionalism and customer-oriented approach, the company quickly gained the trust of clients and expanded the geography of its activities.'
                }
              </p>
              <p className="text-gray-700 mb-6">
                {isRussian 
                  ? 'К 2017 году "ОРИОН" уже предлагал полный спектр логистических услуг, включая международные перевозки всеми видами транспорта, таможенное оформление и складские услуги. Компания также начала развивать направление сертификации товаров и услуги по маркировке продукции.'
                  : 'By 2017, ORION was already offering a full range of logistics services, including international transportation by all modes of transport, customs clearance, and warehousing services. The company also began developing product certification and product marking services.'
                }
              </p>
              <p className="text-gray-700">
                {isRussian 
                  ? 'Сегодня ООО "ОРИОН" – это признанный эксперт в области логистики с глобальным охватом операций. Наша компания продолжает расширять спектр услуг, внедрять инновационные технологии и развивать партнерские отношения по всему миру, чтобы обеспечивать клиентам наиболее эффективные и надежные логистические решения.'
                  : 'Today, ORION LLC is a recognized expert in logistics with global operations coverage. Our company continues to expand its range of services, implement innovative technologies, and develop partnerships worldwide to provide clients with the most effective and reliable logistics solutions.'
                }
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg" 
                  alt={isRussian ? "История компании" : "Company History"} 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-6 shadow-lg animate-fade-in hidden md:block">
                  <div className="flex items-center">
                    <div className="mr-4 p-3 bg-primary-50 rounded-full text-primary">
                      <Users size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-xl text-secondary">30+</p>
                      <p className="text-gray-600">{isRussian ? "Специалистов по логистике" : "Logistics Experts"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Удалены секции Mission & Vision, Values и Stats */}
      
    </div>
  );
};

export default AboutPage;