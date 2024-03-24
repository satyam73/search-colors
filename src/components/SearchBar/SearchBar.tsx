import { SearchBarProps } from './searchBar.types';
import styles from './searchBar.module.css';

export default function SearchBar({ inputHandler, searchValue = '' }: SearchBarProps) {
  return (
    <div className={styles['search-bar']}>
      <input
        className={styles['search-bar__input']}
        placeholder='Enter color name or hex code'
        type='text'
        value={searchValue}
        onInput={inputHandler}
      />
      <img src='/search-icon.svg' alt='search icon'className={styles['search-bar__icon']} />
    </div>
  );
}


