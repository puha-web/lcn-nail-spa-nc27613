import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";

//data
import aboutUs from '../../db/AboutUs';
import Logo from '../../assets/img/salon/logo/logo.png';
import Style from '../../db/ElementStyles.js';


class PageHeader extends React.Component {
  render() {
    const { classes, ...rest} = this.props;

    return(
      <Header style={{ margin: 0, padding: 0 }}
      color="transparent"
      brand={
          <img src={Logo} style={{height: '50px', margin: 0, padding: 0}}></img>
      }
      links={<HeaderLinks dropdownHoverColor="info" />}
      fixed
      changeColorOnScroll={{
        height: 1,
        color: Style.headerBackground
      }}
      {...rest}
    />
    )
  }
}

export default withStyles(landingPageStyle)(PageHeader);