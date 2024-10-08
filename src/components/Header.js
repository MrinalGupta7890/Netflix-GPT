import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import {
  NETFLIXLOGO,
  SUPPORTED_LANGUAGES,
  USER_AVATAR,
} from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmount
    return unsubscribe;
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-16 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-44 mx-auto md:mx-0"
        src={NETFLIXLOGO}
        alt="Netflix Logo"
      />
      {user && (
        <div className="flex items-center p-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="py-2 px-4 mx-8 bg-purple-500 text-white rounded-md hover:bg-purple-700 hover:shadow-lg transition duration-75 ease-in-out"
          >
            {showGptSearch ? "Home" : "Search"}
          </button>
          <img
            className="hidden md:block w-9 h-9"
            src={USER_AVATAR}
            alt="UserIcon"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white mx-1 bg-transparent border-2 border-white py-1 px-3 rounded-md hover:bg-white hover:text-black hover:border-transparent transition duration-75 ease-in-out"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
