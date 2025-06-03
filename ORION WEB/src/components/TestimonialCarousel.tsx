import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  position: string;
  rating?: number;
  image?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  // Определение размеров и количества видимых карточек
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setContainerWidth(containerWidth);
        
        // Определяем количество видимых карточек в зависимости от ширины экрана
        let newVisibleCards = 2; // Уменьшаем с 3 до 2, чтобы карточки были шире
        if (window.innerWidth < 768) {
          newVisibleCards = 1;
        } else if (window.innerWidth < 1280) {
          newVisibleCards = 1;
        } else if (window.innerWidth < 1536) {
          newVisibleCards = 2;
        }
        
        setVisibleCards(newVisibleCards);
        // Ширина карточки с учетом отступов
        setCardWidth(containerWidth / newVisibleCards);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const scrollNext = () => {
    if (!cardsContainerRef.current) return;
    
    // Переходим к следующей карточке
    const nextPosition = scrollPosition + cardWidth;
    // Если достигнут конец, переходим в начало
    if (nextPosition >= cardWidth * testimonials.length) {
      setScrollPosition(0);
    } else {
      setScrollPosition(nextPosition);
    }
  };

  const scrollPrev = () => {
    if (!cardsContainerRef.current) return;
    
    // Переходим к предыдущей карточке
    const prevPosition = scrollPosition - cardWidth;
    // Если достигнуто начало, переходим в конец
    if (prevPosition < 0) {
      setScrollPosition(cardWidth * (testimonials.length - visibleCards));
    } else {
      setScrollPosition(prevPosition);
    }
  };

  // Автоматическое переключение слайдов
  useEffect(() => {
    const autoChangeTimer = setInterval(() => {
      scrollNext();
    }, 8000);

    return () => clearInterval(autoChangeTimer);
  }, [scrollPosition, cardWidth, testimonials.length]);

  // Получение случайных аватаров для отзывов, которые не имеют изображений
  const getRandomAvatar = (name: string) => {
    const colors = ['#4F46E5', '#16A34A', '#EA580C', '#0891B2', '#9333EA', '#E11D48'];
    const index = name.length % colors.length;
    return colors[index];
  };

  // Рейтинг в виде звезд
  const renderRating = (rating: number = 5) => {
    return (
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-1`}
          />
        ))}
      </div>
    );
  };

  if (!testimonials.length) return null;

  // Расширим массив отзывов, если их меньше 6
  const extendedTestimonials = [...testimonials];
  while (extendedTestimonials.length < 6) {
    extendedTestimonials.push(...testimonials);
  }
  // Ограничим до 10 отзывов
  const displayedTestimonials = extendedTestimonials.slice(0, 10);

  return (
    <div className="relative pb-12" ref={containerRef}>
      {/* Кнопки навигации */}
      <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 left-0 right-0 z-10 px-2 md:px-8">
        <button 
          onClick={scrollPrev}
          className="p-4 rounded-full bg-white shadow-xl text-primary hover:bg-gray-50 transition-colors duration-300 focus:outline-none border border-gray-100"
          aria-label="Предыдущие отзывы"
        >
          <ChevronLeft size={28} />
        </button>
        <button 
          onClick={scrollNext}
          className="p-4 rounded-full bg-white shadow-xl text-primary hover:bg-gray-50 transition-colors duration-300 focus:outline-none border border-gray-100"
          aria-label="Следующие отзывы"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Контейнер с отзывами */}
      <div className="overflow-hidden">
        <div 
          ref={cardsContainerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${scrollPosition}px)`,
          }}
        >
          {displayedTestimonials.map((testimonial, index) => {
            const avatarColor = getRandomAvatar(testimonial.author);
            
            return (
              <div 
                key={index}
                className="flex-shrink-0 px-4"
                style={{ width: `${cardWidth}px` }}
              >
                <div className="bg-white rounded-xl shadow-xl h-full p-10 relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100">
                  {/* Фоновая цитата */}
                  <div className="absolute -right-6 -top-6 text-gray-100">
                    <Quote size={150} />
                  </div>
                  
                  {/* Содержимое */}
                  <div className="relative z-10">
                    {/* Рейтинг */}
                    {renderRating(testimonial.rating)}
                    
                    {/* Текст отзыва */}
                    <p className="text-lg md:text-xl text-gray-700 mb-10 line-clamp-6 leading-relaxed relative">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Информация об авторе */}
                    <div className="flex items-center mt-auto pt-5 border-t border-gray-100">
                      {testimonial.image ? (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-14 h-14 rounded-full object-cover"
                        />
                      ) : (
                        <div 
                          className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl"
                          style={{ backgroundColor: avatarColor }}
                        >
                          {testimonial.author.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div className="ml-4">
                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.author}</h4>
                        <p className="text-md text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Индикаторы */}
      <div className="flex justify-center mt-10">
        {Array.from({ length: Math.ceil(displayedTestimonials.length / visibleCards) }).map((_, groupIndex) => {
          const isActive = 
            scrollPosition >= groupIndex * cardWidth * visibleCards && 
            scrollPosition < (groupIndex + 1) * cardWidth * visibleCards;
          
          return (
            <button
              key={groupIndex}
              className={`mx-2 rounded-full transition-all duration-300 focus:outline-none ${
                isActive ? 'bg-primary w-12 h-3' : 'bg-gray-300 w-3 h-3'
              }`}
              onClick={() => {
                setScrollPosition(groupIndex * cardWidth * visibleCards);
              }}
              aria-label={`Перейти к группе отзывов ${groupIndex + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialCarousel; 