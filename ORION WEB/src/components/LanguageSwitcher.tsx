import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    // Установка языка из localStorage при монтировании компонента
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage && (savedLanguage === 'ru' || savedLanguage === 'en')) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
  };

  // Определяем текущий язык, по умолчанию ru
  const currentLanguage = i18n.language?.substring(0, 2) || 'ru';

  return (
    <div className="flex space-x-2">
      <button 
        className={`px-2 py-1 text-sm rounded transition-colors duration-300 ${currentLanguage === 'ru' ? 'bg-primary-50 text-primary font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
        onClick={() => changeLanguage('ru')}
        aria-label={t('common.russian')}
      >
        RU
      </button>
      <button 
        className={`px-2 py-1 text-sm rounded transition-colors duration-300 ${currentLanguage === 'en' ? 'bg-primary-50 text-primary font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
        onClick={() => changeLanguage('en')}
        aria-label={t('common.english')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;