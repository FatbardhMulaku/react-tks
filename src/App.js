import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Contact" component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
