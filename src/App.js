import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';

import './App.css';
import commute from './commute.png';

export default function App() {
  return (
    <div className="App">
      <Router>
        <p>react-starter</p>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <img src={commute} alt="Store" />

        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
