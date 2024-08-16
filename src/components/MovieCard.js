import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <Link to="/detail">
    <div className="w-36 md:w-48 pr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  </Link>
  );
};

export default MovieCard;
