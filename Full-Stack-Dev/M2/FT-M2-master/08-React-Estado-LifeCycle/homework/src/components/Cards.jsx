import React from 'react';
import Card from './Card';
import {cards} from './Cards.module.css'

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if(cities){

    return (
      <div className={cards}>
        {
          cities.map(city => (
            <Card
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={() => onClose(city.id)}
            key={city.id}
            />
          ))
        }
      </div>
    )
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}