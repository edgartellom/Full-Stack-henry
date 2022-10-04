import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
// import {nav} from './Nav.module.css';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href={"www"}>
        <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Logo Henry"/>
        <span> Henry - Weather App </span> 
      </a>
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;

