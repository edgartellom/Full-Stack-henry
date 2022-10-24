import React, { Component } from "react";
// Este componente hay que resolverlo de la mano de Ships para hacerlo funcionar correctamente!
// Si o si este componente debe ser de clase, sino los tests no funcionaran!
export default class ShipCard extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <img src={this.props.image} alt={this.props.name}/>
      </div>
    );
  }
};