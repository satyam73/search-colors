import styles from './aboutSection.module.css';

export default function AboutSection() {
  return (
    <section id='about' className={styles['about-section']}>
      <h2 className={styles['about-section__heading']}>About Us</h2>
      <div className={styles['about-section__main']}>
        <img
          src='/about-us.svg'
          alt=''
          className={styles['about-section__image']}
        />

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id vero nisi
          inventore libero possimus iste eos placeat explicabo, atque vel beatae
          quos doloremque. Odio fugit ab architecto iure, voluptate vero porro
          asperiores eos pariatur numquam beatae tempore, magnam sunt similique
          repellat amet adipisci quaerat consectetur ducimus laborum id alias
          corrupti.
        </p>
      </div>
    </section>
  );
}
