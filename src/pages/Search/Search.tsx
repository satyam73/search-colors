import { FormEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { COLORS } from '@/src/constants';
import { Colors } from '@/src/types';

import ColorCard from '@/src/components/ColorCard/ColorCard';
import SearchBar from '@/src/components/SearchBar/SearchBar';

import { debounce } from '@/src/utils';

import styles from './search.module.css';

export default function Search() {
  const [currentQueryParameters, setSearchParams] = useSearchParams();
  const [colorsToShow, setColorsToShow] = useState<Colors[]>(COLORS);
  const searchInputHandler = debounce(onSearchInput);

  function onSearchInput(event: FormEvent<HTMLInputElement>) {
    const eventTarget = event.target as HTMLInputElement;
    const value = eventTarget?.value;
    const newQueryParameters: URLSearchParams = new URLSearchParams();

    if (value) newQueryParameters.set('color', value);

    setSearchParams(newQueryParameters);
    const lowerCaseValue = value?.toLowerCase();
    const updatedColorsToShow = COLORS.filter(
      (color) =>
        color.color.includes(lowerCaseValue) ||
        color.value.includes(lowerCaseValue)
    );

    setColorsToShow(updatedColorsToShow);
  }

  return (
    <div id='search' className={styles['search-page']}>
      <SearchBar inputHandler={searchInputHandler} />
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
