import { getData } from '/api.js'; // Importamos la función `getData` desde el archivo `api.js`.

window.addEventListener('load', async () => { // Esperamos a que la página se cargue completamente.
  const data = await getData();  // Llamamos a `getData` para obtener los datos de la API.

  const listado = document.createElement('ul');  // Creamos un elemento `ul` (lista desordenada).

  data.results.forEach(filmes => {  // Iteramos sobre cada película en los resultados de la API.
  
    const listadopeli = document.createElement('li');  // Creamos un elemento `li` para cada película.
    listadopeli.className = 'movie-item'; // Asignamos una clase para estilizar las películas.
    
    const title = document.createElement('h2');  // Creamos un elemento `h2` para mostrar el título.
    const image = document.createElement('img');  // Creamos un elemento `img` para mostrar la imagen.
    const overview = document.createElement('p'); // Creamos un párrafo para la descripción breve.

    // Asignamos los datos a los elementos creados.
    title.textContent = filmes.title; // Título de la película.
    image.src = `https://image.tmdb.org/t/p/w500/${filmes.poster_path}`; // Póster de la película.
    image.alt = filmes.title; // Texto alternativo para la imagen.
    overview.textContent = filmes.overview.length > 100 
      ? `${filmes.overview.slice(0, 100)}...` 
      : filmes.overview; // Mostramos una descripción truncada si es muy larga.

    // Agregamos los elementos creados al contenedor `li`.
    listadopeli.appendChild(image); 
    listadopeli.appendChild(title); 
    listadopeli.appendChild(overview);

    // Agregar evento de clic para redirigir a la página de detalle
    listadopeli.addEventListener('click', () => {
      window.location.href = `/moviedetail.html?id=${filmes.id}`;
    });

    // Agregamos el `li` al `ul`.
    listado.appendChild(listadopeli);
  });

  // Agregamos el `ul` al contenedor principal de la página.
  document.getElementById('app').appendChild(listado);
});



// Selecciona el botón de subir
const scrollToTopBtn = document.getElementById('scrollToTop');

// Detecta el evento de clic en el botón
scrollToTopBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace

  // Desplaza la página hacia arriba suavemente
  window.scrollTo({
    top: 0, // Posición superior de la página
    behavior: 'smooth' // Desplazamiento suave
  });
});