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
        <img className="h-screen object-cover md:h-auto md:object-contain" src={BG_IMAGE} alt="Background" />
      </div>
      <div className="">
      <GptSearchBar onSearch={handleSearchResults} />
      <GptMovieSuggestions movies={movies} />
      </div>
    </div>
  );
};

export default GptSearchPage;
