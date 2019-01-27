import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";


class PageHeader extends React.Component {
  render() {
    const { classes, ...rest} = this.props;

    return(
      <Header
      color="transparent"
      brand={
        <h4
          style={{ fontFamily: "'Coiny', cursive", fontSize: '25px', padding: 0, margin: 0 }}
        >Signature Nails</h4>
      }
      links={<HeaderLinks dropdownHoverColor="info" />}
      fixed
      changeColorOnScroll={{
        height: 1,
        color: "success"
      }}
      {...rest}
    />
    )
  }
}

export default withStyles(landingPageStyle)(PageHeader);