import styles from './homeSection.module.css';

export default function HomeSection() {
  return (
    <section id='home' className={styles['home-section']}>
      <h1 className={styles['home-section__heading']}>Welcome to AccuKnox!</h1>
      <p className={styles['home-section__info']}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At sapiente
        nam doloremque molestias quisquam distinctio repellendus quas qui
        blanditiis, hic ratione, nostrum illum quia quis! Sunt eaque quae totam
        animi non, delectus explicabo mollitia expedita tenetur maxime?
        Temporibus sint ad illo, porro commodi laudantium quod possimus. Iste
        sequi mollitia provident!
      </p>
      <a href='#services' className={styles['home-section__cta-button']}>
        See services
      </a>
    </section>
  );
}
