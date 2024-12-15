import { getData } from './api.js'; // Importamos la función `getData` desde el archivo `api.js`.

window.addEventListener('load', async () => { // Escuchamos el evento `load` para ejecutar el código cuando la página termine de cargar.
  const data = await getData();  // Llamamos a la función `getData` para obtener los datos de películas desde la API.

  const listado = document.createElement('ul');  // Creamos un elemento `ul` que contendrá la lista de películas.

  data.results.forEach(filmes => {  // Iteramos sobre cada elemento de la lista `results` devuelta por la API.
  
    const listadopeli = document.createElement('li');  // Creamos un elemento `li` para cada película.
    listadopeli.className = 'movie-item'; // Asignamos una clase CSS para estilizar los elementos de la lista.
    
    const title = document.createElement('h2');  // Creamos un elemento `h2` donde se mostrará el título de la película.
    const image = document.createElement('img');  // Creamos un elemento `img` para mostrar el póster de la película.
    const overview = document.createElement('p'); // Creamos un elemento `p` para incluir una breve descripción de la película.

    // Asignamos los datos obtenidos de la API a los elementos HTML creados.
    title.textContent = filmes.title; // Asignamos el título de la película al elemento `h2`.
    image.src = `https://image.tmdb.org/t/p/w500/${filmes.poster_path}`; // Asignamos la URL del póster a la propiedad `src` del elemento `img`.
    image.alt = filmes.title; // Añadimos un texto alternativo (para accesibilidad) al atributo `alt` del elemento `img`.
    overview.textContent = filmes.overview.length > 100 
      ? `${filmes.overview.slice(0, 100)}...` // Si la sinopsis es muy larga, mostramos los primeros 100 caracteres seguidos de puntos suspensivos.
      : filmes.overview; // Si la sinopsis es corta, la mostramos completa.

    // Agregamos los elementos `img`, `h2` y `p` dentro del contenedor `li`.
    listadopeli.appendChild(image); 
    listadopeli.appendChild(title); 
    listadopeli.appendChild(overview);

    // Agregamos un evento de clic a cada elemento de la lista para redirigir al detalle de la película.
    listadopeli.addEventListener('click', () => {
      window.location.href = `moviedetail.html?id=${filmes.id}`; // Redirigimos a la página de detalle usando el ID de la película.
    });

    // Agregamos el elemento `li` (con todos los datos de la película) al `ul`.
    listado.appendChild(listadopeli);
  });

  // Finalmente, agregamos el contenedor `ul` con todas las películas al elemento principal de la página.
  document.getElementById('app').appendChild(listado);
});

// Selecciona el botón de subir
const scrollToTopBtn = document.getElementById('scrollToTop');

// Detecta el evento de clic en el botón
scrollToTopBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace.

  // Desplaza la página hacia la parte superior con un efecto de desplazamiento suave.
  window.scrollTo({
    top: 0, // Posición superior de la página.
    behavior: 'smooth' // Define que el desplazamiento sea suave.
  });
});
