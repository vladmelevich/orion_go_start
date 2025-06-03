import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-secondary-900"
        style={{
          backgroundImage: `linear-gradient(rgba(38, 70, 83, 0.85), rgba(38, 70, 83, 0.9)), url(https://images.pexels.com/photos/7824977/pexels-photo-7824977.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            {t('contact.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-gray-200 animate-slide-up">
            {t('contact.subtitle')}
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-primary-100 rounded-full text-primary mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('contact.address')}</h3>
              <p className="text-gray-600">
                141401, Московская область,<br />г. Химки, ул. Рабочая, д.2А,<br />корпус 26, офис 107
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-primary-100 rounded-full text-primary mb-4">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('contact.phone')}</h3>
              <p className="text-gray-600">
                <a href="tel:+74951434355" className="hover:text-primary transition-colors">
                  +7 495 143-43-55
                </a>
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-primary-100 rounded-full text-primary mb-4">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('contact.email')}</h3>
              <p className="text-gray-600">
                <a href="mailto:kv@logiversa.com" className="hover:text-primary transition-colors">
                  kv@logiversa.com
                </a>
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-primary-100 rounded-full text-primary mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('contact.workingHours')}</h3>
              <p className="text-gray-600">
                {t('contact.mondayFriday')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-secondary mb-6">{t('contact.formTitle')}</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md text-green-700">
                    Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
                    Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                      {t('contact.nameLabel')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                      {t('contact.emailLabel')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                      {t('contact.phoneLabel')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                      {t('contact.messageLabel')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="input-field"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className={`btn btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Отправка...' : t('contact.submitButton')}
                  </button>
                </form>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <h2 className="text-2xl font-bold text-secondary mb-6">{t('contact.location')}</h2>
              <div className="bg-white p-4 rounded-xl shadow-md h-[450px] overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2236.5594267899454!2d37.44111937691172!3d55.90191537489378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b53845747acc39%3A0x2e4f0468d04b4f18!2z0YPQuy4g0KDQsNCx0L7Rh9Cw0Y8sIDLQkCwg0LrQvtGA0L_Rg9GBIDI2LCDQpdC40LzQutC4LCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCAxNDE0MDE!5e0!3m2!1sru!2sru!4v1698567698890!5m2!1sru!2sru" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Местоположение компании ORION"
                ></iframe>
              </div>
              <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2">{t('contact.address')}</h3>
                <p className="text-gray-700">
                  141401, Московская область,<br />
                  г. Химки, ул. Рабочая, д.2А, корпус 26, офис 107
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;