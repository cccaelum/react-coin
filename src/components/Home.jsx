import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coincap.io/v2/assets')
      .then(response => response.json())
      .then(data => setCoins(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1>Top Criptomonedas</h1>
      <ul>
        {coins.map(coin => (
          <li key={coin.id}>
            <Link to={`/coin/${coin.id}`}>{coin.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
