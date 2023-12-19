// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
let result = array.map(movie => movie.director);
console.log("EXERCISE 1 ->", result);
return result;
}

// Function to show directors on the screen
function showDirectors() {
// Get the array of directors
const directors = getAllDirectors(movies);

// Display directors in the container
const directorsContainer = document.getElementById('directorsContainer');
directorsContainer.innerHTML = "<h2>Directors:</h2><p>" + directors.join(', ') + "</p>";
}

  // Exercise 2: Get the array of movies for a specific director.
  function getMoviesFromDirector(moviesArray, director) {
    return moviesArray.filter(movie => movie.director === director);
  }

  // Function to show movies for a specific director on the screen
  function showMoviesForDirector() {
    // Get the director input from the user
    const directorInput = document.getElementById('directorInput').value;

    // Get the array of movies for the specified director
    const moviesForDirector = getMoviesFromDirector(movies, directorInput);

    // Display movies for the specific director in the container
    const moviesForDirectorContainer = document.getElementById('moviesForDirectorContainer');
    
    moviesForDirectorContainer.innerHTML = "<h2>Movies for Director:</h2>";

    if (moviesForDirector.length > 0) {
      const moviesList = moviesForDirector.map(movie => movie.title).join(', ');
      moviesForDirectorContainer.innerHTML += `<p><strong>${directorInput}</strong>: ${moviesList}</p>`;
    } else {
      moviesForDirectorContainer.innerHTML += `<p>No movies found for <strong>${directorInput}</strong></p>`;
    }
  }

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(moviesArray, director) {
  const directorMovies = moviesArray.filter(movie => movie.director === director);

  if (directorMovies.length === 0) {
    return 0; // Return 0 if no movies found for the director
  }

  const totalScore = directorMovies.reduce((acc, movie) => acc + movie.score, 0);
  const averageScore = totalScore / directorMovies.length;

  // Return the average score with two decimal places
  return Number(averageScore.toFixed(2));
}

// Function to show the average score for a specific director on the screen
function showAverageScoreForDirector() {
  // Get the director input from the user
  const directorInput = document.getElementById('directorInput').value;

  // Calculate the average score for the specified director
  const averageScore = moviesAverageOfDirector(movies, directorInput);

  // Display the average score in the container
  const averageScoreContainer = document.getElementById('averageScoreContainer');
  
  averageScoreContainer.innerHTML = "<h2>Average Score for Director:</h2>";

  if (averageScore !== 0) {
    averageScoreContainer.innerHTML += `<p><strong>${directorInput}</strong>: ${averageScore}</p>`;
  } else {
    averageScoreContainer.innerHTML += `<p>No movies found for <strong>${directorInput}</strong></p>`;
  }
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(moviesArray) {
    // Create a copy of the array to avoid mutation
    const sortedMovies = [...moviesArray]
    .sort((a, b) => a.title.localeCompare(b.title)) // Sort alphabetically by title
    .slice(0, 20); // Take the first 20 movies

    // Extract only the titles as strings
    const movieTitles = sortedMovies.map(movie => movie.title);

    return movieTitles;
}

// Function to show the top 20 movies alphabetically on the screen
function showTop20MoviesAlphabetically() {
// Get the top 20 movies alphabetically
const top20Movies = orderAlphabetically(movies);

// Display top 20 movies in the container
const top20MoviesContainer = document.getElementById('top20MoviesContainer');

top20MoviesContainer.innerHTML = "<h2>Top 20 Movies Alphabetically:</h2>";

top20Movies.forEach(movieTitle => {
  // Use movieTitle instead of movie, as it's an array of titles
  top20MoviesContainer.innerHTML += `<p>${movieTitle}</p>`;
});
}

// Exercise 5: Order by year, ascending
function orderByYear(moviesArray) {
// Create a copy of the array to avoid mutation
const orderedMovies = [...moviesArray]
.sort((a, b) => {
  // Sort by year first
  if (a.year !== b.year) {
    return a.year - b.year;
  }
  // If the years are the same, sort alphabetically by title
  return a.title.localeCompare(b.title);
});

return orderedMovies;
}

// Function to show movies ordered by year on the screen
function showMoviesOrderedByYear() {
// Get movies ordered by year
const moviesByYear = orderByYear(movies);

// Display movies ordered by year in the container
const moviesByYearContainer = document.getElementById('moviesByYearContainer');

moviesByYearContainer.innerHTML = "<h2>Movies Ordered By Year:</h2>";

moviesByYear.forEach(movie => {
  moviesByYearContainer.innerHTML += `<p>${movie.title} (${movie.year})</p>`;
});
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(moviesArray, genre) {
const genreMovies = moviesArray.filter(movie => movie.genre.includes(genre));

if (genreMovies.length === 0) {
  return 0; // Return 0 if no movies found for the genre
}

const totalScore = genreMovies.reduce((acc, movie) => acc + movie.score, 0);
const averageScore = totalScore / genreMovies.length;

// Return the average score with two decimal places
return Number(averageScore.toFixed(2));
}

// Function to show the average score by genre on the screen
function showAverageScoreByGenre() {
  // Get the genre input from the user
  const genreInput = document.getElementById('genreInput').value;

  // Calculate the average score for the specified genre
  const averageScore = moviesAverageByCategory(movies, genreInput);

  // Display the average score by genre in the container
  const averageScoreByGenreContainer = document.getElementById('averageScoreByGenreContainer');
  
  averageScoreByGenreContainer.innerHTML = "<h2>Average Score By Genre:</h2>";

  if (averageScore !== 0) {
    averageScoreByGenreContainer.innerHTML += `<p><strong>${genreInput}</strong>: ${averageScore}</p>`;
  } else {
    averageScoreByGenreContainer.innerHTML += `<p>No movies found for <strong>${genreInput}</strong></p>`;
  }
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(moviesArray) {
return moviesArray.map(movie => {
  const durationParts = movie.duration.split('h ');

  let totalMinutes = 0;

  if (durationParts.length === 2) {
    // Both hours and minutes are present
    const [hours, minutes] = durationParts;
    totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
  } else if (durationParts.length === 1 && durationParts[0].includes('min')) {
    // Only minutes are present
    totalMinutes = parseInt(durationParts[0]);
  } else if (durationParts.length === 1 && durationParts[0].includes('h')) {
    // Only hours are present
    totalMinutes = parseInt(durationParts[0]) * 60;
  }

  return {
    ...movie,
    duration: totalMinutes, // Convert to number
  };
});
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(moviesArray, year) {
  // Filter movies for the specified year
  const moviesOfYear = moviesArray.filter(movie => movie.year === year);

  // Check if there are movies for the specified year
  if (moviesOfYear.length === 0) {
    return []; // Return an empty array if no movies found for the specified year
  }

  // Find the movie with the highest score
  const bestMovie = moviesOfYear.reduce((prevMovie, currentMovie) => {
    return prevMovie.score > currentMovie.score ? prevMovie : currentMovie;
  });

  return [bestMovie]; // Return an array with the best movie
}

function findBestFilmOfYear() {
  // Get the year input from the user
  const yearInput = document.getElementById('yearInput').value;

  // Call the bestFilmOfYear function
  const bestMovies = bestFilmOfYear(movies, parseInt(yearInput));

  // Display the result in the container
  const bestFilmContainer = document.getElementById('bestFilmContainer');
  
  bestFilmContainer.innerHTML = "<h2>Best Film of the Year:</h2>";

  if (bestMovies.length > 0) {
    // Display information about the best movie
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
    // Handle the case where no movies are found for the specified year
    bestFilmContainer.innerHTML += `<p>No movies found for the specified year.</p>`;
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
