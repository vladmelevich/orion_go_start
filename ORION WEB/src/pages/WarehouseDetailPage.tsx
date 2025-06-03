import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import ServiceSection from '../components/ServiceSection';
import { serviceData } from '../utils/serviceData';

const WarehouseDetailPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const service = serviceData.find(s => s.id === 'warehouse');
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
            {isRussian ? 'Складская логистика' : 'Warehouse Logistics'}
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
                    ? 'Складская логистика — важная часть цепочки поставок. Все товары, которые компания производит или закупает, нужно где-то хранить, вести их учёт, отгружать и доставлять клиентам.'
                    : 'Warehouse logistics is an important part of the supply chain. All goods that a company produces or purchases need to be stored somewhere, accounted for, shipped, and delivered to customers.'
                  }
                </p>
                
                <h3 className="text-xl font-semibold mb-4">
                  {isRussian ? 'Некоторые функции складской логистики:' : 'Some functions of warehouse logistics:'}
                </h3>
                <ul className="list-disc pl-6 mb-6 space-y-4">
                  <li className="mb-4 text-lg">
                    {isRussian 
                      ? <><strong>Приёмка и хранение товаров.</strong> С приёмки начинается процесс складской логистики. Нужно проверить количество и качество поступивших товаров и сопроводительные документы, выявить недостачи или брак. Затем товары размещают на складе с учётом их характеристик (габариты, условия хранения, оборачиваемость). Например, чем востребованнее товар, тем ближе к зоне отгрузки его размещают.</>
                      : <><strong>Receipt and storage of goods.</strong> The warehouse logistics process begins with reception. It is necessary to check the quantity and quality of the received goods and accompanying documents, identify shortages or defects. Then, goods are placed in the warehouse according to their characteristics (dimensions, storage conditions, turnover rate). For example, the more in-demand an item is, the closer to the shipping area it is placed.</>
                    }
                  </li>
                  <li className="mb-4 text-lg">
                    {isRussian 
                      ? <><strong>Комплектация и отгрузка заказов.</strong> На этом этапе товары отбирают по заказу клиента и готовят к отправке. После комплектации заказы проверяют, упаковывают и отправляют клиенту. Важно, чтобы на этом этапе не возникало задержек, а качество упаковки было таким, чтобы товары не пострадали при перевозке.</>
                      : <><strong>Order picking and shipping.</strong> At this stage, goods are selected according to the customer's order and prepared for shipment. After picking, orders are checked, packaged, and sent to the customer. It is important that there are no delays at this stage, and that the quality of packaging is such that the goods are not damaged during transportation.</>
                    }
                  </li>
                  <li className="mb-4 text-lg">
                    {isRussian 
                      ? <><strong>Контроль запасов.</strong> Товарные запасы нужно правильно планировать, чтобы не допустить ни дефицита товара, ни его избытка. Если запасов слишком много, растут затраты на хранение, а если их недостаточно — компания теряет продажи и срывает сроки поставок. Один из инструментов контроля запасов — инвентаризация. Это сверка фактического наличия товаров с их количеством, которое указано в учётных документах.</>
                      : <><strong>Inventory control.</strong> Stock levels need to be properly planned to prevent both shortages and excesses. If there is too much inventory, storage costs increase, and if there is not enough, the company loses sales and misses delivery deadlines. One of the inventory control tools is stocktaking. This is the verification of the actual presence of goods against their quantity indicated in accounting documents.</>
                    }
                  </li>
                </ul>
                
                <div className="bg-primary-50 p-6 rounded-lg mb-6">
                  <p className="text-lg mb-4">
                    {isRussian 
                      ? 'Компания ORION предоставляет своим Клиентам обширный комплекс складских услуг. В него входит ответственное хранение грузов на складах, формирование грузовых партий, управление товарными остатками и многое другое.'
                      : 'ORION Company provides its Clients with an extensive range of warehouse services. This includes responsible storage of goods in warehouses, formation of cargo batches, inventory management, and much more.'
                    }
                  </p>
                  <p className="text-lg">
                    {isRussian 
                      ? 'Мы оказываем услуги "3PL" оператора. Аббревиатура 3PL расшифровывается как Third Party Logistics, что в переводе с английского означает «логистика третьей стороны». Третьей стороной выступает компания, которая берет на себя выполнение логистических задач не профильных для основного вида деятельности партнера. Услуга 3PL — это возможность для наших клиентов сконцентрироваться на развитии своего бизнеса, передав управление товарными потоками в руки профессионалов из ORION.'
                      : 'We provide "3PL" operator services. The abbreviation 3PL stands for Third Party Logistics. The third party is a company that takes on logistical tasks that are not core to the partner\'s main business. The 3PL service is an opportunity for our clients to focus on developing their business, transferring the management of product flows to the hands of professionals from ORION.'
                    }
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 flex-shrink-0">
                <div className="sticky top-32">
                  <img 
                    src={service?.iconImage}
                    alt={isRussian ? "Складская логистика" : "Warehouse Logistics"}
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

export default WarehouseDetailPage; 