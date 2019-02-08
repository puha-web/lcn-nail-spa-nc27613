/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import LocationOn from "@material-ui/icons/LocationOn";
import AttachMoney from "@material-ui/icons/AttachMoney";
import GiftCard from "@material-ui/icons/CardGiftcard";
import Work from "@material-ui/icons/Work";



// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";



function HeaderLinks({ ...props }) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { classes, dropdownHoverColor } = props;
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Button
          href="/about-us"
          color="transparent"
          className={classes.navButton}
          round
        >
          About Us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/service"
          color="transparent"
          className={classes.navButton}
          round
        >
          Services
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/gallery"
          color="transparent"
          className={classes.navButton}
          round
        >
          Gallery
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Learn More"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          // buttonIcon={}
          dropdownList={[
            <Link to="/location" className={classes.dropdownLink}>
              <LocationOn className={classes.dropdownIcons} /> Contact
            </Link>,
            // <Link to="/promotion" className={classes.dropdownLink}>
            //   <Promotion className={classes.dropdownIcons} /> Promotions
            // </Link>,
            <Link to="/coupon" className={classes.dropdownLink}>
              <AttachMoney className={classes.dropdownIcons} /> Coupon
            </Link>,
            <Link to="/career" className={classes.dropdownLink}>
              <Work className={classes.dropdownIcons} /> Career
            </Link>,

            //   <Link to="/contact-us" className={classes.dropdownLink}>
            //     <Call className={classes.dropdownIcons} /> Contact Us
            // </Link>,
          ]}
        />
      </ListItem>

    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};

export default withStyles(headerLinksStyle)(HeaderLinks);
