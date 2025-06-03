import React from 'react';
import { 
  Truck, Plane, Train, Ship, FileCheck, 
  Warehouse, Barcode, Globe
} from 'lucide-react';

export const serviceData = [
  {
    id: 'road-freight',
    translationKey: 'roadFreight',
    icon: <Truck size={20} className="mr-2" />,
    backgroundImage: '/images/services/auto.jpg',
    iconImage: '/images/services/auto.jpg',
    relatedServices: ['customs', 'warehouse', 'marking'],
    detailPage: '/services/road-freight'
  },
  {
    id: 'air-freight',
    translationKey: 'airFreight',
    icon: <Plane size={20} className="mr-2" />,
    backgroundImage: '/images/services/avia.jpg',
    iconImage: '/images/services/avia.jpg',
    relatedServices: ['customs', 'outsourcing'],
    detailPage: '/services/air-freight'
  },
  {
    id: 'rail-freight',
    translationKey: 'railFreight',
    icon: <Train size={20} className="mr-2" />,
    backgroundImage: '/images/services/zhd.jpg',
    iconImage: '/images/services/zhd.jpg',
    relatedServices: ['customs', 'warehouse'],
    detailPage: '/services/rail-freight'
  },
  {
    id: 'sea-freight',
    translationKey: 'seaFreight',
    icon: <Ship size={20} className="mr-2" />,
    backgroundImage: '/images/services/sea.jpg',
    iconImage: '/images/services/sea.jpg',
    relatedServices: ['customs', 'warehouse'],
    detailPage: '/services/sea-freight'
  },
  {
    id: 'customs',
    translationKey: 'customs',
    icon: <FileCheck size={20} className="mr-2" />,
    backgroundImage: '/images/services/customs.jpg',
    iconImage: '/images/services/customs.jpg',
    relatedServices: ['road-freight', 'air-freight', 'sea-freight'],
    detailPage: '/services/customs'
  },
  {
    id: 'warehouse',
    translationKey: 'warehouse',
    icon: <Warehouse size={20} className="mr-2" />,
    backgroundImage: '/images/services/skladskaya-logistika.jpeg',
    iconImage: '/images/services/skladskaya-logistika.jpeg',
    relatedServices: ['road-freight', 'marking', 'outsourcing'],
    detailPage: '/services/warehouse'
  },
  {
    id: 'marking',
    translationKey: 'marking',
    icon: <Barcode size={20} className="mr-2" />,
    backgroundImage: '/images/services/markirovka.jpg',
    iconImage: '/images/services/markirovka.jpg',
    relatedServices: ['warehouse', 'outsourcing'],
    detailPage: '/services/marking'
  },
  {
    id: 'outsourcing',
    translationKey: 'outsourcing',
    icon: <Globe size={20} className="mr-2" />,
    backgroundImage: '/images/services/outsourcing.jpg',
    iconImage: '/images/services/outsourcing.jpg',
    relatedServices: ['customs', 'marking'],
    detailPage: '/services/outsourcing'
  }
];