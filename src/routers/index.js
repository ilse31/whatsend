import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Authenticated from "../middlewares/Authenticated";
import Guest from "../middlewares/Guest";
import Broadcast from "../pages/Broadcast/Broadcast";
import History from "../pages/History/History";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PersonalMessage from "../pages/Message/PersonalMessage";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import PhoneBook from "../pages/PhoneBook/PhoneBook";
import Profile from "../pages/Profile/Profile";

const Router = () => {
  return (
    <Switch>
      <Route exact path='/login'>
        <Guest>
          <Login />
        </Guest>
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/personal-message/:numbers/:names'>
        <Authenticated>
          <PersonalMessage />
          <Footer />
        </Authenticated>
      </Route>
      <Route exact path='/personal-message/'>
        <Authenticated>
          <PersonalMessage />
          <Footer />
        </Authenticated>
      </Route>
      <Route exact path='/broadcast'>
        <Authenticated>
          <Broadcast />
          <Footer />
        </Authenticated>
      </Route>
      <Route exact path='/history'>
        <Authenticated>
          <History />
          <Footer />
        </Authenticated>
      </Route>
      <Route exact path='/phonebook'>
        <Authenticated>
          <PhoneBook />
          <Footer />
        </Authenticated>
      </Route>
      <Route exact path='/account'>
        <Authenticated>
          <Profile />
        </Authenticated>
      </Route>
      <Route path='*'>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default Router;
