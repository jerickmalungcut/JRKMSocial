import React, { useState } from "react";
import Axios from "axios";

const NavigationLoggedOut = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // We dont need to set this because it is defined in the App.js "http://localhost:8080/login"
      const response = await Axios.post("/login", {
        username,
        password,
      });
      if (response.data) {
        // console.log(response.data);
        localStorage.setItem("jrkmToken", response.data.token);
        localStorage.setItem("jrkmUsername", response.data.username);
        localStorage.setItem("jrkmAvatar", response.data.avatar);
        props.setLoggedIn(true);
      } else {
        console.log("Incorrect Username/Password");
      }
    } catch (e) {
      console.log("There was a problem", e);
    }
  };

  return (
    <form
      className="flex flex-col lg:flex-row items-center flex-wrap gap-3 w-[80vw] lg:w-auto"
      onSubmit={handleSubmit}
    >
      <input
        autoComplete="off"
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        required
        className="px-3 py-1 rounded-md outline-none border-none w-full lg:w-auto"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="username"
        id="password"
        placeholder="Password"
        required
        autoComplete="off"
        className="px-3 py-1 rounded-md outline-none border-none w-full lg:w-auto"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-400 text-white font-semibold py-1 px-5 rounded-md transition-all duration-300 w-[300px] lg:w-auto"
      >
        Log In
      </button>
    </form>
  );
};

export default NavigationLoggedOut;
