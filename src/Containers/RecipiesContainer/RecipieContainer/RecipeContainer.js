import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Grid, Card, CardHeader } from "@material-ui/core";
import { recipies } from "../../../data";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: #f5f5f5;
`;

const RecipieContainer = () => {
  const match = useRouteMatch();
  const recipie = recipies.find(recipie => (recipie.link = match.params.name));
  return (
    <Grid container sx={12}>
      <Grid item sx={6}>
        <StyledCard>
          <ul>
            {recipie.ingredients.map(ingredient => (
              <li>
                {ingredient.name}
                {ingredient.amount}
                {ingredient.metric}
              </li>
            ))}
          </ul>
        </StyledCard>
      </Grid>
      <Grid item sx={6}>
        <StyledCard>
          <ol>
            {recipie.steps.map(step => (
              <li>{step}</li>
            ))}
          </ol>
        </StyledCard>
      </Grid>
    </Grid>
  );
};

export default RecipieContainer;
