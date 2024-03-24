import { Link } from 'react-router-dom';
import { HEADER_ITEMS } from './header.constants';
import styles from './header.module.css';

export default function Header() {
  const headerItemsMapping = HEADER_ITEMS.map((item) => (
    <li key={item.id} className={styles['header__item']}>
      {item.id === 'search' ? (
        <Link to={item.link} className={styles['header__link']}>
          {item.name}
        </Link>
      ) : (
        <a href={item.link} className={styles['header__link']}>
          {item.name}
        </a>
      )}
    </li>
  ));

  return (
    <header className={styles['header']}>
      <span>
        <Link className={styles['header__logo']} to='/'>
          A
        </Link>
      </span>
      <nav className={styles['header__nav']}>
        <ul className={styles['header__item-list']}>{headerItemsMapping}</ul>
      </nav>
    </header>
  );
}
