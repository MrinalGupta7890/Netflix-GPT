import React from "react";
import {
  BG_IMAGE,
  MOREINFO_ICON,
  MOVIE_DETAIL_POSTER,
  NETFLIXLOGO,
  PLAY_ICON,
} from "../utils/constant";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  return (
    <div
      className="fixed h-screen bg-cover bg-center overflow-y-auto"
      style={{ backgroundImage: `url(${BG_IMAGE})` }}
    >
      <div className="absolute w-screen px-16 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img
          className="w-44 mx-auto md:mx-0"
          src={NETFLIXLOGO}
          alt="Netflix Logo"
        />
        <Link to="/browse">
          <button className="py-2 px-4 mx-8 bg-purple-500 text-white rounded-md">
            Home
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center h-screen mt-16">
        <div className="flex justify-center items-center">
          <img
            className="mb-4 w-[50%]"
            src={MOVIE_DETAIL_POSTER}
            alt="play icon"
          />
        </div>
        <div className=" bg-gradient-to-b from-black text-center">
          <h1 className="mb-2 text-xl md:text-5xl font-bold text-white">
            Deadpool & Wolverine
          </h1>
          <p className="text-lg text-gray-200">
            Deadpool & Wolverine is a 2024 American superhero film based on
            Marvel Comics featuring the characters Deadpool and Wolverine.
            Produced by Marvel Studios, Maximum Effort, and 21 Laps
            Entertainment, and distributed by Walt Disney Studios Motion
            Pictures, it is the 34th film in the Marvel Cinematic Universe (MCU)
            and the sequel to Deadpool (2016) and Deadpool 2 (2018). The film
            was directed by Shawn Levy from a screenplay he wrote with Ryan
            Reynolds, Rhett Reese, Paul Wernick, and Zeb Wells. In the film,
            Deadpool learns that the Time Variance Authority is set to destroy
            his universe and works with a reluctant Wolverine from another
            universe to stop them.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-white text-black py-1 md:py-2 px-8 text-xl font-bold rounded-md hover:bg-opacity-80">
            <img
              src={PLAY_ICON}
              alt="Play"
              className="w-6 h-6 mr-2 inline-block align-middle"
            />
            Play
          </button>
          <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-2 px-6 text-xl bg-opacity-50 rounded-md">
            <img
              src={MOREINFO_ICON}
              alt="Play"
              className="w-6 h-6 mr-2 inline-block align-middle filter invert"
            />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
