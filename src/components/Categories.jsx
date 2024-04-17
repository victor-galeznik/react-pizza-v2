import { useState } from 'react';

function Categories({ value, onChangeCategory }) {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? 'active' : ''}
          >
            {categoryName}
          </li>
        ))}
        {/* <li
          onClick={() => onClickCategory(0)}
          className={activeIndex === 0 ? 'active' : ''}
        >
          Все
        </li> */}
      </ul>
    </div>
  );
}

export default Categories;
