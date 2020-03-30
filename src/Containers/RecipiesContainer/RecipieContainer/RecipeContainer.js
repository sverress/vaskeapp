import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Grid, Card, CardHeader } from "@material-ui/core";
import { recipies } from "../../../data";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 100%;
`;

const RecipieContainer = () => {
  const match = useRouteMatch();
  const recipie = recipies.find(recipie => (recipie.link = match.params.name));
  return (
    <Grid container>
      <Grid item sx={6}>
        <StyledCard>
          <CardHeader title="Ingredienser" />
        </StyledCard>
      </Grid>
      <Grid item sx={6}>
        <StyledCard>
          <CardHeader title="Fremgangsmetode" />
        </StyledCard>
      </Grid>
    </Grid>
  );
};

export default RecipieContainer;
