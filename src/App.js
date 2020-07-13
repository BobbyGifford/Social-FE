import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import { Home } from './Pages/Home';
import { Create } from './Pages/Create';
import { Nav } from './Components/Nav';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/create' component={Create} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
