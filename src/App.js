import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menubar from './components/Navbar/Menubar';
import Home from './pages/Home/Home';
import SearchResult from './pages/SearchResult/SearchResult';
import SingUp from './pages/SingUp/SingUp';
import LogIn from './pages/LogIn/LogIn';
import HouseDetails from './pages/HouseDetails/HouseDetails';
import BookingPage from './pages/BookingPage/BookingPage';

export const dataContext = createContext();

function App() {
  let [checkInOutDate, setCheckInOutDate] = useState({check_in: null, check_out: null});
  const [guestCount, setGuestCount] = useState({adult: 0, child: 0, baby: 0});
  return (
    <dataContext.Provider value={{checkInOutDate, setCheckInOutDate, guestCount, setGuestCount}}>
      <Router>
      <Menubar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/search/:location/:arrival/:departure">
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
          <Route exact path="/booking">
            <BookingPage />
          </Route>
        </Switch>
      </Router>
    </dataContext.Provider>
  );
}

export default App;