import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { debounce } from '@/src/utils';
import { HEADER_ITEMS } from './header.constants';

import styles from './header.module.css';

const MIN_SCROLLY = 0;
const SCROLL_DEBOUNCE_TIME = 100;
const HEADER_BACKGROUND_COLOR = '#D8E2FF';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerBackground, setHeaderBackground] =
    useState<string>('transparent');

  useEffect(() => {
    const debouncedWindowResize = debounce(onWindowResize);

    function onWindowResize() {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener('resize', debouncedWindowResize);

    return () => window.removeEventListener('resize', debouncedWindowResize);
  }, []);

  useEffect(() => {
    const debouncedOnBodyScroll = debounce(onBodyScroll, SCROLL_DEBOUNCE_TIME);

    function onBodyScroll() {
      if (window.scrollY > MIN_SCROLLY) {
        setHeaderBackground(HEADER_BACKGROUND_COLOR);
      } else {
        setHeaderBackground('transparent');
      }
    }

    window.addEventListener('scroll', debouncedOnBodyScroll);

    return () => window.removeEventListener('scroll', debouncedOnBodyScroll);
  }, []);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function openMobileMenu() {
    setIsMobileMenuOpen(true);
  }

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
    <header
      className={styles['header']}
      style={{ background: headerBackground }}
    >
      <span>
        <Link className={styles['header__logo']} to='/'>
          A
        </Link>
      </span>
      <nav className={styles['header__nav']}>
        <ul className={styles['header__item-list']}>{headerItemsMapping}</ul>
      </nav>

      {/* Mobile Menu */}
      <button
        onClick={openMobileMenu}
        className={styles['header__hamburger-button']}
      >
        <img src='/hamburger-icon.svg' alt='mobile menu icon' />
      </button>
      <div
        className={`${styles['header__mobile-menu']} ${
          isMobileMenuOpen
            ? styles['header__mobile-menu--visible']
            : styles['header__mobile-menu--hidden']
        }`}
      >
        <div className={styles['header__mobile-close-button-container']}>
          <button
            onClick={closeMobileMenu}
            className={styles['header__mobile-close-button']}
          >
            <img src='/close-icon.svg' alt='close mobile menu icon' />
          </button>
        </div>
        <ul
          className={styles['header__mobile-menu-main']}
          onClick={closeMobileMenu}
        >
          {headerItemsMapping}
        </ul>
      </div>
    </header>
  );
}
