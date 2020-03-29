import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import update from "immutability-helper";

const StyledCard = styled.div`
  background-color: #f5f5f5;
  margin: 3px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 1px #d3d3d3;
  opacity: ${props => (props.used ? 0.1 : 1)};
`;

const Text = styled.div`
  color: ${props => (props.header ? "#808080" : "#000000")};
  font-size: 25px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

const JeopardyContainer = () => {
  const columns = ["Dyr", "Steder", "Farge", "Tid"];
  const points = [100, 200, 300, 400, 500];
  let initialPoints = points.map(point => ({ value: point, used: false }));
  const initialData = columns.map(colHeader => ({
    header: colHeader,
    points: initialPoints
  }));
  const [data, setData] = useState(initialData);
  const [round, setRound] = useState(0);

  const changeUsed = (colHeader, point) => {
    let indexOfCol = -1;
    for (let i = 0; i < data.length; i++) {
      if (data[i].header === colHeader) {
        indexOfCol = i;
      }
    }
    let indexOfPoint = -1;
    for (let i = 0; i < data[indexOfCol].points.length; i++) {
      if (data[indexOfCol].points[i].value === point) {
        indexOfPoint = i;
      }
    }
    const newCol = update(data[indexOfCol], {
      points: {
        $splice: [
          [
            indexOfPoint,
            1,
            {
              value: point,
              used: !data[indexOfCol].points[indexOfPoint].used
            }
          ]
        ]
      }
    });
    const newData = update(data, { $splice: [[indexOfCol, 1, newCol]] });
    setData(newData);
    updateRound(newData);
  };

  const updateRound = newData => {
    let numberOfUsed = 0;
    newData.forEach(category => {
      category.points.forEach(point => {
        if (point.used) {
          numberOfUsed++;
        }
      });
    });
    setRound(numberOfUsed);
  };

  return (
    <>
      <Grid container>
        {data.map(col => (
          <Grid container item xs={3} key={col.header}>
            <Grid container justify={"center"} alignItems={"center"} xs={11}>
              <Text header>{col.header}</Text>
            </Grid>

            {col.points.map(point => (
              <Grid item xs={11} key={point.value}>
                <StyledCard
                  used={point.used}
                  onClick={() => changeUsed(col.header, point.value)}
                >
                  <Text>{point.value}</Text>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Text>Runde {round} av 20</Text>
      </Grid>
    </>
  );
};

export default JeopardyContainer;
