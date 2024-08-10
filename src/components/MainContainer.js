import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  
  if(!movies) return;

  const mainMovies = movies[0];
  console.log(mainMovies); 

  return (
    <div>
      <VideoTitle />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
