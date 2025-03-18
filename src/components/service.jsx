import { useLanguage } from '../utils/LanguageContext';

const Service = ({ className }) => {
  const { t } = useLanguage();

  const services = t('services.items');

  return (
    <section className={className}>
      <div className="service-container">
        <h2>{t('services.title')}</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{['🔍', '☕', '☁️'][index]}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
