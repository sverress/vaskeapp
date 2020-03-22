import React from "react";
import { useRouteMatch } from "react-router-dom";
import Card from "@material-ui/core/Card";

const RecipieContainer = () => {
  const match = useRouteMatch();
  console.log(match);
  return <Card>{match.params.name}</Card>;
};

export default RecipieContainer;
