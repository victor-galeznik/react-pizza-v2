import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

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
    <div className="container">
      {/* <img src={pizza.imageUrl} alt="" /> */}

      <img
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="пицца"
      />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} P</h4>
    </div>
  );
};

export default FullPizza;
