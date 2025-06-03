import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import { Link } from 'react-router-dom';

// Массив изображений для автоматической смены (тематика логистики и перевозок)
const images = [
  'https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?q=80&w=1920&auto=format&fit=crop', // Контейнерные перевозки
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop', // Грузовой самолет
  'https://images.unsplash.com/photo-1586768035422-5eee0a5fa618?q=80&w=1920&auto=format&fit=crop', // Железнодорожные перевозки
  'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1920&auto=format&fit=crop', // Автоперевозки
  'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1920&auto=format&fit=crop', // Морские перевозки
  'https://images.unsplash.com/photo-1570168215522-0ee12fd1f861?q=80&w=1920&auto=format&fit=crop', // Складское хранение
  'https://i.pinimg.com/736x/77/68/04/776804480b7eb5c2581da4df1d67ac7d.jpg', // Контейнерные перевозки 2
  'https://i.pinimg.com/736x/ff/82/f2/ff82f21f7b4bdb8931e992866d93adf2.jpg', // Логистический процесс
];

// Описания для каждого изображения (ключи для перевода)
const imageDescriptions = [
  'hero.slides.container',
  'hero.slides.air',
  'hero.slides.rail',
  'hero.slides.road',
  'hero.slides.sea',
  'hero.slides.warehouse',
  'hero.slides.container', // Используем то же описание для похожего типа
  'hero.slides.logistics' // Добавим новый ключ для логистического процесса
];

// Функция для предзагрузки изображений
const preloadImages = () => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  buttonLink?: string;
  buttonText?: string;
  interval?: number;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage = 'https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?q=80&w=1920&auto=format&fit=crop',
  buttonLink = '/',
  buttonText,
  interval = 5000,
}) => {
  const { t } = useTranslation();
  
  // Состояние для текущего и предыдущего изображения для анимации
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(backgroundImage || images[0]);
  const [prevImage, setPrevImage] = useState(backgroundImage || images[0]);
  const [transitioning, setTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});
  
  // Предзагрузка изображений при монтировании компонента
  useEffect(() => {
    // Создаем объект для отслеживания загрузки каждого изображения
    const loadedImages: Record<string, boolean> = {};
    
    const preload = () => {
      images.forEach((src) => {
        const img = new Image();
        img.onload = () => {
          loadedImages[src] = true;
          setImagesLoaded({...loadedImages});
        };
        img.src = src;
      });
    };
    
    preload();
  }, []);
  
  // Эффект для автоматической смены изображений с плавным переходом
  useEffect(() => {
    // Используем переданное фоновое изображение или первое из массива
    const initialIndex = backgroundImage ? images.indexOf(backgroundImage) : 0;
    setCurrentImageIndex(initialIndex >= 0 ? initialIndex : 0);
    setCurrentImage(backgroundImage || images[0]);
    
    const imageInterval = setInterval(() => {
      // Сначала сохраняем текущее изображение как предыдущее
      setPrevImage(currentImage);
      
      // Устанавливаем флаг перехода
      setTransitioning(true);
      
      // Меняем изображение через короткий таймаут, чтобы дать время CSS-анимации
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % images.length;
          setCurrentImage(images[newIndex]);
          return newIndex;
        });
        
        // Убираем флаг перехода через небольшую задержку
        setTimeout(() => {
          setTransitioning(false);
        }, 500);
      }, 500);
    }, interval);
    
    return () => clearInterval(imageInterval);
  }, [backgroundImage, currentImage, interval]);

  // Функция для ручного переключения слайдов
  const handleSlideChange = (index: number) => {
    if (index === currentImageIndex) return;
    
    // Сохраняем текущее изображение как предыдущее
    setPrevImage(currentImage);
    
    // Устанавливаем флаг перехода
    setTransitioning(true);
    
    // Меняем изображение через короткий таймаут
    setTimeout(() => {
      setCurrentImageIndex(index);
      setCurrentImage(images[index]);
      
      // Убираем флаг перехода через небольшую задержку
      setTimeout(() => {
        setTransitioning(false);
      }, 500);
    }, 50); // Уменьшаем задержку для более быстрой смены при клике
  };

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{ 
        height: 'calc(100vh - 60px)',
        marginTop: '60px',
      }}
    >
      {/* Фоновые изображения */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${prevImage})`,
          backgroundPosition: 'center',
          zIndex: "-2",
        }}
      />
      
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out ${
          transitioning ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `url(${currentImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          zIndex: "-1",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" style={{ zIndex: "0" }} />

      {/* Индикатор загрузки, если текущее изображение еще не загружено */}
      {!imagesLoaded[currentImage] && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Контент слайда */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-4xl text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fadeIn">
            {t(title)}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl lg:text-3xl mb-10 opacity-90 animate-fadeIn delay-300">
              {t(subtitle)}
            </p>
          )}
          {/* Описание текущего слайда */}
          <div className="text-lg md:text-xl mb-10 opacity-90 animate-fadeIn delay-200">
            {t(imageDescriptions[currentImageIndex])}
          </div>
          {buttonText && (
            <div className="animate-fadeIn delay-500">
              <Link to={buttonLink || '/'}>
                <Button variant="primary" size="lg">
                  {t(buttonText)}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      
      {/* Индикаторы слайдов */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <div 
            key={index}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentImageIndex ? 'w-8 bg-primary' : 'w-2 bg-white/60'
            }`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;