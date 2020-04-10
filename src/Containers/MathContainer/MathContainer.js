import React, { useState } from "react";
import { Grid, Input, Button, Typography } from "@material-ui/core";

const generateRandomDigitNumber = (
  maxNumberOfDigits,
  allowDecimals = false
) => {
  let number = Math.random() * Math.pow(10, maxNumberOfDigits);
  if (allowDecimals && Math.random() < 0.5) {
    return Math.round(number * 10) / 10;
  }
  return Math.round(number);
};

const operations = {
  "*": (...args) => args.reduce((num, product) => product * num, 1),
  "+": (...args) => args.reduce((num, sum) => sum + num, 0),
  "% of": (number, percent) => (number * percent) / 100,
  "-": (number1, number2) => number1 - number2,
  "/": (number1, number2) => number1 / number2,
};

const defalut_config = {
  decimals: false,
  first_bigger: false,
  num_first_decimals: 2,
  num_second_decimals: 2,
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
    setNumberOfShowCorrectAnswerClicks,
  ] = useState(0);
  let operationsConfig = {};
  for (let i = 0; i < Object.keys(operations).length; i++) {
    operationsConfig[Object.keys(operations)[i]] = defalut_config;
  }
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <div>
          {firstTerm + " "}
          {operation + " "}
          {secondTerm}
        </div>
        <Input onChange={(e) => setAnswer(e.target.value)}></Input>
        {Number(answer) === operations[operation](firstTerm, secondTerm) ? (
          <Typography>Correct Answer</Typography>
        ) : (
          <Typography>{answer} is not Correct Answer:</Typography>
        )}
        <Button
          onClick={() => {
            const newOperation = getRandomOperation();
            console.log(newOperation);
            const operationConfig = operationsConfig[newOperation];
            console.log(operationConfig);
            let first = generateRandomDigitNumber(
              operationConfig.num_first_decimals,
              operationsConfig.decimals
            );
            let second = generateRandomDigitNumber(
              operationConfig.num_second_decimals,
              operationsConfig.decimals
            );
            if (operationConfig.first_bigger) {
              // First term needs to be bigger than second
              while (first <= second) {
                first = generateRandomDigitNumber(2);
                second = generateRandomDigitNumber(2);
              }
            }
            setOperation(newOperation);
            setFirstTerm(first);
            setSecondTerm(second);
            setshowCorrectAnswer(false);
            setCounter((prev) => prev + 1);
          }}
        >
          Next
        </Button>
        <Button
          onClick={() => {
            setNumberOfShowCorrectAnswerClicks((prev) => prev + 1);
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
