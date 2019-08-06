import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from '../theme/theme';


import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchDefinitions } from "../../actions/definitions";




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 300,
      '&:focus': {
        width: 400,
      },
    },
  },
}));

function SearchAppBar(props) {
  const classes = useStyles();
  const [searchText, setSearchText] = useState("");

  const handleKeyUp = event => {
    //alert(searchText);
    if (event.key ==  'Enter') {

        //console.log('Enter pressed: ', searchText);

        props.fetchDefinitions(searchText);

    }
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h5"  noWrap>
              English Dictionary
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value = {searchText}
                onChange={e => setSearchText(e.target.value)}
                onKeyUp={e => handleKeyUp(e)}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
    
  );
}




const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { 
      fetchDefinitions
    }, dispatch);
};



export default connect(null, mapDispatchToProps)(SearchAppBar);