import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menubar from './components/Navbar/Menubar';
import Home from './pages/Home/Home';
import SearchResult from './pages/SearchResult/SearchResult';
import SingUp from './pages/SingUp/SingUp';

function App() {
  return (
    <div>
      <Router>
      <Menubar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/search/:location">
            <SearchResult />
          </Route>
          <Route exact path="/sign-up">
            <SingUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;