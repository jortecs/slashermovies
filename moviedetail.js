// Función para obtener detalles de una película específica por ID
const getMovieDetails = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=02e62c8b470d5525d3c3b017dca56bb1&language=en-US`;
    const response = await fetch(url);
    const movie = await response.json();
    return movie;
  };
  
  // Renderiza los detalles de la película en la página
  const renderMovieDetail = async () => {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('id'); // Obtenemos el ID de la película desde la URL
    const movie = await getMovieDetails(movieId);
  
    // Contenedor para los detalles de la película
    const detailContainer = document.getElementById('movie-detail');
    detailContainer.innerHTML = `
      <div class="movie-detail">
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" class="movie-detail-poster" />
        <div class="movie-detail-info">
          <h1>${movie.title}</h1>
          <p><strong>Año:</strong> ${movie.release_date.split('-')[0]}</p>
          <p><strong>Géneros:</strong> ${movie.genres.map(genre => genre.name).join(' / ')}</p>
          <p><strong>Puntuación:</strong> ${movie.vote_average} <img src="assets/star.png" alt="Estrella" class="star-icon" /></p>
          <p><strong>Sinopsis:</strong> ${movie.overview}</p>
          <button class="trailer-button">VER TRAILER</button>
          <p><strong>Idiomas:</strong> ${movie.spoken_languages.map(lang => lang.name).join(', ')}</p>
        </div>
      </div>
    `;
  };
  
  renderMovieDetail();
  