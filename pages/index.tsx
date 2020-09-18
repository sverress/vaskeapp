import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToilet,
  faShoePrints,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { useState } from "react";

import {
  Card,
  Container,
  Button,
  CenteredTextContainer,
} from "../components/styled";

const currentWeek = moment().startOf("isoWeek").week();

const Washlist = () => {
  const [week, setWeek] = useState(currentWeek);

  const getKitchen = () => {
    return ["Jonas", "Sverre", "Oskar", "Tor"][week % 4];
  };

  const getHallway = () => {
    return ["Oskar", "Tor", "Jonas", "Sverre"][week % 4];
  };

  const rooms = [
    {
      id: 1,
      title: "Bad",
      icon: <FontAwesomeIcon icon={faToilet} />,
      resposible: week % 2 ? "Jonas" : "Sverre",
    },
    {
      id: 2,
      title: "Kjøkken",
      icon: <FontAwesomeIcon icon={faUtensils} />,
      resposible: getKitchen(),
    },
    {
      id: 3,
      title: "Gang",
      icon: <FontAwesomeIcon icon={faShoePrints} />,
      resposible: getHallway(),
    },
    {
      id: 4,
      title: "Bad",
      icon: <FontAwesomeIcon icon={faToilet} />,
      resposible: week % 2 ? "Oskar" : "Tor",
    },
  ];
  return (
    <Container flexDirection="column">
      <CenteredTextContainer>
        <h1>
          Viser vaskeliste for{" "}
          {week !== currentWeek ? "uke " + week : "denne uken"}
        </h1>
      </CenteredTextContainer>
      <Container justifyContent="center">
        {rooms.map((room) => (
          <Card key={room.id}>
            <CenteredTextContainer flexDirection="column">
              <h3>{room.title}</h3>
              <CenteredTextContainer color="gray">
                {room.icon}
              </CenteredTextContainer>
              <h3>{room.resposible}</h3>
            </CenteredTextContainer>
          </Card>
        ))}
      </Container>
      <Container justifyContent="center" margin={10}>
        <Button onClick={() => setWeek((prev) => prev - 1)}>
          Sjekk ut uke {week - 1}
        </Button>
        <Button onClick={() => setWeek((prev) => prev + 1)}>
          Sjekk ut uke {week + 1}
        </Button>
      </Container>

      {week !== currentWeek ? (
        <Container justifyContent="center">
          <Button onClick={() => setWeek(currentWeek)}>
            Sett til nåværende uke
          </Button>
        </Container>
      ) : null}
    </Container>
  );
};

export default Washlist;
