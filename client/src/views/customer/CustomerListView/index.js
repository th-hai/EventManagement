
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from '../../../../src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [customers] = useState(data);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/events')
    .then(res => {
      setEvents(res.data.events);
      console.log(res)
      console.log(res.data.events)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  return (
    <Page
      className={classes.root}
      title="Customers"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results customers={customers} />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
