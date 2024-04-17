import React from 'react';

import pizzaSvg from './img/pizza.svg';
import clearSvg from './img/clear.svg';
import { SearchContext } from '../../App';

import styles from './Search.module.scss';

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <img className={styles.pizzaIcon} src={pizzaSvg} alt="pizza" />
      <input
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
        className={styles.input}
        placeholder="Поиск"
        type="text"
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue('')}
          className={styles.clearIcon}
          src={clearSvg}
          alt="close"
        />
      )}
    </div>
  );
};

export default Search;
