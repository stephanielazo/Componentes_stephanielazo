// src/components/Storage.js
import React, { Component } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase'; // ⚡ asegúrate que la ruta es correcta

class Storage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      progreso: 0,
      urlArchivo: ''
    };
  }

  manejarArchivo = (e) => {
    if (e.target.files[0]) {
      this.setState({ file: e.target.files[0] });
    }
  }

  subirArchivo = () => {
    const { file } = this.state;
    if (!file) {
      alert("Selecciona un archivo primero");
      return;
    }

    const storageRef = ref(storage, `archivos/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progreso = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({ progreso });
      },
      (error) => {
        console.error("Error al subir archivo:", error);
        alert("Error al subir archivo: " + error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          this.setState({ urlArchivo: url });
          alert('Archivo subido con éxito');
        });
      }
    );
  }

  render() {
    const { progreso, urlArchivo } = this.state;

    return (
      <div className="w-75 mx-auto my-3 p-3 border rounded shadow-sm bg-light text-center">
        <h4 className="mb-3">Subir archivo a Storage</h4>
        <input
          type="file"
          onChange={this.manejarArchivo}
          className="form-control mb-3"
        />
        <button
          onClick={this.subirArchivo}
          className="btn btn-primary mb-3"
        >
          Subir Archivo
        </button>
        {progreso > 0 && <div className="mb-2">Progreso: {progreso}%</div>}
        {urlArchivo && (
          <div>
            <a href={urlArchivo} target="_blank" rel="noopener noreferrer">
              Ver archivo subido
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Storage;
