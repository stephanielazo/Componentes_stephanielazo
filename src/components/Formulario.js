import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      email: '',
      mensaje: ''
    };

    this.validator = new SimpleReactValidator({
      messages: {
        required: 'Este campo es obligatorio',
        email: 'Ingrese un email válido'
      }
    });
  }

  manejarCambio = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  manejarEnvio = async (e) => {
    e.preventDefault();

    if (this.validator.allValid()) {
      try {
        await addDoc(collection(db, "formulario"), this.state);
        alert("Datos guardados correctamente!");
        this.setState({ nombre: "", email: "", mensaje: "" });
        this.validator.hideMessages();
        this.forceUpdate();
      } catch (error) {
        console.error("Error al guardar los datos:", error);
        alert("Ocurrió un error al guardar los datos.");
      }
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  render() {
    return (
      <form onSubmit={this.manejarEnvio} className="w-75 mx-auto">
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            value={this.state.nombre}
            onChange={this.manejarCambio}
          />
          {this.validator.message('nombre', this.state.nombre, 'required')}
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={this.state.email}
            onChange={this.manejarCambio}
          />
          {this.validator.message('email', this.state.email, 'required|email')}
        </div>

        <div className="mb-3">
          <label className="form-label">Mensaje:</label>
          <textarea
            name="mensaje"
            className="form-control"
            value={this.state.mensaje}
            onChange={this.manejarCambio}
          />
          {this.validator.message('mensaje', this.state.mensaje, 'required')}
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    );
  }
}

export default Formulario;
