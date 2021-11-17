import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Broadcast from "../pages/Broadcast/Broadcast";
import History from "../pages/History/History";
import Home from "../pages/Home/Home";
import PersonalMessage from "../pages/Message/PersonalMessage";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import { PageConstruc } from "../pages/pageConstruction/PageConstruc";
import PhoneBook from "../pages/PhoneBook/PhoneBook";
const Router = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Navbar />
        <Home />
      </Route>
      <Route exact path='/personal-message'>
        <Navbar />
        <PersonalMessage />
      </Route>
      <Route exact path='/broadcast'>
        <Navbar />
        <Broadcast />
      </Route>
      <Route exact path='/history'>
        <Navbar />
        <History />
      </Route>
      <Route exact path='/phonebook'>
        <Navbar />
        <PhoneBook />
      </Route>
      <Route exact path='/account'>
        <Navbar />
        <PageConstruc />
      </Route>
      <Route path='*'>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default Router;
