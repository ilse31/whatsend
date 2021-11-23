import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Broadcast from "../pages/Broadcast/Broadcast";
import History from "../pages/History/History";
import Home from "../pages/Home/Home";
import PersonalMessage from "../pages/Message/PersonalMessage";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import PhoneBook from "../pages/PhoneBook/PhoneBook";
import Profile from "../pages/Profile/Profile";

const Router = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/personal-message'>
        <PersonalMessage />
        <Footer />
      </Route>
      <Route exact path='/broadcast'>
        <Broadcast />
        <Footer />
      </Route>
      <Route exact path='/history'>
        <History />
        <Footer />
      </Route>
      <Route exact path='/phonebook'>
        <PhoneBook />
        <Footer />
      </Route>
      <Route exact path='/account'>
        <Profile />
      </Route>
      <Route path='*'>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default Router;
