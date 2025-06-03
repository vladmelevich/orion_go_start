import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className = '' }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  // Проверяем загрузку изображений при инициализации
  useEffect(() => {
    console.log('Изображения для галереи:', images);
    
    // Инициализация массива состояний загрузки
    setImagesLoaded(new Array(images.length).fill(false));
    
    // Предзагрузка изображений
    images.forEach((image, index) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => {
        console.log(`Изображение ${image.src} загружено успешно`);
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
      img.onerror = () => {
        console.error(`Ошибка загрузки изображения ${image.src}`);
      };
    });
  }, [images]);

  const openLightbox = (index: number) => {
    console.log(`Открытие лайтбокса с изображением ${index}`);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (images.length === 0) {
    console.warn('Компонент ImageGallery вызван без изображений');
    return null;
  }

  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${className}`}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-all border border-gray-200"
            onClick={() => openLightbox(index)}
          >
            <div className="relative w-full h-64">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                onLoad={() => console.log(`Миниатюра ${image.src} отображена`)}
                onError={(e) => {
                  console.error(`Ошибка при отображении миниатюры ${image.src}`);
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            {image.caption && (
              <div className="p-2 text-center text-sm text-gray-600">{image.caption}</div>
            )}
          </div>
        ))}
      </div>

      {/* Лайтбокс/модальное окно */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors"
            onClick={goToPrevImage}
          >
            <ChevronLeft size={48} />
          </button>
          
          <img 
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            className="max-h-[85vh] max-w-[85vw] object-contain"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              console.error(`Ошибка при отображении полноразмерного изображения ${images[currentImageIndex].src}`);
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors"
            onClick={goToNextImage}
          >
            <ChevronRight size={48} />
          </button>
          
          {images[currentImageIndex].caption && (
            <div className="absolute bottom-8 left-0 right-0 text-center text-white text-lg">
              {images[currentImageIndex].caption}
            </div>
          )}
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <div 
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'w-8 bg-primary' : 'w-2 bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery; 