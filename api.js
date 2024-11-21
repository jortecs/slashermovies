const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=02e62c8b470d5525d3c3b017dca56bb1";
// URL de la API que devuelve las películas más populares del día.

export const getData = async () => {  // Exportamos la función `getData` para usarla en otros archivos.
    const response = await fetch(url); // Hacemos una solicitud HTTP GET a la URL.
    const data = await response.json(); // Convertimos la respuesta en formato JSON.
    return data; // Devolvemos los datos para usarlos en la aplicación.
};

// getData(); // (comentado) Esto ejecutaría la función para probar que funciona.
