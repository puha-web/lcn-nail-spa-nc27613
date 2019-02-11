import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx";

//Data
import gallery from '../../../db/Gallery';

function SectionProjects({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
                }`}
            >
              <h2 className={classes.title}>
                Our Works
              </h2>
            </GridItem>
          </GridContainer>
          <GridContainer justify='center'>
            {gallery.map(photo => (
              <GridItem xs={12} sm={4} md={4} className={classes.mlAuto} key={photo.id}>
                <Card plain className={classes.card2}>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <CardHeader plain image>
                      <img src={photo.image} alt="..." />
                    </CardHeader>
                  </a>
                </Card>
              </GridItem>
            ))}

          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(projectsStyle)(SectionProjects);
