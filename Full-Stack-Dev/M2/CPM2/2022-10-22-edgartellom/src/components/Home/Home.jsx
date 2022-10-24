import "./home.css";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as actions from '../../redux/actions';
import homeImage from '../../img-cp2/cp-fm2-image.png'

import { connect } from "react-redux";
import CharacterCard from "../CharacterCard/CharacterCard";
// Importar las actions como Object Modules y no hacerles destructuring, sino los test no funcionarán!
// Ej: import * as actions from '...'
// Aparte Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount(){
    this.props.getCharacters();
  }
  
  render() {
    return (
      <div className="home">
        <h1>Star Wars</h1>
        <h2>May the force be with you</h2>
        <img src={homeImage} alt="star-wars-logo" />
        <h3>Characters</h3>
        <ul>
          {this.props.characters && this.props.characters.map((char, i) =>(
            <CharacterCard
              key = {i}
              id = {char.id}
              name = {char.name}
              faction = {char.faction}
              image = {char.image}
            >
            </CharacterCard>
          ))}
        </ul>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
