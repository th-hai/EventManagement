
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from '../../../components/Page';
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

const SpeakerListView = () => {
  const classes = useStyles();

  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    RecallEvents()
  }, [])

const RecallEvents = () =>
{
  axios.get('/api/speakers/all')
  .then(res => {
    setSpeakers(res.data.speakers);
  })
  .catch(error => {
    console.log(error)
  })
}
  return (
    <Page
      className={classes.root}
      title="Speakers"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results speakers={speakers} onReload={RecallEvents} />
        </Box>
      </Container>
    </Page>
  );
};

export default SpeakerListView;
