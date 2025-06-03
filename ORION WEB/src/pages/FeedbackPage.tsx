import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FeedbackPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      setFormData({ name: '', email: '', subject: '', message: '' });

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
          backgroundImage: `linear-gradient(rgba(38, 70, 83, 0.85), rgba(38, 70, 83, 0.9)), url(https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            {t('feedback.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-gray-200 animate-slide-up">
            {t('feedback.subtitle')}
          </p>
        </div>
      </div>

      {/* Feedback Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md">
            <p className="text-gray-700 mb-8">
              {t('feedback.description')}
            </p>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md text-green-700">
                {t('feedback.successMessage')}
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
                {t('feedback.errorMessage')}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  {t('feedback.nameLabel')}
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
                  {t('feedback.emailLabel')}
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
                <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                  {t('feedback.subjectLabel')}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                >
                  <option value="">Выберите тему обращения</option>
                  <option value="general">Общий вопрос</option>
                  <option value="road-freight">Автомобильные перевозки</option>
                  <option value="air-freight">Авиа перевозки</option>
                  <option value="rail-freight">Ж/д перевозки</option>
                  <option value="sea-freight">Морские перевозки</option>
                  <option value="customs">Таможенное оформление</option>
                  <option value="warehouse">Складские услуги</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  {t('feedback.messageLabel')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
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
                {isSubmitting ? 'Отправка...' : t('feedback.submitButton')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeedbackPage;