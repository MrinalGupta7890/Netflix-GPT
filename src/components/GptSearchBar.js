import { useSelector } from "react-redux";
import lang from "../utils/langauageConstant";
import { useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const GptSearchBar = ({ onSearch }) => {
  const langKey = useSelector((store) => store.config.lang);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`;

    try {
      const response = await fetch(url, API_OPTIONS);
      const data = await response.json();
      onSearch(data.results); // Pass the results to the parent component
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  return (
    <div className="pt-[40%] md:pt-[13%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].getSearchPlaceholder}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-md col-span-3 
             transition-transform duration-300 ease-in-out
             hover:bg-red-800 hover:scale-105 hover:shadow-lg"
          onClick={handleSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
