import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import { Nav } from './Components/Nav';
import { Home } from './Pages/Home';
import { Create } from './Pages/Create';
import { SinglePost } from './Pages/SinglePost';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/create' component={Create} />
          <Route path='/:id' exact component={SinglePost} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
