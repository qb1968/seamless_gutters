import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar  from './Components/Nav'
import Home from './Components/Home'
import SeamlessGutters from './Components/Gutters'
import RoofReplace from './Components/RoofRepl'
import RoofRepair from './Components/RoofRep'
import Windows from './Components/Windows'
import Doors from './Components/Doors';
import Siding from './Components/Siding';
import About from './Components/About';
import More from './Components/More';

function App() {
  return (
    <Router>
    <Switch>
    <div className="App">
      <NavBar />
      
      <Route path="/" exact component={Home} />
      <Route path="/seamlessgutters" exact component={SeamlessGutters} />
      <Route path="/roofreplacement" exact component={RoofReplace} />
      <Route path="/roofrepair" exact component={RoofRepair} />
      <Route path="/windows" exact component={Windows} />
      <Route path="/doors" exact component={Doors} />
      <Route path="/siding" exact component={Siding} />
      <Route path="/about" exact component={About} />
      <Route path="/gallery" exact component={More} />
    </div>
    </Switch>
    </Router>
  );
}

export default App;
