import React, { useState } from 'react';
import {container, inputSearch, btnSearch} from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');  
  
  const handleInputChange = (e)=> {
    e.preventDefault();  
    setCity(e.target.value);
    }

  return (
    <form className={container} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input className={inputSearch}
        type="text"
        placeholder="Ciudad..."
        onChange={(e)=>handleInputChange(e)}
        value = {city}
      />
      <input className={btnSearch} type="submit" value="Agregar"/>
    </form>
  );
}