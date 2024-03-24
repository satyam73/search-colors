import styles from './servicesCard.module.css';
import { ServicesCardProps } from './servicesCard.types';

export default function ServicesCard({
  image = '/space.svg',
  text,
}: ServicesCardProps) {
  return (
    <div className={styles['services-card']}>
      <img
        src={image}
        alt='about image'
        className={styles['services-card__image']}
      />
      <p className={styles['services-card__info']}>{text}</p>
    </div>
  );
}
