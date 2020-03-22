import React from "react";
import styled from "styled-components";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { useHistory, useRouteMatch } from "react-router-dom";

const generateTimeText = (hours, minutes) => {
  const addS = (number, string) =>
    `${number} ${number > 1 ? string + "s" : string}`;
  if (hours === 0 && minutes === 0) {
    return `Takes no time at all`;
  } else if (hours === 0) {
    return `${addS(minutes, "minute")}`;
  } else if (minutes === 0) {
    return `${addS(hours, "hour")}`;
  } else {
    return `${addS(hours, "hour")} and ${addS(minutes, "minute")}`;
  }
};

const StyledCard = styled(Card)`
  background-color: #eeeeef;
`;

const RecipieCard = ({ recipie }) => {
  const history = useHistory();
  const match = useRouteMatch();
  return (
    <Grid item>
      <StyledCard onClick={() => history.push(`${match.url}/${recipie.link}`)}>
        <CardHeader
          title={recipie.title}
          subheader={generateTimeText(recipie.timeHours, recipie.timeMinutes)}
        />
      </StyledCard>
    </Grid>
  );
};

export default RecipieCard;
