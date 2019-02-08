import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";

//data
import Logo from '../../assets/img/salon/logo/logo.png';
import Style from '../../db/ElementStyles.js';


class PageHeader extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <Header
        color="transparent"
        brand={<div style={Style.brandName} >
                  <span><img id='salon-logo' src={Logo}  style={Style.logo}/></span>
                  <span>NAIL SPA</span>
              </div> 
              }
        links={<HeaderLinks dropdownHoverColor={Style.dropdownColorBackground} style={Style.NavMenu}/>}
        fixed
        changeColorOnScroll={{
          height: 1,
          color: Style.headerBackground,
        }}
        {...rest}
      />
    )
  }
}

export default withStyles(landingPageStyle)(PageHeader);