import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../redux/actions';

// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.
// TIP: Aqui seria un buen momento para utilizar el hook useSelector.

const CharacterDetail = (props) => {
  const dispatch = useDispatch();
  let characterId = props.match.params.id;
  const characterDetail = useSelector(state => state.characterDetail)

  React.useEffect(() => {
    dispatch(actions.getCharacterDetail(characterId))
  });
  

  return (
    <div>
      <h4>{characterDetail.name}</h4>
      <h4>{characterDetail.faction}</h4>
      <h4>{characterDetail.role}</h4>
      <h4>{characterDetail.race}</h4>
      <img src={characterDetail.image} alt={characterDetail.name} />
      <h4>{characterDetail.ship.name}</h4>
      <img src={characterDetail.ship.image} alt={characterDetail.ship.name} />
    </div>
  );
};


export default CharacterDetail;
