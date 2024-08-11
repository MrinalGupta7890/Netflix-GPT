import { MOREINFO_ICON, PLAY_ICON } from "../utils/constant";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-8 text-xl font-bold rounded-md hover:bg-opacity-80">
          <img
            src={PLAY_ICON}
            alt="Play"
            className="w-6 h-6 mr-2 inline-block align-middle"
          />
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-6 text-xl bg-opacity-50 rounded-md">
        <img
            src={MOREINFO_ICON}
            alt="Play"
            className="w-6 h-6 mr-2 inline-block align-middle filter invert"
          />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
