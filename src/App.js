import "./App.css";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// 74d1670f

const API_URL = "http://www.omdbapi.com?apikey=74d1670f";
// const movie1 = {
//   Title: "Spiderman",
//   Year: "2010",
//   imdbID: "tt1785572",
//   Type: "movie",
//   Poster: "N/A",
// };
const App = () => {
  // We can have multiple states and multiple useEffect hooks per one component. There is no limi
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // async is a function that takes time to fetch this data
  const searchMovies = async (title) => {
    // template string inside of fetch
    // This calls our API
    const response = await fetch(`${API_URL} &s=${title}`);
    // Inside of this dta object we should havethis data about the movies
    const data = await response.json();
    // We only want to see the array of movies found
    // console.log(data.Search);
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="App">
      <h1>MoviesToday</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
