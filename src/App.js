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
import HouseDetails from './pages/HouseDetails/HouseDetails';
import BookingPage from './pages/BookingPage/BookingPage';

function App() {
  return (
    <div>
      <Menubar />
      <Router>
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
          <Route exact path="/house/:houseId">
            <HouseDetails />
          </Route>
          <Route exact path="/booking">
            <BookingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;