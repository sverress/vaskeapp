import React from "react";
import styled from "styled-components";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { StylesProvider } from "@material-ui/core/styles";
import { Toolbar, Button, AppBar } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import theme from "./theme";
import RecipieContainer from "./Containers/RecipiesContainer/RecipieContainer";
import WashlistContainer from "./Containers/WashlistContainer/WashlistContainer";

const DashboardContainter = styled.div`
  margin: 5%;
`;

const App = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Button to="/recipies" component={Link}>
              Oppskrifter
            </Button>
            <Button to="/washlist" component={Link}>
              Hvem vasker?
            </Button>
          </Toolbar>
        </AppBar>
        <DashboardContainter>
          <Switch>
            <Route path="/recipies">
              <RecipieContainer />
            </Route>
            <Route path="/washlist">
              <WashlistContainer />
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
