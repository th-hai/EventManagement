import React, { useState, useEffect } from "react";
import axios from "axios";
import clsx from "clsx";
import PropTypes from "prop-types";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
} from "@material-ui/core";
// import getInitials from 'src/utils/getInitials';
import getInitials from "../../../utils/getInitials";
import { Link, useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

const Results = ({ className, sponsors, onReload, ...rest }) => {
  const classes = useStyles();
  let navigate = useNavigate()
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState({})

  const handleSelectAll = (speaker) => {
    let newSelectedCustomerIds;

    if (speaker.target.checked) {
      newSelectedCustomerIds = sponsors.map((speaker) => speaker._id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
let DeleteSpeaker = (id) => {
  
    axios.delete('/api/sponsors/' + id)
    .then(res => {
      
    })
    .catch(error => {
      console.log(error)
    })

}


  const handleClickDelete = (event) => {
    console.log(event);
    setSelectedSpeaker(event);
    setOpen(true);
  };

  const handleCloseDelete = () => {
    setOpen(false);
  };

  const handleConfirmDelete = async (e) => {
    e.preventDefault();
    await DeleteSpeaker(selectedSpeaker._id)
    setOpen(false)
     onReload()
    // console.log(selectedEvent);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === sponsors.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0 &&
                      selectedCustomerIds.length < sponsors.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sponsors.slice(0, limit).map((sponsor) => (
                <TableRow
                  hover
                  key={sponsor._id}
                  selected={selectedCustomerIds.indexOf(sponsor._id) !== -1}
                 
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(sponsor._id) !== -1}
                      onChange={() => handleSelectOne(sponsor._id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Avatar
                        className={classes.avatar}
                        src={sponsor.logo}
                      >
                        {getInitials(sponsor.name)}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {sponsor.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{sponsor.description}</TableCell>
                 
                 
                  
                  <TableCell>
                  <Link to={sponsor._id}>
                  <FontAwesomeIcon icon={faEdit}/>    
                  </Link>           
                  </TableCell>
                  <TableCell>
                   <FontAwesomeIcon onClick={() =>handleClickDelete(sponsor)} icon={faTrash}/>
                  </TableCell>
                </TableRow>
                

              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={sponsors.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
      <Dialog
        open={open}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Let me know...</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure? 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete} color="primary">
            Disagree
          </Button>
          <Button onClick={handleConfirmDelete} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  events: PropTypes.array.isRequired,
};

export default Results;
