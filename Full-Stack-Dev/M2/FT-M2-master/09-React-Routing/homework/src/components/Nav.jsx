import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import { NavLogo } from './Nav.module.css';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          <img src={Logo} width="30" height="30" className={`d-inline-block align-top ${NavLogo}`} alt="Logo Henry"/>
          Henry - Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;

