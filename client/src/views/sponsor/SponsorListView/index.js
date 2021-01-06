
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

const SponsorListView = () => {
  const classes = useStyles();

  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    RecallEvents()
  }, [])

const RecallEvents = () =>
{
  axios.get('/api/sponsors/all')
  .then(res => {
    setSponsors(res.data.sponsors);
  })
  .catch(error => {
    console.log(error)
  })
}
  return (
    <Page
      className={classes.root}
      title="Sponsors"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results sponsors={sponsors} onReload={RecallEvents} />
        </Box>
      </Container>
    </Page>
  );
};

export default SponsorListView;
