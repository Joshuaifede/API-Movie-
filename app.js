class Movie {
constructor(title, genre, year, available) {
this.title = title;
this.genre = genre;
this.year = year;
this.available = available;
}
} 

class MovieStore {
constructor() {
this.inventory = [];
}
addMovie(title, genre, year) {
const movie = new Movie(title, genre, year, true);
this.inventory.push(movie);
}


rentMovie(title) {
const movie = this.inventory.find((movie) => movie.title === title);
if (movie && movie.available) {
movie.available = false;
return `${title} has been rented successfully.`;
}
 else {
return `${title} is not available for rent.`;
}
}


returnMovie(title) {
const movie = this.inventory.find((movie) => movie.title === title);
if (movie && !movie.available) {
movie.available = true;
return `${title} has been returned successfully.`;
} else {
return `${title} is not a valid movie to return.`;
}
}
listAvailableMovies() {
const availableMovies = this.inventory.filter((movie) => movie.available);
return availableMovies;
}
} 


const myMovieStore = new MovieStore();
myMovieStore.addMovie("The Shawshank Redemption", "Drama", 1994);
myMovieStore.addMovie("The Dark Knight", "Action", 2008);
myMovieStore.addMovie("Inception", "Sci-Fi", 2010);
console.log(myMovieStore.rentMovie("The Dark Knight")); // Output: "The Dark Knight has been
//rented successfully."
console.log(myMovieStore.listAvailableMovies());
// Output:
// [
// Movie { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994, available: true },
// Movie { title: 'Inception', genre: 'Sci-Fi', year: 2010, available: true }
// ]
console.log(myMovieStore.returnMovie("The Dark Knight")); // Output: "The Dark Knight has
// been returned successfully."