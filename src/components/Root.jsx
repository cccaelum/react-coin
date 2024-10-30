import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Root() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <main>
        <Outlet /> {/* Renderiza el contenido de la ruta actual */}
      </main>
    </div>
  );
}

export default Root;
