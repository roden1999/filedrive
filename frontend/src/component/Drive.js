import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, } from '@material-ui/core';
import { SearchIcon, MenuIcon, AccountCircle, MailIcon, NotificationsIcon, MoreIcon } from '@material-ui/icons';
import { connect, useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getFiles, deleteFile, addFile } from '../actions/files';
import 'font-awesome/css/font-awesome.min.css';


const moment = require('moment');
const axios = require('axios');
import { apihost } from '../apihost';

// Components
import InventoryLoader from './Loader';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  appBar: {
    backgroundColor: 'rgba(255,255,255,1)'
  }
}));

const customSelectStyle = {
  control: base => ({
    ...base,
    height: 42,
    minHeight: 42,
    borderRadiusTopRight: 0,
    borderRadiusBottomRight: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'black',
    padding: 20,
  }),
};

const Drive = () => {
  const classes = useStyles();
  const [fetchedData, setFetchedData] = useState(null);
  const [name, setName] = useState("");
  const [type, setType] = useState(-1);
  const [rawFile, setRawFile] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState(-1);
  const [date, setDate] = useState(moment().format('MM DD, YYY'));
  const [modifiedDate, setModifiedDate] = useState(moment().format('MM DD, YYY'));
  const [favorite, setFavorite] = useState(-1);
  const [open, setOpen] = useState(false);

  const propTypes = {
    leads: PropTypes.array.isRequired
  }

  const data = useSelector(state => state.files.files);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFiles());
  }, []);

  const onSubmit = () => {
    const file = {
      name,
      type,
      rawFile,
      description,
      size,
      date,
      modifiedDate
    }
    dispatch(addFile(file));
  }

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography className={classes.title} color='primary' variant="h6" noWrap>
              My Drive
            </Typography>

            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setOpen(true)}
                color="primary"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setOpen(false)}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  files: state.files.files
})

export default connect(mapStateToProps, { getFiles, deleteFile })(Drive);
