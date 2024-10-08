import { Link } from "react-router-dom";
import { MOREINFO_ICON, PLAY_ICON } from "../utils/constant";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="my-2 md:m-0">
        <a
          href="https://youtu.be/ea94nqoxnVQ?si=LWTzYiGAxQLvVD6J"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white text-black py-1 md:py-2 px-8 text-xl font-bold rounded-md hover:bg-opacity-80">
            <img
              src={PLAY_ICON}
              alt="Play"
              className="w-6 h-6 mr-2 inline-block align-middle"
            />
            Play
          </button>
        </a>
        <Link to="/detail">
          <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-2 px-6 text-xl bg-opacity-50 rounded-md hover:bg-gray-800 hover:bg-opacity-70 hover:shadow-lg hover:text-gray-100 transition duration-75 ease-in-out">
            <img
              src={MOREINFO_ICON}
              alt="Play"
              className="w-6 h-6 mr-2 inline-block align-middle filter invert"
            />
            More Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;
