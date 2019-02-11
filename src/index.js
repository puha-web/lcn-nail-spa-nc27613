import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import Header from './views/Components/Header.jsx';
import Footer from './views/Components/Footer.jsx';


import AboutUs from "views/LandingPage/AboutUs.jsx";
import Contact from "views/Contact/Contact.jsx";
import Coupon from "views/Coupon/Coupon.jsx";
import Gallery from "views/Gallery/Gallery.jsx";
import Services from 'views/Services/Services.jsx';
import Career from 'views/Career/Career.jsx';

import ReactGA from 'react-ga';

import "assets/scss/material-kit-pro-react.css?v=1.2.0";
// import SocialMedia from "./views/Components/SocialMedia.jsx";


function initializeReactGA() {
  ReactGA.initialize('UA-134242110-1');
  ReactGA.pageview('/');
  ReactGA.pageview('/service');
  ReactGA.pageview('/gallery');
  ReactGA.pageview('/career');
  ReactGA.pageview('/location');
  ReactGA.pageview('/coupon');
};

initializeReactGA();

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist} basename={process.env.PUBLIC_URL}>
  <div>
    <Header />
    <Switch>
      <Route exact path='/'  component={AboutUs} />
      <Route exact path='/about-us' component={AboutUs} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/coupon' component={Coupon} />
      <Route exact path='/gallery' component={Gallery} />
      <Route exact path='/service' component={Services} />
      <Route exact path='/career' component={Career} />
    </Switch>
    {/* <SocialMedia /> */}
    <Footer />
    </div>
  </Router>,
  document.getElementById("root")
);
