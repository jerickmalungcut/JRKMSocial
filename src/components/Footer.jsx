import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const d = new Date();
  const yearToday = d.getFullYear();

  return (
    <footer className="w-full border-t border-gray-400 text-gray-600 tracking-wide flex flex-col justify-center items-center gap-3 py-3 ">
      <div className="links">
        <Link to="/">Home</Link> | <Link to="/about">About Us</Link> |{" "}
        <Link to="/terms">Terms</Link>
      </div>
      <div className="copyright">
        Copyright &copy; {yearToday} JRKM Social App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
