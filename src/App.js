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
import LogIn from './pages/LogIn/LogIn';
import HouseDetails from './pages/HouseDetails/HouseDetails';

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
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/house/:houseId">
            <HouseDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;