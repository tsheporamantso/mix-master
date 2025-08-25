import React from "react";
import { useRouteError } from "react-router-dom";
import styled from "styled-components";
const SinglePageError = () => {
  const error = useRouteError();
  return <Wrapper>{error.message}</Wrapper>;
};

const Wrapper = styled.h5`
  color: red;
`;

export default SinglePageError;
