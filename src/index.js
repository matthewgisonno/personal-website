import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/technologies/react">
          <App page="Technologies" subpage="React" />
        </Route>
        <Route path="/technologies/wordpress">
          <App page="Technologies" subpage="Wordpress" />
        </Route>
        <Route path="/technologies/angular">
          <App page="Technologies" subpage="Angular" />
        </Route>
        <Route path="/technologies">
          <App page="Technologies" subpage="" />
        </Route>
        <Route path="/resume">
          <App page="Resume" subpage="" />
        </Route>
        <Route path="/portfolio">
          <App page="Portfolio" subpage="" />
        </Route>
        <Route path="/contact">
          <App page="Contact" subpage="" />
        </Route>
        <Route path="/">
          <App page="Home" subpage="" />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);