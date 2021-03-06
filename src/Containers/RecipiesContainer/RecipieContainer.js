import React from "react";
import Grid from "@material-ui/core/Grid";
import RecipieCard from "./RecipieCard";
import { recipies } from "../../data";

const RecipieContainer = () => (
  <Grid container spacing={2}>
    {recipies.map(recipie => (
      <RecipieCard recipie={recipie} />
    ))}
  </Grid>
);

export default RecipieContainer;
