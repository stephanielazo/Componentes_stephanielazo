// src/components/Auth.js
import React, { Component } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      usuario: null,
      error: ''
    };
  }

  manejarCambio = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  loginUsuario = async () => {
    const { email, password } = this.state;
    try {
      const usuarioCred = await signInWithEmailAndPassword(auth, email, password);
      this.setState({ usuario: usuarioCred.user, error: '' });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  cerrarSesion = async () => {
    try {
      await signOut(auth);
      this.setState({ usuario: null, email: '', password: '', error: '' });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { email, password, usuario, error } = this.state;

    return (
      <div className="auth-container d-flex flex-column align-items-center my-3 p-4 border rounded shadow-sm bg-light w-100">
        {error && <p className="text-danger">{error}</p>}

        {!usuario ? (
          <form className="w-100" style={{ maxWidth: "350px" }}>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={email}
                onChange={this.manejarCambio}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={password}
                onChange={this.manejarCambio}
                required
              />
            </div>
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={this.loginUsuario}
            >
              Iniciar Sesión
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="mb-3">¡Bienvenido, <strong>{usuario.email}</strong>!</p>
            <button className="btn btn-danger w-100" onClick={this.cerrarSesion}>Cerrar sesión</button>
          </div>
        )}
      </div>
    );
  }
}

export default Auth;
