import React from "react";

const Heading = () => {
  return (
    <div className="lg:flex-1 py-6 md:py-0">
      <h1 className="heading text-4xl lg:text-6xl text-center lg:text-left my-5">
        Remember Writing?
      </h1>
      <p className="text-gray-500 leading-6 lg:leading-8 text-base lg:text-lg max-w-xl px-5 lg:px-0 mb-2">
        Are you sick of short tweets and impersonal "shared" posts that are
        reminiscent of the late 90's email forwards? We believe getting back to
        actually writing is the key to enjoying the internet again.
      </p>
    </div>
  );
};

export default Heading;
