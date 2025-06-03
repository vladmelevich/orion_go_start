import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Check, ArrowRight, ZoomIn, X } from 'lucide-react';
import ServiceSection from '../components/ServiceSection';
import ClickableImage from '../components/ClickableImage';
import { serviceData } from '../utils/serviceData';

const SeaDetailPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const service = serviceData.find(s => s.id === 'sea-freight');
  const isRussian = i18n.language === 'ru';

  // URL изображений размеров контейнеров и схемы размещения паллет
  const containerSizesImageUrl = 'https://vce39.ru/sites/default/files/vidy-kontejnerov.png';
  const palletLayoutImageUrl = 'https://artkontinent.ru/upload/blog/m_1_1656516123.png';
  
  // URL новых изображений (внешние URL)
  const containerTypesImageUrl = 'https://t-broker.ru/upload/medialibrary/9b9/9b9159b70563c542d7879baffdac0ff0.png';
  const cargoShipImageUrl = 'https://q5.itc.cn/q_70/images01/20241105/a36356d61a82477cbfe19bd1de20cd91.png';

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

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
            {isRussian ? 'Морские перевозки' : 'Sea Freight Services'}
          </h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="max-w-none flex-1">
                <p className="mb-6 text-lg">
                  {isRussian 
                    ? 'Морские перевозки — один из наиболее значимых и популярных способов доставки грузов на большие расстояния по всему миру. Этот вид транспорта используется для перевозки широкого спектра товаров — от продовольственных продуктов до машиностроительного оборудования.'
                    : 'Sea freight is one of the most significant and popular methods of delivering cargo over long distances worldwide. This type of transport is used to carry a wide range of goods — from food products to engineering equipment.'
                  }
                </p>
                
                <h3 className="text-xl font-semibold mb-4">
                  {isRussian ? 'Особенности морских перевозок:' : 'Features of sea freight:'}
                </h3>
                <ul className="list-disc pl-6 mb-6 space-y-4">
                  <li className="mb-2 text-lg">
                    {isRussian 
                      ? <><strong>Универсальность.</strong> Морем допускается перевозить грузы любого типа (кроме запрещённых), тоннажа, габаритов.</>
                      : <><strong>Versatility.</strong> Sea transport allows carrying cargo of any type (except prohibited ones), tonnage, and dimensions.</>
                    }
                  </li>
                  <li className="mb-2 text-lg">
                    {isRussian 
                      ? <><strong>Свобода в выборе маршрута.</strong> Движение грузовых судов не зависит от наличия дорог и обладает значительной гибкостью в выборе путей следования.</>
                      : <><strong>Freedom in route selection.</strong> The movement of cargo ships does not depend on the availability of roads and offers significant flexibility in choosing travel routes.</>
                    }
                  </li>
                  <li className="mb-2 text-lg">
                    {isRussian 
                      ? <><strong>Безопасность.</strong> Морские суда считаются сравнительно более надёжными, чем другие виды транспорта, а прочные надёжные контейнеры защищают груз от порчи и повреждения.</>
                      : <><strong>Safety.</strong> Sea vessels are considered comparatively more reliable than other types of transport, and strong, reliable containers protect cargo from damage and deterioration.</>
                    }
                  </li>
                  <li className="mb-2 text-lg">
                    {isRussian 
                      ? <><strong>Экономичность.</strong> Перевозка грузов морем часто обходится значительно дешевле, чем другими видами транспорта, особенно для крупногабаритных и тяжёлых грузов.</>
                      : <><strong>Cost-effectiveness.</strong> Shipping cargo by sea is often significantly cheaper than by other modes of transport, especially for large and heavy cargo.</>
                    }
                  </li>
                </ul>
                
                <div className="bg-primary-50 p-6 rounded-lg mb-6">
                  <p className="text-lg mb-4">
                    {isRussian 
                      ? 'Для клиентов, которым требуется качественная организация международных перевозок морским транспортом, наша компания ORION предлагает полный набор услуг. Мы разработаем оптимальный маршрут для вашего груза, поможем с подготовкой всех необходимых документов и обеспечим сопровождение на всём пути следования.'
                      : 'For clients who require high-quality organization of international sea transportation, our company ORION offers a full range of services. We will develop the optimal route for your cargo, help with the preparation of all necessary documents, and provide support throughout the entire journey.'
                    }
                  </p>
                  <p className="text-lg">
                    {isRussian 
                      ? 'С ORION каждый КЛИЕНТ может быть уверен, что его товар будет доставлен безопасно и точно в срок. Наша команда профессионалов готова предложить лучшие логистические решения для любого бизнеса, минимизируя затраты и риски при международных перевозках.'
                      : 'With ORION, each CLIENT can be confident that their goods will be delivered safely and exactly on time. Our team of professionals is ready to offer the best logistics solutions for any business, minimizing costs and risks in international transportation.'
                    }
                  </p>
                </div>
                
                <p className="mb-4">
                  {isRussian 
                    ? 'С компанией ORION морские перевозки становятся надежным и выгодным способом доставки ваших грузов в любую точку мира. Доверьте нам свою логистику, и мы обеспечим безопасность и своевременность доставки.'
                    : 'With ORION company, sea freight becomes a reliable and cost-effective way to deliver your cargo to any point in the world. Entrust us with your logistics, and we will ensure the safety and timeliness of delivery.'
                  }
                </p>
                
                {/* Блок с типами контейнерных перевозок */}
                <div className="mt-8 mb-10">
                  <h3 className="text-xl font-bold text-primary mb-6">
                    {isRussian ? 'Типы контейнерных перевозок' : 'Types of Container Transportation'}
                  </h3>
                  <p className="mb-6">
                    {isRussian 
                      ? 'Компания ORION предлагает различные типы контейнерных перевозок. Ознакомьтесь с основными видами контейнеров и особенностями грузоперевозок морским транспортом.'
                      : 'ORION company offers various types of container transportation. Familiarize yourself with the main types of containers and features of cargo transportation by sea.'
                    }
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div 
                        className="cursor-pointer group relative"
                        onClick={() => openImageModal(containerTypesImageUrl)}
                      >
                        <img 
                          src={containerTypesImageUrl} 
                          alt={isRussian ? "Типы морских контейнеров" : "Types of sea containers"} 
                          className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white bg-primary bg-opacity-90 p-3 rounded-full">
                            <ZoomIn size={24} />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                          <h3 className="text-white font-semibold text-lg">
                            {isRussian ? 'Виды и размеры морских контейнеров' : 'Types and sizes of sea containers'}
                          </h3>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-gray-600">
                          {isRussian 
                            ? 'Различные типы контейнеров для морских перевозок, включая стандартные, высокие, рефрижераторные и специальные контейнеры.'
                            : 'Various types of containers for sea transportation, including standard, high-cube, refrigerated, and special containers.'
                          }
                        </p>
                      </div>
                    </div>
                    
                    <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div 
                        className="cursor-pointer group relative"
                        onClick={() => openImageModal(cargoShipImageUrl)}
                      >
                        <img 
                          src={cargoShipImageUrl} 
                          alt={isRussian ? "Морское судно с контейнерами" : "Cargo ship with containers"} 
                          className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white bg-primary bg-opacity-90 p-3 rounded-full">
                            <ZoomIn size={24} />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                          <h3 className="text-white font-semibold text-lg">
                            {isRussian ? 'Контейнеровоз в порту' : 'Container ship in port'}
                          </h3>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-gray-600">
                          {isRussian 
                            ? 'Современные контейнеровозы способны перевозить тысячи стандартизированных контейнеров, обеспечивая эффективную доставку грузов по всему миру.'
                            : 'Modern container ships can carry thousands of standardized containers, providing efficient cargo delivery worldwide.'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-center text-primary font-medium mb-4 flex items-center justify-center">
                    <ZoomIn size={20} className="mr-2" />
                    {isRussian ? 'Нажмите на изображение для увеличения' : 'Click on the image to enlarge'}
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 flex-shrink-0">
                <div className="sticky top-32">
                  <img 
                    src={service?.iconImage}
                    alt={isRussian ? "Морские перевозки" : "Sea Freight"}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
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

      {/* Модальное окно для просмотра изображений */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-3 bg-black bg-opacity-50 rounded-full"
            onClick={closeImageModal}
            aria-label={isRussian ? "Закрыть просмотр" : "Close view"}
          >
            <X size={32} />
          </button>
          
          <div className="relative max-h-[90vh] max-w-[90vw] flex items-center justify-center">
            <img 
              src={selectedImage}
              alt={isRussian ? "Увеличенное изображение" : "Enlarged image"} 
              className="max-h-[85vh] max-w-[85vw] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SeaDetailPage; 