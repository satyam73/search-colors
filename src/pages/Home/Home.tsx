import HomeSection from '@components/HomeSection/HomeSection';
import AboutSection from '@components/AboutSection/AboutSection';
import ServicesSection from '@components/ServicesSection/ServicesSection';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles['home-page']}>
      <HomeSection />
      <AboutSection/>
      <ServicesSection/>
    </div>
  );
}
