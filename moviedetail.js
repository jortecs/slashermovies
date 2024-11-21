// Función para obtener detalles de una película específica por ID
const getMovieDetails = async (id) => {
  // Construimos la URL de la API con el ID de la película, la clave de API y el idioma deseado
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=02e62c8b470d5525d3c3b017dca56bb1&language=en-US`;
  
  // Realizamos una solicitud HTTP GET a la API para obtener los datos de la película
  const response = await fetch(url);
  
  // Convertimos la respuesta en formato JSON para trabajar con los datos
  const movie = await response.json();
  
  // Retornamos el objeto que contiene los detalles de la película
  return movie;
};

// Renderiza los detalles de la película en la página
const renderMovieDetail = async () => {
  // Obtenemos los parámetros de la URL (por ejemplo, ?id=123) para extraer el ID de la película
  const params = new URLSearchParams(window.location.search);
  
  // Extraemos el valor del parámetro 'id' de la URL, que identifica la película
  const movieId = params.get('id'); 
  
  // Llamamos a la función para obtener los detalles de la película utilizando su ID
  const movie = await getMovieDetails(movieId);
  
  // Seleccionamos el contenedor del DOM donde se mostrarán los detalles de la película
  const detailContainer = document.getElementById('movie-detail');
  
  // Insertamos dinámicamente el contenido HTML con los detalles de la película
  detailContainer.innerHTML = `
    <div class="movie-detail">
      <!-- Imagen del póster de la película -->
      <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" class="movie-detail-poster" />
      
      <!-- Información detallada de la película -->
      <div class="movie-detail-info">
        <h1>${movie.title}</h1>
        <p><strong>Año:</strong> ${movie.release_date.split('-')[0]}</p> <!-- Año de lanzamiento -->
        <p><strong>Géneros:</strong> ${movie.genres.map(genre => genre.name).join(' / ')}</p> <!-- Géneros -->
        <p><strong>Puntuación:</strong> ${movie.vote_average} <img src="assets/star.png" alt="Estrella" class="star-icon" /></p> <!-- Puntuación promedio -->
        <p><strong>Sinopsis:</strong> ${movie.overview}</p> <!-- Resumen de la película -->
        <button class="trailer-button">VER TRAILER</button> <!-- Botón para ver el tráiler -->
        <p><strong>Idiomas:</strong> ${movie.spoken_languages.map(lang => lang.name).join(', ')}</p> <!-- Idiomas disponibles -->
      </div>
    </div>
  `;
};

// Llamamos a la función para renderizar los detalles de la película al cargar la página
renderMovieDetail();
