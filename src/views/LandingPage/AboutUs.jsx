import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import Spotlight from "../Components/Spotlight.jsx";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";

// Sections for this page
import About from "./Sections/SectionAbout.jsx";
import Services from "./Sections/SectionWeOffer.jsx";
import OpenHrs from "./Sections/SectionHours.jsx";
import Specials from "./Sections/SectionSpecials.jsx";
import SocialMedia from "../Components/SocialMedia.jsx";
import SalonPhoto from './Sections/SalonPhotos.jsx';

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes} = this.props;
    return (
      <div>
        <Spotlight />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <About />
            <Services />
            <Specials />
            <OpenHrs />
            <SalonPhoto />
            <SocialMedia />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
