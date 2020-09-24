import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import LoginPage from './components/views/LoginPage/LoginPage';
import LandingPage from './components/views/LandingPage/LandingPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import NavBar from './components/views/NavBar/NavBar';
import Footer from './components/views/Footer/Footer';


function App() {
  return (
    <Router>

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />  
        <Route exact path="/register" component={RegisterPage} />             
      </Switch>
    
  </Router>
  );
}

export default App;

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
