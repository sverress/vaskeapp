import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { Typography, Button } from "@material-ui/core";
import * as moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToilet,
  faShoePrints,
  faUtensils,
  faCalendarPlus,
  faCalendarMinus,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";

const WashCard = styled(Grid)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  min-height: 100px;
  min-width: 100px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const StyledGrid = styled(Grid)`
  margin: 10px;
`;

const StyledButton = styled(Button)`
  background-color: #dddddd;
  margin: 3px;
  &:hover {
    background-color: #cccccc;
  }
`;
const TextBox = styled(Grid)`
  text-align: center;
  margin: auto;
  color: ${props => (props.isBlack ? "black" : "gray")};
  margin: ${props => (props.margin ? props.margin : 0)}px;
`;

const currentWeek = moment().week();

const WashlistContainer = () => {
  const [week, setWeek] = useState(currentWeek);

  const getKitchen = () => {
    return ["Sverre", "Harald", "Tor", "Alex"][week % 4];
  };

  const getHallway = () => {
    return ["Tor", "Alex", "Sverre", "Harald"][week % 4];
  };

  const rooms = [
    {
      title: "Bad",
      icon: <FontAwesomeIcon icon={faToilet} />,
      resposible: week % 2 ? "Sverre" : "Harald"
    },
    {
      title: "Kjøkken",
      icon: <FontAwesomeIcon icon={faUtensils} />,
      resposible: getKitchen()
    },
    {
      title: "Gang",
      icon: <FontAwesomeIcon icon={faShoePrints} />,
      resposible: getHallway()
    },
    {
      title: "Bad",
      icon: <FontAwesomeIcon icon={faToilet} />,
      resposible: week % 2 ? "Tor" : "Alex"
    }
  ];

  return (
    <>
      <TextBox isBlack margin={6}>
        <Typography variant="h5">Viser vaskeliste for uke {week}</Typography>
      </TextBox>
      <Grid container justify="center" direction="row" spacing={3}>
        {rooms.map(room => (
          <Grid item sm={3}>
            <WashCard
              container
              alignContent="center"
              direction="column"
              onClick={() => console.log()}
            >
              <TextBox item>
                <Typography variant="h5">{room.title}</Typography>
                {room.icon}
              </TextBox>
              <TextBox item isBlack>
                <Typography variant="h5">{room.resposible}</Typography>
              </TextBox>
            </WashCard>
          </Grid>
        ))}
      </Grid>
      <StyledGrid container justify="flex-start">
        <StyledButton onClick={() => setWeek(currentWeek)}>
          <Typography variant="p">Sett til nåværende uke</Typography>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </StyledButton>
        <StyledButton onClick={() => setWeek(prev => prev - 1)}>
          <Typography variant="p">Sjekk ut uke {week - 1}</Typography>
          <FontAwesomeIcon icon={faCalendarMinus} />
        </StyledButton>
        <StyledButton onClick={() => setWeek(prev => prev + 1)}>
          <Typography variant="p">Sjekk ut uke {week + 1}</Typography>
          <FontAwesomeIcon icon={faCalendarPlus} />
        </StyledButton>
      </StyledGrid>
    </>
  );
};

export default WashlistContainer;
