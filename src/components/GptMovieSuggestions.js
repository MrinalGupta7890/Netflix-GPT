import MovieList from "./MovieList";

const GptMovieSuggestions = ({ movies }) => {
	return (
		<div className="p-4 m-4 bg-black text-white bg-opacity-90">
		{movies && movies.length > 0 ? (
		  <MovieList title="Search Results" movies={movies} />
		) : (
		  <p>No results found.</p>
		)}
	  </div>
	);
  };
  
  export default GptMovieSuggestions;