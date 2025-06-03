import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import ServiceSection from '../components/ServiceSection';
import { serviceData } from '../utils/serviceData';

const MarkingDetailPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const service = serviceData.find(s => s.id === 'marking');
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
            {isRussian ? 'Маркировка товара' : 'Product Marking'}
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
                    ? <><strong>Маркировка товара</strong> — важный элемент логистической цепочки, который позволяет идентифицировать и отслеживать товары на всех этапах пути следования.</>
                    : <><strong>Product marking</strong> is an important element of the logistics chain that allows for the identification and tracking of goods at all stages of the journey.</>
                  }
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-secondary-800">
                  {isRussian ? 'Требования к маркировке товаров для грузоперевозок:' : 'Requirements for product marking for cargo transportation:'}
                </h3>
                <ul className="list-disc pl-8 mb-8 space-y-3">
                  <li>
                    {isRussian 
                      ? <>На маркировке должно быть указано <strong>название товара</strong>, его количество, масса и объём.</>
                      : <>The marking must indicate the <strong>product name</strong>, its quantity, weight, and volume.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <>Должны быть указаны <strong>данные отправителя и получателя</strong> товара.</>
                      : <>The <strong>sender and recipient information</strong> must be specified.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <>Должны быть указаны <strong>номер и дата накладной</strong>.</>
                      : <>The <strong>waybill number and date</strong> must be indicated.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <>Должен быть указан <strong>уникальный идентификационный код</strong> товара (например, штрих-код).</>
                      : <>A <strong>unique identification code</strong> for the product must be specified (e.g., barcode).</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <>Должны быть указаны <strong>условия хранения и транспортировки</strong> товара.</>
                      : <>The <strong>storage and transportation conditions</strong> of the product must be indicated.</>
                    }
                  </li>
                </ul>
                
                <h3 className="text-2xl font-bold mb-4 text-secondary-800">
                  {isRussian ? 'Виды маркировки:' : 'Types of marking:'}
                </h3>
                <ul className="list-disc pl-8 mb-8 space-y-3">
                  <li>
                    {isRussian 
                      ? <><strong>Отправительская</strong> — дублирует информацию из накладной для идентификации элементов партии.</>
                      : <><strong>Sender's marking</strong> — duplicates information from the waybill to identify elements of the batch.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <><strong>Специальная</strong> — определяет правила эксплуатации грузов (хранение, транспортировка, погрузка, выгрузка).</>
                      : <><strong>Special marking</strong> — defines the rules for cargo handling (storage, transportation, loading, unloading).</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <><strong>Товарная</strong> — содержит информацию о производителе, наименовании, специфических характеристиках.</>
                      : <><strong>Product marking</strong> — contains information about the manufacturer, name, and specific characteristics.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <><strong>Транспортная</strong> — информирует о количестве товара, регистрационном номере, кодах маркировки товаров и других идентификационных сведениях.</>
                      : <><strong>Transport marking</strong> — informs about the quantity of goods, registration number, product marking codes, and other identification information.</>
                    }
                  </li>
                </ul>
                
                <div className="bg-red-50 p-6 rounded-lg mb-8">
                  <p className="text-red-700 font-bold">
                    {isRussian 
                      ? 'Важно! Отсутствие маркировки может повлечь штраф или уголовную ответственность.'
                      : 'Important! Absence of marking can result in fines or criminal liability.'
                    }
                  </p>
                </div>
                
                <p className="mb-6">
                  {isRussian 
                    ? 'Правильная маркировка не только обеспечивает сохранность и безопасность товаров в процессе транспортировки, но и помогает избежать правовых проблем. Например, неправильная маркировка и упаковка товаров может привести к нарушению таможенных правил, что может привести к штрафам и другим правовым последствиям.'
                    : 'Proper marking not only ensures the safety and security of goods during transportation but also helps avoid legal problems. For example, incorrect marking and packaging of goods can lead to violations of customs regulations, which can result in fines and other legal consequences.'
                  }
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-secondary-800">
                  {isRussian ? 'Система "Честный знак"' : 'The "Honest Mark" System'}
                </h3>
                <p className="mb-6">
                  {isRussian 
                    ? 'Маркировка «Честный знак» — важный этап в организации импорта в Россию. Система позволяет отследить весь путь товара: от производителя до конечного потребителя.'
                    : 'The "Honest Mark" labeling is an important stage in organizing imports to Russia. The system allows tracking the entire path of the product: from the manufacturer to the end consumer.'
                  }
                </p>
                
                <p className="mb-6">
                  {isRussian 
                    ? <>Каждый товар, подлежащий обязательной маркировке, получает <strong>контрольный идентификационный знак (КИЗ)</strong>. Это уникальный код, который содержит ключевую информацию о товаре, его происхождении и перемещении.</>
                    : <>Each product subject to mandatory marking receives a <strong>control identification mark (CIM)</strong>. This is a unique code that contains key information about the product, its origin, and movement.</>
                  }
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-secondary-800">
                  {isRussian ? 'Преимущества маркировки для бизнеса:' : 'Benefits of marking for business:'}
                </h3>
                <ul className="list-disc pl-8 mb-8 space-y-3">
                  <li>
                    {isRussian 
                      ? <><strong>Рост доверия и продаж.</strong> Маркированные товары вызывают больше доверия у покупателей.</>
                      : <><strong>Increased trust and sales.</strong> Marked products inspire more trust from customers.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <><strong>Защита от контрафакта.</strong> Система исключает нелегальную продукцию.</>
                      : <><strong>Protection against counterfeiting.</strong> The system excludes illegal products.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <><strong>Прозрачность поставок.</strong> Товар можно отследить от производителя до магазина.</>
                      : <><strong>Supply transparency.</strong> Products can be tracked from the manufacturer to the store.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <><strong>Оптимизация логистики.</strong> Снижаются риски задержек при таможенном оформлении.</>
                      : <><strong>Logistics optimization.</strong> Reduced risks of delays in customs clearance.</>
                    }
                  </li>
                </ul>
                
                <h3 className="text-2xl font-bold mb-4 text-secondary-800">
                  {isRussian ? 'Где наносится маркировка:' : 'Where marking is applied:'}
                </h3>
                <p className="mb-4">
                  {isRussian 
                    ? 'Маркировка товаров, ввозимых в РФ, должна быть сделана до прохождения таможенного оформления. Обычно её наносят:'
                    : 'Marking of goods imported to the Russian Federation must be done before customs clearance. Usually, it is applied:'
                  }
                </p>
                <ul className="list-disc pl-8 mb-8 space-y-3">
                  <li>
                    {isRussian 
                      ? <><strong>На производстве за границей.</strong> Такой подход больше всего подходит для крупных партий товаров с регулярными поставками.</>
                      : <><strong>At production facilities abroad.</strong> This approach is most suitable for large batches of goods with regular supplies.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <><strong>На зарубежном складе консолидации.</strong> Логистический партнёр может организовать процесс нанесения маркировки на одном из своих складов.</>
                      : <><strong>At a foreign consolidation warehouse.</strong> A logistics partner can organize the marking process at one of their warehouses.</>
                    }
                  </li>
                  <li>
                    {isRussian 
                      ? <><strong>На таможенном складе в России.</strong> Если маркировка не была выполнена за рубежом, её можно организовать на этапе таможенного оформления.</>
                      : <><strong>At a customs warehouse in Russia.</strong> If marking was not done abroad, it can be organized during the customs clearance stage.</>
                    }
                  </li>
                </ul>
                
                <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                  <p className="font-semibold">
                    {isRussian 
                      ? 'Несоблюдение требований системы «Честный знак» может привести к серьёзным юридическим, финансовым и репутационным последствиям. Законодательство Российской Федерации строго регламентирует правила обращения маркированных товаров, и любое их нарушение несёт риски для участников внешнеэкономической деятельности.'
                      : 'Non-compliance with the requirements of the "Honest Mark" system can lead to serious legal, financial, and reputational consequences. The legislation of the Russian Federation strictly regulates the rules for handling marked goods, and any violation carries risks for participants in foreign economic activity.'
                    }
                  </p>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg mb-6">
                  <p className="font-bold text-lg mb-2">
                    {isRussian ? 'Наше предложение:' : 'Our offer:'}
                  </p>
                  <p className="text-primary-900">
                    {isRussian 
                      ? <>Специалисты компании <strong>ORION</strong> знают о видах и процессе маркировки товаров ВСЁ, и готовы взять на себя проверку существующей маркировки товаров КЛИЕНТА, а в случае необходимости организовать нанесения на товар ЛЮБОЙ новой маркировки под потребности каждого КЛИЕНТА на любом этапе транспортной логистики.</>
                      : <>Specialists of <strong>ORION</strong> company know EVERYTHING about the types and process of product marking, and are ready to take on checking the existing marking of CLIENT's products, and if necessary, organize the application of ANY new marking on the product according to the needs of each CLIENT at any stage of transport logistics.</>
                    }
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 flex-shrink-0">
                <div className="sticky top-32">
                  <img 
                    src={service?.iconImage}
                    alt={isRussian ? "Маркировка товара" : "Product Marking"}
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

export default MarkingDetailPage; 