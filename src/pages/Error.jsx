import React from "react";
import { useRouteError, Link } from "react-router-dom";
import img from "../assets/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
const Error = () => {
  const error = useRouteError();

  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not-found-image" />
          <h3>Oops!</h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to={"/"}>back home</Link>
        </div>
      </Wrapper>
    );
  }

  return <Wrapper>Something went wrong</Wrapper>;
};

export default Error;
