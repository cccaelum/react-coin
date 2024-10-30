import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Coin from './components/Coin';
//import Favorites from './components/Favorites';
import Root from './components/Root';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="coin/:id" element={<Coin />} />
          {/* <Route path="favorites" element={<Favorites />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
