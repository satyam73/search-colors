import ServicesCard from '@components/ServicesCard/ServicesCard';
import { SERVICES } from './servicesSection.constants';
import styles from './servicesSection.module.css';

export default function ServicesSection() {
  const servicesMapping = SERVICES.map((service) => (
    <ServicesCard key={service.id} image={service.image} text={service.text}/>
  ))
  return (
    <section id='services' className={styles['services-section']}>
      <h2 className={styles['services-section__heading']}>Services</h2>
      <div className={styles['services-section__main']}>
        {servicesMapping}
      </div>
    </section>
  );
}
