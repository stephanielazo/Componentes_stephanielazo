import React, { Component } from 'react';
import Producto from './Producto';

class ListaProductos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [
        { id: 1, nombre: 'Sesión Individual' },
        { id: 2, nombre: 'Sesión de Pareja' },
        { id: 3, nombre: 'Mediación' }
      ],
      carrito: []
    };
  }

  agregarAlCarrito = (producto) => {
    this.setState({
      carrito: [...this.state.carrito, producto]
    });
  };

  borrarDelCarrito = (index) => {
    const nuevoCarrito = [...this.state.carrito];
    nuevoCarrito.splice(index, 1);
    this.setState({ carrito: nuevoCarrito });
  };

  render() {
    return (
      <div>

        {/* LISTA DE PRODUCTOS */}
        <div className="d-flex flex-column align-items-center gap-3 mb-4">
          {this.state.productos.map((prod) => (
            <Producto
              key={prod.id}
              producto={prod}             
              callback={this.agregarAlCarrito}  
            />
          ))}
        </div>

        {/* CARRITO */}
        <h3>Carrito:</h3>
        <ul className="list-group w-75 mx-auto">
          {this.state.carrito.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item.nombre}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.borrarDelCarrito(index)}
              >
                Borrar
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListaProductos;
