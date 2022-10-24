import React from "react";
import { useDispatch } from "react-redux";
// Importar las actions como Object Modules, sino los test no funcionarán!
import * as actions from '../../redux/actions'
// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateCharacter = () => {
  const[input, setInput] = React.useState({
    name: "",
    race: "",
    role: "",
    faction: "",
    ship: {
          name: ""
          }
  });

  const handleInputChange = e =>{
    setInput({
      ...input,
      [e.target.name] : e.target.value  
    })
  }

  const handleShipChange = e =>{
    setInput({
      ...input,
      [e.target.name] : {name : e.target.value}  
    })
  }

  const dispatch = useDispatch();

  const onSubmit = e =>{
    e.preventDefault();
    dispatch(actions.createCharacter(input))
  }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" onChange={handleInputChange}/>
        <label htmlFor="race">Race: </label>
        <input type="text" name="race" onChange={handleInputChange}/>
        <label htmlFor="faction">Faction: </label>
        <input type="text" name="faction" onChange={handleInputChange}/>
        <label htmlFor="role">Role: </label>
        <input type="text" name="role" onChange={handleInputChange}/>
        <label htmlFor="ship">Ship: </label>
        <input type="text" name="ship" onChange={handleShipChange}/>
        <button type="submit">Create Character</button>
      </form>
    </div>
  );
};


export default CreateCharacter;
