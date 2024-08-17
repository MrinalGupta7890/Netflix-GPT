import React from "react";
import { NETFLIXLOGO } from "../utils/constant";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  return (
    <div
      className="fixed h-screen w-screen bg-cover"
      style={{ backgroundImage: `url('/Images/MovieDetails.png')` }}
    >
      <div className="absolute w-screen px-16 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img
          className="w-44 mx-auto md:mx-0"
          src={NETFLIXLOGO}
          alt="Netflix Logo"
        />
        <Link to="/browse">
          <button className="py-2 px-4 mx-8 my-4 bg-purple-500 text-white rounded-md">
            Close
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;
