import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Broadcast from "../pages/Broadcast/Broadcast";
import Home from "../pages/Home/Home";
import PersonalMessage from "../pages/Message/PersonalMessage";
import NotFoundPage from "../pages/notFound/NotFoundPage";
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
      <Route path='*'>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default Router;
