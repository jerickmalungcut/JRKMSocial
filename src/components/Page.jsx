import React, { useEffect } from "react";
import Container from "./Container";

const Page = (props) => {
  // This is used to change the title of the page and to scroll to top

  useEffect(() => {
    document.title = `JRKM Social | ${props.title}`;
    window.scrollTo(0, 0);
  }, [props.title]);
  return <Container>{props.children}</Container>;
};

export default Page;
