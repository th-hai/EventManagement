
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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const EventListView = () => {
  const classes = useStyles();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    RecallEvents()
  }, [])

const RecallEvents = () =>
{
  axios.get('https://event-management-hcmute.herokuapp.com/api/events/all')
  .then(res => {
    setEvents(res.data.events);
  })
  .catch(error => {
    console.log(error)
  })
}
  return (
    <Page
      className={classes.root}
      title="Events"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results events={events} onReload={RecallEvents} />
        </Box>
      </Container>
    </Page>
  );
};

export default EventListView;
