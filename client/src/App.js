import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Homie from "./pages/Homie";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Nav";

const App = () => (
  <MuiThemeProvider>
  <Router>
    
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homie} />
        <Route exact path="/login" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </div>
   
  </Router>
  </MuiThemeProvider>
);

export default App;
