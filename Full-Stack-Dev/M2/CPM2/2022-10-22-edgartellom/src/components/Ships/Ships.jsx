import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as actions from '../../redux/actions';
import ShipCard from "../ShipCard/ShipCard";
// Este componente hay que resolverlo de la mano de ShipCard para hacerlo funcionar correctamente!
// Importar las actions como Object Modules y no hacerles destructuring, sino los test no funcionarán!
// Ej: import * as actions from '...'
export default function Ships() {
  const dispatch = useDispatch();
  const ships = useSelector(state => state.ships)
  
  React.useEffect(() => {
    dispatch(actions.getShips())
  })
  
  return (
    <div>
      <h1>The most iconic Ships!</h1>
      {ships?.map(s => (
        <ShipCard 
          name = {s.name}
          image = {s.image}
        />
      ))}
    </div>
  )
};