import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    // imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://661d481698427bbbef01578f.mockapi.io/items/' + id,
        );
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return 'Загрузка...';
    // return <>'Загрузка...'</>;
  }

  return (
    <div className='container'>
      {/* <img src={pizza.imageUrl} alt="" /> */}

      <img
        className='pizza-block__image'
        src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
        alt='пицца'
      />
      <h2 className='pizza-block__title'>{pizza.title}</h2>
      <h4 className='pizza-block__price'>от {pizza.price} ₽</h4>
      <Link to='/'>
        <button className='button button--outline button--add'>
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
