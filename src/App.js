import React from "react";
import styled from "styled-components";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import theme from "./theme";
import RecipieContainer from "./Containers/RecipiesContainer/RecipieContainer";
import WashlistContainer from "./Containers/WashlistContainer/WashlistContainer";
import JeopardyContainer from "./Containers/JeopardyContainer/JeopardyContainer";
import MathContainer from "./Containers/MathContainer/MathContainer";

const DashboardContainter = styled.div`
  margin: 5%;
`;

const App = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <Router>
        <DashboardContainter>
          <Switch>
            <Route path="/math">
              <MathContainer />
            </Route>
            <Route path="/recipies">
              <RecipieContainer />
            </Route>
            <Route path="/washlist">
              <WashlistContainer />
            </Route>
            <Route path="/jeopardy">
              <JeopardyContainer />
            </Route>
            <Route path="/">
              <WashlistContainer />
            </Route>
          </Switch>
        </DashboardContainter>
      </Router>
    </MuiThemeProvider>
  </StylesProvider>
);
export default App;
