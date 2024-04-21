import React, { useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';

import pizzaSvg from './img/pizza.svg';
import clearSvg from './img/clear.svg';

import styles from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');

    inputRef.current?.focus();

    // или вот так:

    // if (inputRef.current) {
    //   inputRef.current.focus();
    // }
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 500),
    [],
  );

  const onChangeInput = (event: any) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.pizzaIcon} src={pizzaSvg} alt="pizza" />
      <input
        ref={inputRef}
        onChange={onChangeInput}
        value={value}
        className={styles.input}
        placeholder="Поиск"
        type="text"
      />
      {value && (
        <img
          onClick={onClickClear}
          className={styles.clearIcon}
          src={clearSvg}
          alt="close"
        />
      )}
    </div>
  );
};

export default Search;
