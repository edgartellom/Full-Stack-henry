import React from 'react';
import s from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <div className={s.container}>
      <input type="text" placeholder='Ciudad...' />
      <button type='button' onClick={()=>onSearch("Agregando ciudad...")}>Agregar</button>
    </div>
  )
};