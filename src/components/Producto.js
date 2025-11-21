import React, { Component } from 'react';

class Producto extends Component {
  agregar = () => {
    this.props.callback(this.props.producto);
  }

  render() {
    const { nombre } = this.props.producto;
    return (
      <div className="producto">
        <span>{nombre}</span>
        <button onClick={this.agregar}>Agregar</button>
      </div>
    );
  }
}

export default Producto;
