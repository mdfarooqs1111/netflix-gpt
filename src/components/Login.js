import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/IN-en-20251020-TRIFECTA-perspective_d6da84e9-6145-4b1e-bb51-e402c966a045_large.jpg"
          alt="App Logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          required
          className="p-4 m-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="p-4 m-4 w-full bg-gray-700"
        />
        <button
          type="submit"
          className="bg-red-600 text-white p-4 m-4 w-full rounded-lg"
        >
          Sign In
        </button>
        <p className="text-gray-400 m-4">New to Netflix? Sign up now.</p>
      </form>
    </div>
  );
};

export default Login;
