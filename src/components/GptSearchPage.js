import { useState } from "react";
import { BG_IMAGE } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  const [movies, setMovies] = useState([]);

  const handleSearchResults = (results) => {
    setMovies(results);
  };
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_IMAGE} alt="Background" />
      </div>
      <GptSearchBar onSearch={handleSearchResults} />
      <GptMovieSuggestions movies={movies} />
    </div>
  );
};

export default GptSearchPage;
