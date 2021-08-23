import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import { Auth0Provider } from "@auth0/auth0-react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login';
import Profile from './components/Profile';
import Logout from './components/Logout';
import { withAuth0 } from '@auth0/auth0-react';
import BestBooks from './BestBooks'
import Fav from './components/Fav';
class App extends React.Component {

  render() {

    return(
      <Auth0Provider
      domain="dev-5xjcxlib.us.auth0.com"
      clientId="HaLB9EGL3ws2TSMU6yiy0pr4wScdYRva"
      redirectUri={window.location.origin}
    >        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
              <Login/>
              <Logout/>
              </Route>
              <Route exact path='/All'>
                <BestBooks/>
              </Route>
              <Route exact path='/profile'>
                <Profile/>
              </Route>
              <Route exact path='/Fav'>
                 <Fav/>
              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
        </Auth0Provider>
    );
  }
}

export default withAuth0(App);
