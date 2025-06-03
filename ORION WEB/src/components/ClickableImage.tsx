import React, { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ClickableImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

const ClickableImage: React.FC<ClickableImageProps> = ({ 
  src, 
  alt, 
  caption,
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Обработчик клавиши Escape для закрытия просмотрщика
  useEffect(() => {
    if (!isOpen) return;
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeFullscreen();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const openFullscreen = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <div 
        className={`overflow-hidden rounded-lg cursor-pointer transition-all group relative ${className}`}
        onClick={openFullscreen}
      >
        <figure className="relative">
          <img 
            src={src} 
            alt={alt} 
            className="w-full object-contain hover:opacity-90 transition-opacity"
            onLoad={handleImageLoad}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-0 group-hover:bg-opacity-30 transition-all">
            <span className="p-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn size={24} className="text-primary" />
            </span>
          </div>
          {caption && (
            <figcaption className="p-2 text-center text-sm text-gray-600">{caption}</figcaption>
          )}
        </figure>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-3 bg-black bg-opacity-50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              closeFullscreen();
            }}
            aria-label="Закрыть просмотр"
          >
            <X size={32} />
          </button>
          
          <div className="relative max-h-[90vh] max-w-[90vw] flex items-center justify-center">
            <img 
              src={src}
              alt={alt}
              className="max-h-[85vh] max-w-[85vw] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {caption && (
              <div className="absolute -bottom-12 left-0 right-0 text-center text-white text-lg bg-black bg-opacity-50 p-3 rounded">
                {caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ClickableImage; 