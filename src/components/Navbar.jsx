import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Link to='/home'>Домашняя страница</Link>
      <Link to='/about'> О сайте</Link>
      <Link to='/photo'> Фото</Link>
    </div>
  );
};

export default Navbar;
