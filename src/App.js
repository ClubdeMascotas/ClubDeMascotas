import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Adopt from './Components/Adopt/Adopt';
import WhyAdopt from './Components/WhyAdopt/WhyAdopt';
import TakeCare from './Components/TakeCare/TakeCare';
import Veterinary from './Components/Veterinary/Veterinary';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Route exact path="/" component={Home} />
            <Route path="/adopt" component={Adopt} />
            <Route exact path="/whyadopt" component={WhyAdopt} />
            <Route exact path="/takecare" component={TakeCare} />
            <Route exact path="/veterinary" component={Veterinary} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
