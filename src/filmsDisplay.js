//1 Función para mostrar a los directores en pantalla
function showDirectors() {
    // Obtengo el array de directores
    const directors = getAllDirectors(movies);

    // Muestros los directores en el contenedor
    const directorsContainer = document.getElementById('directorsContainer');
    directorsContainer.innerHTML = "<h2>Directors:</h2><p>" + directors.join(', ') + "</p>";
}

//2 Función para mostrar películas de un director específico en pantalla
function showMoviesForDirector() {
    // Obtengo el input del director introducido por el usuario
    const directorInput = document.getElementById('directorInput').value;

    // Obtengo el array de películas del director especificado
    const moviesForDirector = getMoviesFromDirector(movies, directorInput);

    // Muestro las películas en el contenedor del director especificado
    const moviesForDirectorContainer = document.getElementById('moviesForDirectorContainer');

    moviesForDirectorContainer.innerHTML = "<h2>Movies for Director:</h2>";

    if (moviesForDirector.length > 0) {
        const moviesList = moviesForDirector.map(movie => movie.title).join(', ');
        moviesForDirectorContainer.innerHTML += `<p><strong>${directorInput}</strong>: ${moviesList}</p>`;
    } else {
        moviesForDirectorContainer.innerHTML += `<p>No movies found for <strong>${directorInput}</strong></p>`;
    }
}

//3 Función para mostrar la puntuación media de un director específico en pantalla
function showAverageScoreForDirector() {
    // Obtengo el input del director introducido por el usuario
    const directorInput = document.getElementById('directorInput').value;

    // Calculo la puntuación media del director especificado
    const averageScore = moviesAverageOfDirector(movies, directorInput);

    // Muestro la puntuación media en el contenedor
    const averageScoreContainer = document.getElementById('averageScoreContainer');

    averageScoreContainer.innerHTML = "<h2>Average Score for Director:</h2>";

    if (averageScore !== 0) {
        averageScoreContainer.innerHTML += `<p><strong>${directorInput}</strong>: ${averageScore}</p>`;
    } else {
        averageScoreContainer.innerHTML += `<p>No movies found for <strong>${directorInput}</strong></p>`;
    }
}

//4 Función para mostrar las 20 primeras películas alfabéticamente en pantalla
function showTop20MoviesAlphabetically() {
    // Obtengo las 20 primeras películas alfabéticamente
    const top20Movies = orderAlphabetically(movies);

    // Muestro las primeras 20 movies en el contenedor
    const top20MoviesContainer = document.getElementById('top20MoviesContainer');

    top20MoviesContainer.innerHTML = "<h2>Top 20 Movies Alphabetically:</h2>";

    top20Movies.forEach(movieTitle => {
        // Utilizo movieTitle en lugar de movie, ya que es una array de títulos
        top20MoviesContainer.innerHTML += `<p>${movieTitle}</p>`;
    });
}

//5 Función para mostrar películas ordenadas por año en pantalla
function showMoviesOrderedByYear() {
    // Obtengo las películas ordenadas por año
    const moviesByYear = orderByYear(movies);

    // Muestro las películas ordenadas por año en el contenedor
    const moviesByYearContainer = document.getElementById('moviesByYearContainer');

    moviesByYearContainer.innerHTML = "<h2>Movies Ordered By Year:</h2>";

    moviesByYear.forEach(movie => {
        moviesByYearContainer.innerHTML += `<p>${movie.title} (${movie.year})</p>`;
    });
}

//6 Función para mostrar la puntuación media de cada género en pantalla
function showAverageScoreByGenre() {
    // Obtengo el input del género introducido por el usuario
    const genreInput = document.getElementById('genreInput').value;

    // Calculo la puntuación media para el género especificado
    const averageScore = moviesAverageByCategory(movies, genreInput);

    // Muestro la puntuación media por género en el contenedor
    const averageScoreByGenreContainer = document.getElementById('averageScoreByGenreContainer');

    averageScoreByGenreContainer.innerHTML = "<h2>Average Score By Genre:</h2>";

    if (averageScore !== 0) {
        averageScoreByGenreContainer.innerHTML += `<p><strong>${genreInput}</strong>: ${averageScore}</p>`;
    } else {
        averageScoreByGenreContainer.innerHTML += `<p>No movies found for <strong>${genreInput}</strong></p>`;
    }
}

//8 Función para mostrar la mejor película de un año específico
function findBestFilmOfYear() {
    // Obtengo el input del año introducido por el usuario
    const yearInput = document.getElementById('yearInput').value;

    // Llamo a la función bestFilmOfYear
    const bestMovies = bestFilmOfYear(movies, parseInt(yearInput));

    // Muestro el resultado en el contenedor
    const bestFilmContainer = document.getElementById('bestFilmContainer');

    bestFilmContainer.innerHTML = "<h2>Best Film of the Year:</h2>";

    if (bestMovies.length > 0) {
        // Muestro la información sobre la mejor película
        const bestMovie = bestMovies[0];
        bestFilmContainer.innerHTML += `
        <p>Title: ${bestMovie.title}</p>
        <p>Year: ${bestMovie.year}</p>
        <p>Director: ${bestMovie.director}</p>
        <p>Duration: ${bestMovie.duration} minutes</p>
        <p>Genre: ${bestMovie.genre.join(', ')}</p>
        <p>Score: ${bestMovie.score}</p>
      `;
    } else {
        // Preveo el caso en el que no se encuentren películas para el año especificado
        bestFilmContainer.innerHTML += `<p>No movies found for the specified year.</p>`;
    }
}

