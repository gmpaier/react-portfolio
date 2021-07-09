 import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import './App.css';
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <Nav/>
        <Switch>
          <Route component={About} path="/" exact/>
          <Route component={Project} path="/project"/>
          <Route component={Contact} path="/contact"/>
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
