import React from "react";
import { Link } from "react-router-dom";

import { BiSearch } from "react-icons/bi";
import { BiMessageRounded } from "react-icons/bi";

function NavigationLoggedIn(props) {
  const handleLogout = () => {
    props.setLoggedIn(false);
    localStorage.removeItem("jrkmToken");
    localStorage.removeItem("jrkmUsername");
    localStorage.removeItem("jrkmAvatar");
  };

  return (
    <div className="flex items-center gap-x-4">
      <a href="/" className="text-white">
        <BiSearch size={20} />
      </a>
      <a href="/" className="text-white">
        <BiMessageRounded size={20} />
      </a>
      <a href="/" className="inline-block rounded-full h-7 w-7 overflow-hidden">
        {/* <div className="bg-white w-full h-full"></div> */}
        <img
          src={localStorage.getItem("jrkmAvatar")}
          alt="Avatar"
          className="w-full h-full"
        />
      </a>
      <Link
        to={"/create-post"}
        className="bg-green-500 hover:bg-green-400 text-white font-semibold py-1 px-5 rounded-md transition-all duration-300 w-[300px] lg:w-auto"
      >
        Create Post
      </Link>
      <button
        onClick={handleLogout}
        className="bg-gray-500 hover:bg-gray-400 text-white font-semibold py-1 px-5 rounded-md transition-all duration-300 w-[300px] lg:w-auto"
      >
        Sign Out
      </button>
    </div>
  );
}

export default NavigationLoggedIn;
