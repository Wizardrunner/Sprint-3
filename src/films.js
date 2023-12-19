// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie.director);
  console.log("EXERCISE 1 ->", result);
  return result;
}

// Exercise 2: Get the array of movies for a specific director.
function getMoviesFromDirector(moviesArray, director) {
  return moviesArray.filter(movie => movie.director === director);
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
