const Service = ({ className }) => {
  const services = [
    {
      title: "Bug-Free Guarantee*",
      description: "*Guarantee void if you actually find bugs. We're developers, not exterminators! 🐛",
      icon: "🔍"
    },
    {
      title: "24/7 Support**",
      description: "**By '24/7' we mean we'll think about your problem in our dreams. Response time may vary based on caffeine levels.",
      icon: "☕"
    },
    {
      title: "Cloud Solutions***",
      description: "***We literally throw your data into the clouds. If it rains, that's your backup coming down.",
      icon: "☁️"
    }
  ];

  return (
    <section className={className}>
      <div className="service-container">
        <h2>Our Services</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
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
