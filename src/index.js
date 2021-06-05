import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
