import React from "react";
import styled from "styled-components";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { StylesProvider } from "@material-ui/core/styles";
import { Toolbar, Button, AppBar } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { routes } from "./routeConfig";
import theme from "./theme";

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
            {routes.map(route => (
              <Route
                path={route.path}
                exact={route.exact}
                render={props => (
                  <route.component {...props} routes={route.routes} />
                )}
              />
            ))}
          </Switch>
        </DashboardContainter>
      </Router>
    </MuiThemeProvider>
  </StylesProvider>
);
export default App;
