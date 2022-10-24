import "./CharacterCard.css";
import React from "react";
import { Link } from "react-router-dom";
import * as actions from "../../redux/actions";
import { useDispatch } from "react-redux";
// Importar las actions como Object Modules, sino los test no funcionarán!

//PARA QUE LOS TEST CORRAN, DEBEN HACER ESTE COMPONENTE COMO UN FUNCIONAL COMPONENT.

const CharacterCard = (props) => {
  const dispatch = useDispatch();
  const handleClick = () =>{
    dispatch(actions.deleteCharacter(props.id))
  }
  
  return (
    <div className="card">
      <button onClick={handleClick}>X</button>
      <Link to={`/character/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <p>{props.faction}</p>
      <img src={props.image} alt={props.name} />
    </div>
  );
};

export default CharacterCard;
