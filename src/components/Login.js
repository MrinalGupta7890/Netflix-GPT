import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
          alt="Logo"
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-75">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
            <input 
                type="text" 
                placeholder="Full Name" 
                className="p-4 my-4 w-full bg-slate-800 rounded-sm" 
            />
        )}
        <input 
            type="text" 
            placeholder="Email" 
            className="p-4 my-4 w-full bg-slate-800 rounded-sm" 
        />
        <input
          type="Password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-slate-800 rounded-sm"
        />
        <button className="p-2 my-6 bg-red-700 w-full rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In now"}</p>
      </form>
    </div>
  );
};

export default Login;
