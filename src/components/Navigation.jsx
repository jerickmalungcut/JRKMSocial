import React from "react";
import { Link } from "react-router-dom";
import NavigationLoggedOut from "./NavigationLoggedOut";
import NavigationLoggedIn from "./NavigationLoggedIn";

const Navigation = (props) => {
  return (
    <nav className="bg-blue-600 w-full pb-6 lg:pb-0">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-4">
        <Link
          to="/"
          className="logo text-white font-semibold text-2xl lg:text-3xl cursor-pointer my-4 lg:my-0"
        >
          JRKM Social
        </Link>
        {props.loggedIn ? (
          <NavigationLoggedIn setLoggedIn={props.setLoggedIn} />
        ) : (
          <NavigationLoggedOut setLoggedIn={props.setLoggedIn} />
        )}
      </div>
    </nav>
  );
};

export default Navigation;
