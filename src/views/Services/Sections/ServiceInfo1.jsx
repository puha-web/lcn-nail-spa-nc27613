import React from 'react';

// @material-ui/core components

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { Card } from '@material-ui/core';
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import elementStyle from '../../../db/ElementStyles';
import ServiceBgImg from 'assets/img/salon/serviceBg.jpg';


const serviceList = (props) => (

  <Card style={{ backgroundImage: `url(${ServiceBgImg})` }}>
    <CardBody>
      <div>
        <h3 style={{ fontWeight: 'bold' }}
        >{props.groupName}</h3>
        {props.allServices.filter(groupedServices => groupedServices.category === props.groupName)
          .map(serviceInfo =>
            <List component='nav'>
              <ListItem>
                <ListItemText primary={
                  <div key={serviceInfo.id} style={{ borderBottomStyle: 'dashed', borderBottomWidth: '.5px' }}>
                    <h5 style={{ fontWeight: 'bold' }}>
                      <span style={{color: `${elementStyle.serviceName}`}}>{serviceInfo.service}</span>
                      <span
                        style={{ float: 'right' }}
                      >{serviceInfo.price}</span>
                    </h5>
                    <h5>
                      {serviceInfo.description}
                    </h5>
                  </div>
                }
                />
              </ListItem>
            </List>
          )
        }
      </div>
    </CardBody>
    <CardFooter style={{ justifyContent: 'center'}}>
      <h5>
        If you require any extra services, please talk to our technician and confirm the price.
      </h5>
    </CardFooter>

  </Card>

);

export default serviceList;