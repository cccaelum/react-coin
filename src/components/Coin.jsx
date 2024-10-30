import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Coin() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    fetch(`https://api.coincap.io/v2/assets/${id}`)
      .then(response => response.json())
      .then(data => setCoin(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!coin) return <div>Cargando...</div>;

  return (
    <>
      <h1>{coin.name}</h1>
      <p>Precio: ${coin.priceUsd}</p>
    </>
  );
}

export default Coin;
