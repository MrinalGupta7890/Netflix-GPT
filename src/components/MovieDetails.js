import React from "react";
import { NETFLIXLOGO, PLAY_ICON } from "../utils/constant";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  return (
    <div 
      className="fixed h-screen w-screen bg-cover "
      style={{ backgroundImage: `url('/Images/MovieDetails.png')` }}
    >
      <div className="absolute w-full px-4 py-2 md:px-16 md:py-4 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center md:items-start">
        <img
          className="w-32 md:w-44 mx-auto md:mx-0"
          src={NETFLIXLOGO}
          alt="Netflix Logo"
        />
        <Link to="/browse">
          <button className="py-2 px-6 my-4 bg-purple-500 text-white rounded-md">
            Close
          </button>
        </Link>
      </div>
      <div className="absolute bottom-14 left-4 md:left-20 z-10">
      <a href="https://youtu.be/vEhYTJpC2No?si=ug37QPIQ1HONWyg_" target="_blank" rel="noopener noreferrer">
        <button className="bg-white text-black py-2 px-8 text-xl font-bold rounded-md hover:bg-opacity-80 flex">
          <img
            src={PLAY_ICON}
            alt="Play"
            className="w-6 h-6 mr-2 inline-block align-middle"
          />
          Play
        </button>
        </a>
      </div>
    </div>
  );
};

export default MovieDetails;
