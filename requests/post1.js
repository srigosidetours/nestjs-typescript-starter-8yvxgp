const axios = require('axios');

// URL a la que quieres enviar la solicitud POST
const url = 'http://localhost:3000/tasks'; // Agrega 'http://' al inicio de la URL

// Datos que quieres enviar en el cuerpo de la solicitud
const data = {
  title: 'Llamar el seguro',
  description: 'Escribir una queja ',
};

// Opciones de configuración para la solicitud POST
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

// Realizar la solicitud POST
axios
  .post(url, data, config)
  .then((response) => {
    console.log('Respuesta del servidor:', response.data);
  })
  .catch((error) => {
    console.error('Error al realizar la solicitud:', error);
  });
