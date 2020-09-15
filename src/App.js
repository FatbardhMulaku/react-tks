import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Blog" component={Blog}/>
      </Switch>
    </div>
  );
}

export default App;
