Para cumplir con los ejercicios de la evaluación, creé una carpeta llamada components que contiene dos archivos principales para el ejercicio 1: ListaProductos.js y Producto.js.

Elegí los productos pensando en mi primera profesión, de manera que la lista refleje servicios reales que se podrían ofrecer. ListaProductos.js actúa como componente padre, donde manejo el estado de los productos y del carrito usando this.state y this.setState(). La comunicación entre componentes se hace mediante props y callbacks, de modo que cada Producto.js (componente hijo) recibe la información del producto y una función para agregarlo al carrito.

La parte principal del código solicitada en la evaluación es el manejo del estado y la actualización del carrito: cada vez que el usuario agrega un producto, el estado del carrito se actualiza y se renderiza automáticamente la lista de items seleccionados. También implementé la funcionalidad para borrar un item del carrito, asegurando que la interacción sea completa y dinámica.

// Esto es una parte del código en ListaProductos.js (componente padre)

this.state = {
  productos: [
    { id: 1, nombre: 'Sesión Individual' },
    { id: 2, nombre: 'Sesión de Pareja' },
    { id: 3, nombre: 'Mediación' }
  ],
  carrito: []
};

// Callback que recibe el hijo (Producto.js)
agregarAlCarrito = (producto) => {
  this.setState({
    carrito: [...this.state.carrito, producto]
  });
};

// Borrar un item del carrito
borrarDelCarrito = (index) => {
  const nuevoCarrito = [...this.state.carrito];
  nuevoCarrito.splice(index, 1);
  this.setState({ carrito: nuevoCarrito });
};

// Parte importante del componente hijo Producto.js

agregar = () => {
  this.props.callback(this.props.producto);
};

Para cumplir con los requisitos del ejercicio 2, creé un componente llamado Formulario.js, ubicado también dentro de la carpeta components. En este componente implementé un formulario controlado que utiliza this.state para manejar los valores ingresados por el usuario.

Para realizar las validaciones usé la librería react-simple-validator, que permite mostrar mensajes personalizados cuando un campo está vacío o cuando el email no tiene el formato correcto. Esto asegura que los datos ingresados cumplan con los criterios solicitados antes de enviarse.

Además, conecté el formulario con Firebase Firestore, de modo que cada envío exitoso queda almacenado en una colección de base de datos en la nube. 

La parte principal del código que implementa esta lógica es la función que maneja el envío del formulario: valida los campos, guarda los datos y resetea los inputs para dejar el formulario listo para un nuevo registro.

// Fragmento del componente Formulario.js

this.state = {
  nombre: '',
  email: '',
  mensaje: ''
};

// Validación y envío del formulario
manejarEnvio = async (e) => {
  e.preventDefault();

  if (this.validator.allValid()) {
    await addDoc(collection(db, "formulario"), this.state);
    alert("Datos guardados correctamente!");
    
    // Reset del formulario
    this.setState({ nombre: "", email: "", mensaje: "" });
    this.validator.hideMessages();
    this.forceUpdate();
  } else {
    this.validator.showMessages();
    this.forceUpdate();
  }
};

Para el ejercicio 3 desarrollé dos componentes adicionales dentro de la carpeta components: Auth.js y Storage.js. Cada uno cumple con una parte específica del trabajo solicitado.

El componente Auth.js implementa el sistema de autenticación del proyecto usando Firebase Auth. Desde aquí el usuario puede iniciar sesión y cerrar sesión con un correo y contraseña. El estado del usuario se maneja con this.state, y según si está logueado o no, el componente muestra diferentes vistas. Esto permite cumplir con la consigna de gestionar autenticación real dentro de la aplicación.

Por otro lado, el componente Storage.js permite subir archivos a Firebase Storage. El usuario selecciona un archivo desde su equipo, se muestra el progreso de carga en tiempo real y, una vez finalizada la subida, se obtiene la URL de descarga. 

Finalmente, utilicé Cordova y Android Studio para exportar la aplicación en formato APK, cumpliendo así con el último punto del ejercicio. El build generado fue probado en un dispositivo móvil para asegurar que tanto la autenticación como la subida de archivos funcionen correctamente dentro de la app instalada.


