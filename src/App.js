import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';
import User from './Views/User';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header/>       
          
        <div className="p-3">
         <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/user/:id">
              <User/>
            </Route>
          </Switch>
        </div>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
