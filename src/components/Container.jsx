import React from "react";

const Container = (props) => {
  return (
    <div className="container mx-auto min-h-[calc(100vh-180px)] mt-6">
      {props.children}
    </div>
  );
};

export default Container;
