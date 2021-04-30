import React from 'react'
import Inicio from './components/Inicio'
import Base from './components/Base'
import reactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Link to="/inicio">Inicio </Link>
      <Link to="/">Base</Link>


    <Switch>
    <Route exact path="/">
        <Base/>
      </Route>
      <Route path="/inicio/:id/:nombre/:edad">
        <Inicio/>      
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
