import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const searchTerm = "vodka";
  const resp = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: resp.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);
  return <div>Landing</div>;
};

export default Landing;
