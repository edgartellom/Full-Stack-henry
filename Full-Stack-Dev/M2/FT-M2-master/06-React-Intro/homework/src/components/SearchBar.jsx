import React from 'react';

export default function SearchBar(props) {
  // acá va tu código

  return (
    <div>
      <input type="text" id="searchBar" placeholder='Ciudad...' />
      <button type='button' onClick={()=>props.onSearch("Agregando ciudad...")}>Agregar</button>
    </div>
  )
};