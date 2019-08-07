import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuid from "uuid";

import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from '../theme/theme';



const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



function MainDisplay(props) {
  const classes = useStyles();
  //if (props.items) {console.log(props.items)}  

  const renderHeadWord = () => {
    return (
      <Typography gutterBottom variant="h3" component="h2" color="primary">
        <Box fontWeight="fontWeightBold">
         {props.search}
        </Box>
      </Typography>
    );
  }  




  const renderSynonyms = synonyms => {

    if(synonyms){
      return(
        <Box fontStyle="normal" m={1}>
          
             SYNONYMS: {synonyms}
        </Box>
      )
    }
    else {return null}
    

  }


  const renderDefinitions = meanings => {


    return(
      meanings.map((meaning, index) =>(

        
          <Typography key = {uuid.v4()} variant="h6" component="h2">
            
            <Box fontWeight="fontWeightBold"  m={1}>
             {index + 1}. {meaning['definition']}
            </Box>
          
            <Box fontStyle="italic" m={1}>
          
             {meaning['example']}
            </Box>
                      
            {renderSynonyms(meaning['synonyms'])}
          </Typography>
        

    ))
  )}

  const renderCard = word => {
    return (    
    <CardContent className={classes.cardContent}>
       
      <Typography gutterBottom variant="h6" component="h2" color="secondary">
         {word['category'].toUpperCase()}
      </Typography>

      <Typography gutterBottom variant="h6" component="h2">
         {word['phonetic']}
      </Typography>

      {renderDefinitions(word['meaning'])}


      <Typography gutterBottom variant="h6" component="h2">
         ORIGIN: {word['origin']}
      </Typography>

    </CardContent>
    )
  }  



  return (

   <MuiThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="xl">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              English Dictionary
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              A collection of word definitions from Oxford, Cambrige, Google and other dictionaries.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="xl">
          {/* End hero unit */}
          {renderHeadWord()}

          <Grid container spacing={4}>
                     
            {props.items.map((item, index) => (

                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>               
                    {renderCard(item)}
                  </Card>
                </Grid>

            ))}

            

          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Copyright (C) 2019-2020 DigiNet Corporation 
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Developed with ReactJS, Material-UI, Flask and MongoDB and MySQL
        </Typography>
        
      </footer>
      {/* End footer */}
    </React.Fragment>
    </MuiThemeProvider>
  );
}



const mapStateToProps = state => ({
    items: state.definitionReducer.items,
    search: state.definitionReducer.search
   
});

export default connect(mapStateToProps, null)(MainDisplay);

