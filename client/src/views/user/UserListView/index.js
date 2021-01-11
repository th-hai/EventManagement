
import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'

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

const UserListView = () => {
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth);
  const classes = useStyles();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    RecallUsers()
  }, [])

const RecallUsers = () =>
{
  axios.get('https://event-management-hcmute.herokuapp.com/api/users/all', {
    headers: {Authorization: token}
})
  .then(res => {
    setUsers(res.data);
  
  })
  .catch(error => {
    console.log(error)
  })
}
  return (
    <Page
      className={classes.root}
      title="Users"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results users={users} onReload={RecallUsers} />
        </Box>
      </Container>
    </Page>
  );
};

export default UserListView;
