import React, { useState } from "react";
import { Grid, Input, Button, Typography } from "@material-ui/core";

const generateRandomDigitNumber = maxNumberOfDigits =>
  Math.round(Math.random() * Math.pow(10, maxNumberOfDigits));
const operations = {
  "*": (...args) => args.reduce((num, product) => product * num, 1),
  "+": (...args) => args.reduce((num, sum) => sum + num, 0),
  "%": (number, percent) => (number * percent) / 100
};
const getRandomOperation = () =>
  Object.keys(operations)[
    Math.floor(Math.random() * Object.keys(operations).length)
  ];

const MathContainer = () => {
  const [firstTerm, setFirstTerm] = useState(generateRandomDigitNumber(2));
  const [secondTerm, setSecondTerm] = useState(generateRandomDigitNumber(2));
  const [operation, setOperation] = useState("*");
  const [answer, setAnswer] = useState(0);
  const [counter, setCounter] = useState(1);
  const [showCorrectAnswer, setshowCorrectAnswer] = useState(false);
  const [
    numberOfShowCorrectAnswerClicks,
    setNumberOfShowCorrectAnswerClicks
  ] = useState(0);
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <div>
          {firstTerm + " "}
          {operation + " "}
          {secondTerm}
        </div>
        <Input onChange={e => setAnswer(e.target.value)}></Input>
        {Number(answer) === operations[operation](firstTerm, secondTerm) ? (
          <Typography>Correct Answer</Typography>
        ) : (
          <Typography>{answer} is not Correct Answer:</Typography>
        )}
        <Button
          onClick={() => {
            setFirstTerm(generateRandomDigitNumber(2));
            setSecondTerm(generateRandomDigitNumber(2));
            setOperation(getRandomOperation());
            setshowCorrectAnswer(false);
            setCounter(prev => prev + 1);
          }}
        >
          Next
        </Button>
        <Button
          onClick={() => {
            setNumberOfShowCorrectAnswerClicks(prev => prev + 1);
            setshowCorrectAnswer(true);
          }}
        >
          Show Answer
        </Button>
        <Typography>Number of quetions given: {counter}</Typography>
        <Typography>
          Number of answers given: {numberOfShowCorrectAnswerClicks}
        </Typography>

        {showCorrectAnswer ? (
          <Typography>
            Correct answer: {operations[operation](firstTerm, secondTerm)}
          </Typography>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default MathContainer;
