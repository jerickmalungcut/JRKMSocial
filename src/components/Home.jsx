import React, { useEffect } from "react";
import Heading from "./Heading";
import SignUp from "./SignUp";

const Home = () => {
  useEffect(() => {
    document.title = "JRKM Social | Home";
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-180px)] container mx-auto md:p-5">
      <Heading />
      <SignUp />
    </div>
  );
};

export default Home;
