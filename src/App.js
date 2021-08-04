import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import ContactUs from './components/Pages/ContactUs';
import Donate from './components/Pages/Donate';

function App() {
  return (
    <Router>
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/donate' component={Donate} />
      </Switch>
    </>
    </Router>
  );
}

export default App;