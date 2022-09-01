import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Search from './components/Search';
import Profile from './components/Profile';

// Just a variable with some JSX, not a component:
const routes = (
  <Router>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/search" element={ <Search /> } />
      <Route path="/profile/:username" element={ <Profile /> } />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  routes
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
