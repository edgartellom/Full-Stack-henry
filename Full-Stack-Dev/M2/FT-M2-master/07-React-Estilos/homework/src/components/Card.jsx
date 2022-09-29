import React from 'react';
import s from './Card.module.css';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
    <div className={s.container}>
      <button className={s.btnClose} onClick={onClose}>x</button>

      <h3 className={s.header}>{name}</h3>

      <div className={s.grid}>
        <div>
          <p>Min</p>
          <p>{min}</p>
        </div>

        <div>
          <p>Max</p>
          <p>{max}</p>
        </div>

        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Img not found" />

      </div>
    
    </div>
    
  )
};