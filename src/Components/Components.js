import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Row = styled(Container)`
  flex-direction: row;
`;

export const Column = styled(Container)`
  flex-direction: column;
`;
