import React from 'react';
import ListaProductos from './components/ListaProductos';
import Formulario from './components/Formulario';
import Auth from './components/Auth';
import Storage from './components/Storage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container my-5">
      <h1 className="text-center mb-5">Proyecto Examen</h1>

      {/* Ejercicio 1 */}
      <section className="mb-5">
        <h2 className="mb-3">Ejercicio 1</h2>
        <ListaProductos />
      </section>

      {/* Ejercicio 2 */}
      <section className="mb-5">
        <h2 className="mb-3">Formulario Ejercicio 2</h2>
        <Formulario />
      </section>

      {/* Ejercicio 3: Auth y Storage lado a lado */}
      <section className="mb-5">
        <h2 className="mb-3 text-center">Firebase</h2>
        <div className="row">
          {/* Auth al lado izquierdo */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="w-100">
              <h4 className="text-center mb-3">Identificación</h4>
              <Auth />
            </div>
          </div>

          {/* Storage al lado derecho */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="w-100">
              <h4 className="text-center mb-3">Subida de Archivos</h4>
              <Storage />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
