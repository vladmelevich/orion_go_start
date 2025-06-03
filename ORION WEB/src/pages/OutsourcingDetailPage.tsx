import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import ServiceSection from '../components/ServiceSection';
import { serviceData } from '../utils/serviceData';

const OutsourcingDetailPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const service = serviceData.find(s => s.id === 'outsourcing');
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
            {isRussian ? 'Аутсорсинг ВЭД' : 'Foreign Trade Outsourcing'}
          </h1>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="max-w-none flex-1">
                <p className="mb-6 text-lg">
                  {isRussian 
                    ? <><strong>Аутсорсинг ВЭД</strong> — услуга, которую предлагает компания ORION для своих Клиентов. Данная услуга включает в себя осуществление зарубежных закупок товаров для заказчика.</>
                    : <><strong>Foreign Trade Outsourcing</strong> is a service offered by ORION company for its Clients. This service includes the implementation of foreign purchases of goods for the customer.</>
                  }
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  {isRussian ? 'Некоторые задачи, которые мы выполняем:' : 'Some tasks we perform:'}
                </h3>
                <ul className="list-disc pl-6 mb-6 space-y-4">
                  <li className="mb-2 text-lg">
                    {isRussian 
                      ? 'исследование рынка, подбор поставщиков, проведение переговоров;'
                      : 'market research, supplier selection, conducting negotiations;'
                    }
                  </li>
                  <li className="mb-2 text-lg">
                    {isRussian 
                      ? 'составление и подписание договоров;'
                      : 'drawing up and signing contracts;'
                    }
                  </li>
                  <li className="mb-2 text-lg">
                    {isRussian 
                      ? 'отслеживание производства товара у поставщика;'
                      : 'tracking product manufacturing at the supplier;'
                    }
                  </li>
                  <li className="mb-2 text-lg">
                    {isRussian 
                      ? 'оплату товара, валютный контроль;'
                      : 'payment for goods, currency control;'
                    }
                  </li>
                  <li className="mb-2 text-lg">
                    {isRussian 
                      ? 'международную перевозку груза с оформлением страховки;'
                      : 'international cargo transportation with insurance arrangements;'
                    }
                  </li>
                  <li className="mb-2 text-lg">
                    {isRussian 
                      ? 'подготовку необходимой документации, в том числе для таможенного декларирования;'
                      : 'preparation of necessary documentation, including for customs declaration;'
                    }
                  </li>
                  <li className="mb-2 text-lg">
                    {isRussian 
                      ? 'прохождение таможенных процедур;'
                      : 'completion of customs procedures;'
                    }
                  </li>
                  <li className="mb-2 text-lg">
                    {isRussian 
                      ? 'работу с налоговыми и таможенными органами;'
                      : 'working with tax and customs authorities;'
                    }
                  </li>
                  <li className="mb-2 text-lg">
                    {isRussian 
                      ? 'предоставление отчётности.'
                      : 'providing reporting.'
                    }
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">
                  {isRussian ? 'Преимущества аутсорсинга ВЭД:' : 'Advantages of foreign trade outsourcing:'}
                </h3>
                <ul className="list-disc pl-6 mb-6 space-y-4">
                  <li className="mb-2 text-lg">
                    {isRussian 
                      ? <><strong>Экономия ресурсов.</strong> Можно не держать в штате специалистов по таможенному оформлению, сотрудников-логистов.</>
                      : <><strong>Resource savings.</strong> No need to keep customs clearance specialists and logistics staff on the payroll.</>
                    }
                  </li>
                  <li className="mb-2 text-lg">
                    {isRussian 
                      ? <><strong>Снижение рисков.</strong> Аутсорсинговые компании, как правило, имеют значительный опыт во внешнеторговых связях.</>
                      : <><strong>Risk reduction.</strong> Outsourcing companies typically have significant experience in foreign trade relations.</>
                    }
                  </li>
                  <li className="mb-2 text-lg">
                    {isRussian 
                      ? <><strong>Экономия времени.</strong> Компания может сконцентрироваться на главных задачах по продвижению и улучшению своего бизнеса, а мы позаботимся обо всём остальном.</>
                      : <><strong>Time savings.</strong> The company can focus on the main tasks of promoting and improving its business, while we take care of everything else.</>
                    }
                  </li>
                </ul>

                <p className="mb-6 text-lg">
                  {isRussian 
                    ? 'Стоимость аутсорсинга ВЭД складывается из суммарной цены груза, суммы и сроков заключённого договора, частоты поставок, перечня работ, которые передаются специалистам. Все расходы заблаговременно рассчитываются и согласовываются с клиентом.'
                    : 'The cost of foreign trade outsourcing consists of the total price of the cargo, the amount and terms of the concluded contract, the frequency of deliveries, and the list of tasks that are transferred to specialists. All expenses are calculated in advance and agreed upon with the client.'
                  }
                </p>
                <p className="mb-6 text-lg">
                  {isRussian 
                    ? 'Аутсорсер предоставляет заказчику подробную отчётность о расходовании средств и копии всей подтверждающей документации.'
                    : 'The outsourcer provides the customer with detailed reporting on the expenditure of funds and copies of all supporting documentation.'
                  }
                </p>
                <p className="mb-6 text-lg">
                  {isRussian 
                    ? 'Компания ORION готова взять на себя сопровождение внешнеэкономической деятельности своих Клиентов, от ведения переговоров с иностранными партнёрами до реализации товаров в РФ. Участие наших специалистов позволит повысить эффективность и прибыльность внешнеэкономической деятельности своих Клиентов, полностью исключить сопутствующие риски.'
                    : 'ORION Company is ready to take on the support of foreign economic activities of its Clients, from negotiating with foreign partners to selling goods in the Russian Federation. The participation of our specialists will improve the efficiency and profitability of the foreign economic activities of our Clients, completely eliminating the associated risks.'
                  }
                </p>
              </div>
              <div className="md:w-1/3 flex-shrink-0">
                <div className="sticky top-32">
                  <img 
                    src={service?.iconImage}
                    alt={isRussian ? "Аутсорсинг ВЭД" : "Foreign Trade Outsourcing"}
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

export default OutsourcingDetailPage; 