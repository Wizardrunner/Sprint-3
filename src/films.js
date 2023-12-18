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
function moviesAverageOfDirector(array, director) {
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
