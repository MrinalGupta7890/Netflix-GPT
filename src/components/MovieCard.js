import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <Link to="/detail">
      <div className="w-36 md:w-48 pr-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        <img
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
          className="w-full h-auto rounded-md"
        />
      </div>
    </Link>
  );
};

export default MovieCard;
