
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import OpenHrs from "@material-ui/icons/EventAvailable";
import ClosedHrs from "@material-ui/icons/EventBusy";
import WalkIn from "@material-ui/icons/TagFaces";
import CreditCard from "@material-ui/icons/CreditCard";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.jsx";


//Components
import SalonPhoto from './salonGallery.jsx';
import ServiceBgImg from 'assets/img/salon/serviceBg.jpg';
import SocialMedia from "../Components/SocialMedia.jsx";


//Data
import aboutData from '../../db/AboutUs';
import elementStyle from '../../db/ElementStyles';

const CustomSkinMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 28.9085061, lng: -81.9717989 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
      }}
    >
      <Marker position={{ lat: 28.9085061, lng: -81.9717989 }} label={aboutData.salonName} />

    </GoogleMap>
  ))
);

class Location extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 5);
    document.body.scrollTop = 0;
  }
  render() {

    const { classes } = this.props;
    const phoneNum = 'tel:' + aboutData.phone;


    return (
      <div>
        {/* <Header /> */}
        <div className={classes.bigMap}>
          <CustomSkinMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCAujiH1lsqv_cLpTQRZS9L6h4cNPcJ-s"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{
                  height: `100%`,
                  borderRadius: "6px",
                  overflow: "hidden"
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className={classNames(classes.main, classes.mainRaised)} >
          <div className={classes.contactContent}
          >
            <div className={classes.container}>
              {/* <h2 className={classes.title}>Our Location</h2> */}
              <GridContainer>
                <GridItem md={8} sm={8} className={classes}>
                  <Card style={{ backgroundImage: `url(${ServiceBgImg})` }}>
                    <CardHeader
                      contact
                      color={elementStyle.btnColor}
                      className={classes.textCenter}
                    >
                      <h4 className={classes.cardTitle}>Contact Us</h4>
                    </CardHeader>
                    <CardBody>
                      <GridContainer>
                        <GridItem>
                          <InfoArea
                            className={classes.info}
                            title={aboutData.phone}
                            description={
                              <Button
                                round
                                color={elementStyle.btnColor}
                                size="sm"
                                href={phoneNum}
                                rel="noopener noreferrer"
                              >
                                Call Now</Button>
                            }
                            icon={Phone}
                            iconColor={elementStyle.iconColor}
                          />
                          <InfoArea
                            className={classes.info}
                            title={
                              <div>
                                <span>
                                  {aboutData.address.street}, {aboutData.address.city}, {aboutData.address.state}. {aboutData.address.zipCode}
                                </span>
                              </div>
                            }
                            description={
                              <Button
                                round
                                color={elementStyle.btnColor}
                                size="sm"
                                href={aboutData.addressLink}
                                target="_blank"
                                rel={aboutData.addressLink}
                              >
                                Get Directions
                                  </Button>
                            }
                            icon={PinDrop}
                            iconColor={elementStyle.iconColor}
                          />
                          <InfoArea
                            className={classes.info}
                            title="Walks-In Welcome"
                            icon={WalkIn}
                            iconColor={elementStyle.iconColor}
                          />
                          <InfoArea
                            className={classes.info}
                            title="We Accept Credit Cards"
                            icon={CreditCard}
                            iconColor={elementStyle.iconColor}
                          />
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem md={4} sm={4} className={classes.mlAuto}>
                  <Card className={classes.card1}>
                    {/* <CardHeader
                    contact
                    color={elementStyle.btnColor}
                    className={classes.textCenter}
                  >
                    <h4 className={classes.cardTitle}>Business Hours</h4>
                  </CardHeader> */}
                    <CardBody>
                      <GridContainer>

                        <GridItem xs={12} sm={12} md={12}>
                          <h4 className={classes.cardTitle}><strong>We Open</strong></h4>

                          {aboutData.busHrs.map(busHr => (
                            <InfoArea
                              className={classes.info}
                              title={
                                <span>
                                  {busHr.dates} <br />
                                  {busHr.time}
                                </span>
                              }

                              icon={busHr.time === "Closed" ? ClosedHrs : OpenHrs}
                              iconColor={elementStyle.iconColor}
                            />
                          ))}
                          {/* <InfoArea
                            className={classes.info}
                            title={<h4>Walks-In Welcome</h4>}
                            icon={WalkIn}
                            iconColor={elementStyle.iconColor}
                          />
                          <InfoArea
                            className={classes.info}
                            title={<h4>We Accept Credit Cards</h4>}
                            icon={CreditCard}
                            iconColor={elementStyle.iconColor}
                          /> */}
                        </GridItem>
                      </GridContainer>
                    </CardBody>

                  </Card>

                  {/* <SalonPhoto /> */}
                </GridItem>
              </GridContainer>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(contactUsStyle)(Location);
