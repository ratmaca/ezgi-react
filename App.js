import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
