import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown, Phone, Mail } from 'lucide-react';
import LogoIcon from './LogoIcon';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);

  // Улучшенная реализация для мобильных устройств
  const toggleMenu = () => {
    setIsOpen(prevState => {
      const newState = !prevState;
      // Блокировка скролла при открытом меню
      document.body.style.overflow = newState ? 'hidden' : 'auto';
      return newState;
    });
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  useEffect(() => {
    // Проверка начального положения прокрутки при загрузке страницы
    setIsScrolled(window.scrollY > 50);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Восстановление скролла при размонтировании компонента
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  // Обработчик клика вне меню
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!menuButtonRef.current || !navigationRef.current) return;
      
      // Проверка, является ли элемент, на котором произошло событие, потомком меню или кнопки
      const target = event.target as HTMLElement;
      if (
        !menuButtonRef.current.contains(target) && 
        !navigationRef.current.contains(target)
      ) {
        closeMenu();
      }
    };

    // Используем capture phase для перехвата событий до элементов меню
    document.addEventListener('mousedown', handleClickOutside, true);
    document.addEventListener('touchstart', handleClickOutside, true);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
      document.removeEventListener('touchstart', handleClickOutside, true);
    };
  }, [isOpen]);

  return (
    <header 
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-0' : 'bg-white/95 backdrop-blur-sm py-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[110px]">
          <NavLink to="/" className="flex items-center z-[45]" onClick={closeMenu}>
            <LogoIcon className="h-[50px] w-auto" />
          </NavLink>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6 text-gray-600">
            <a 
              href="tel:+74951434355" 
              className="flex items-center hover:text-primary transition-colors duration-300 text-sm"
            >
              <Phone size={16} className="mr-2" />
              +7 495 143-43-55
            </a>
            <a 
              href="mailto:kv@logiversa.com" 
              className="flex items-center hover:text-primary transition-colors duration-300 text-sm"
            >
              <Mail size={16} className="mr-2" />
              kv@logiversa.com
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? 'font-medium text-primary border-b-2 border-primary py-1 text-sm' 
                  : 'font-medium text-gray-700 hover:text-primary transition-colors duration-300 py-1 text-sm'
              }
            >
              {t('menu.home')}
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive 
                  ? 'font-medium text-primary border-b-2 border-primary py-1 text-sm' 
                  : 'font-medium text-gray-700 hover:text-primary transition-colors duration-300 py-1 text-sm'
              }
            >
              {t('menu.about')}
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                isActive 
                  ? 'font-medium text-primary border-b-2 border-primary py-1 text-sm' 
                  : 'font-medium text-gray-700 hover:text-primary transition-colors duration-300 py-1 text-sm'
              }
            >
              {t('menu.services')}
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive 
                  ? 'font-medium text-primary border-b-2 border-primary py-1 text-sm' 
                  : 'font-medium text-gray-700 hover:text-primary transition-colors duration-300 py-1 text-sm'
              }
            >
              {t('menu.contact')}
            </NavLink>
            <NavLink 
              to="/feedback" 
              className={({ isActive }) => 
                isActive 
                  ? 'font-medium text-primary border-b-2 border-primary py-1 text-sm' 
                  : 'font-medium text-gray-700 hover:text-primary transition-colors duration-300 py-1 text-sm'
              }
            >
              {t('menu.feedback')}
            </NavLink>

            <div className="relative ml-2">
              <button 
                className="flex items-center text-gray-700 hover:text-primary transition-colors duration-300 px-2 py-1 border border-gray-200 rounded-full text-xs"
                onClick={toggleLangMenu}
              >
                <Globe size={14} className="mr-1" />
                <span className="font-medium">{i18n.language === 'ru' ? 'RU' : 'EN'}</span>
                <ChevronDown size={12} className="ml-1" />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-1 py-1 w-32 bg-white rounded-md shadow-lg z-50 text-sm">
                  <button 
                    className={`block px-3 py-1 text-sm w-full text-left ${i18n.language === 'ru' ? 'text-primary font-medium' : 'text-gray-700'} hover:bg-gray-50`}
                    onClick={() => changeLanguage('ru')}
                  >
                    {t('common.russian')}
                  </button>
                  <button 
                    className={`block px-3 py-1 text-sm w-full text-left ${i18n.language === 'en' ? 'text-primary font-medium' : 'text-gray-700'} hover:bg-gray-50`}
                    onClick={() => changeLanguage('en')}
                  >
                    {t('common.english')}
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            ref={menuButtonRef}
            className="md:hidden p-3 rounded-lg text-primary z-[60] flex items-center justify-center active:bg-gray-100"
            onClick={toggleMenu}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            type="button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          ref={navigationRef}
          className={`fixed inset-0 bg-white md:hidden transition-transform duration-300 ease-in-out z-[50] pt-[110px] ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: 0 }}
        >
          <div className="h-full flex flex-col pt-4 pb-6 px-6 overflow-y-auto">
            
            <nav className="flex flex-col items-center space-y-6 mt-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive 
                    ? 'font-semibold text-primary text-xl w-full text-center py-2' 
                    : 'font-medium text-gray-700 hover:text-primary text-xl w-full text-center py-2'
                }
                onClick={closeMenu}
              >
                {t('menu.home')}
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive 
                    ? 'font-semibold text-primary text-xl w-full text-center py-2' 
                    : 'font-medium text-gray-700 hover:text-primary text-xl w-full text-center py-2'
                }
                onClick={closeMenu}
              >
                {t('menu.about')}
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  isActive 
                    ? 'font-semibold text-primary text-xl w-full text-center py-2' 
                    : 'font-medium text-gray-700 hover:text-primary text-xl w-full text-center py-2'
                }
                onClick={closeMenu}
              >
                {t('menu.services')}
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive 
                    ? 'font-semibold text-primary text-xl w-full text-center py-2' 
                    : 'font-medium text-gray-700 hover:text-primary text-xl w-full text-center py-2'
                }
                onClick={closeMenu}
              >
                {t('menu.contact')}
              </NavLink>
              <NavLink 
                to="/feedback" 
                className={({ isActive }) => 
                  isActive 
                    ? 'font-semibold text-primary text-xl w-full text-center py-2' 
                    : 'font-medium text-gray-700 hover:text-primary text-xl w-full text-center py-2'
                }
                onClick={closeMenu}
              >
                {t('menu.feedback')}
              </NavLink>
            </nav>
            
            {/* Contact Info in Mobile Menu */}
            <div className="mt-12 flex flex-col items-center space-y-4 text-gray-700">
              <a href="tel:+74951434355" className="flex items-center text-primary">
                <Phone size={18} className="mr-2" />
                +7 495 143-43-55
              </a>
              <a href="mailto:kv@logiversa.com" className="flex items-center text-primary">
                <Mail size={18} className="mr-2" />
                kv@logiversa.com
              </a>
            </div>
            
            <div className="flex justify-center space-x-4 mt-10">
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium ${i18n.language === 'ru' ? 'bg-primary text-white' : 'border border-gray-200 text-gray-700'}`}
                onClick={() => {
                  changeLanguage('ru');
                  closeMenu();
                }}
              >
                {t('common.russian')}
              </button>
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium ${i18n.language === 'en' ? 'bg-primary text-white' : 'border border-gray-200 text-gray-700'}`}
                onClick={() => {
                  changeLanguage('en');
                  closeMenu();
                }}
              >
                {t('common.english')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;