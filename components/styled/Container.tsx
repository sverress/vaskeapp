import styled from "styled-components";

interface Container {
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  backgroundColor?: string;
  color?: string;
  margin?: number;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "start"
    | "end"
    | "left"
    | "right"
    | "safe"
    | "unsafe";
}

const Container = styled.div<Container>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  ${(props) => "background-color: " + props.backgroundColor || "white"};
  color: ${(props) => props.color || props.theme.colors.primary};
  ${(props) => "margin: " + props.margin + "px"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Container;
