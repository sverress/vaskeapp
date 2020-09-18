import styled from "styled-components";
import Container from "./Container";

const Card = styled(Container)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  min-height: 120px;
  min-width: 120px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  margin: 3px;
  border-radius: 5px;
`;

export default Card;
