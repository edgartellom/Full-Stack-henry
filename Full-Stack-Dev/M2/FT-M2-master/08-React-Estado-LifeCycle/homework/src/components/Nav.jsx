import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import {navLogo} from './Nav.module.css';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-brand">
        <img src={Logo} width="30" height="30" className={`d-inline-block align-top ${navLogo}`} alt="Logo Henry"/>
        <span>Henry - Weather App</span> 
      </div>
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;

