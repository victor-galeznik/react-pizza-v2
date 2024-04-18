import React, { useCallback, useContext, useRef, useState } from 'react';
import debounce from 'lodash.debounce';

import pizzaSvg from './img/pizza.svg';
import clearSvg from './img/clear.svg';
import { SearchContext } from '../../App';

import styles from './Search.module.scss';

const Search = () => {
  const [value, setValue] = useState('');
  const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    [],
  );

  const onChangeInput = (event) => {
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
