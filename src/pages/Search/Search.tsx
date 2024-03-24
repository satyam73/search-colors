import { FormEvent, useState } from 'react';

import { COLORS } from '@/src/constants';
import { Colors } from '@/src/types';

import ColorCard from '@/src/components/ColorCard/ColorCard';
import SearchBar from '@/src/components/SearchBar/SearchBar';

import styles from './search.module.css';

export default function Search() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [colorsToShow, setColorsToShow] = useState<Colors[]>(COLORS);

  function onSearchInput(event: FormEvent<HTMLInputElement>) {
    const eventTarget = event.target as HTMLInputElement;
    const value = eventTarget.value;

    setSearchValue(value);

    const updatedColorsToShow = COLORS.filter(
      (color) => color.color.includes(value) || color.value.includes(value)
    );

    setColorsToShow(updatedColorsToShow);
  }

  return (
    <div id='search' className={styles['search-page']}>
      <SearchBar inputHandler={onSearchInput} searchValue={searchValue} />
      {colorsToShow.map((color) => (
        <ColorCard
          key={color.value}
          colorCode={color.value}
          colorName={color.color}
        />
      ))}
    </div>
  );
}
