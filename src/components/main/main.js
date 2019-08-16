import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuid from "uuid";

import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from '../theme/theme';




const useStyles = makeStyles(theme => ({
  header: {
    padding: theme.spacing(2, 2),
    marginTop: theme.spacing(1),
  },

  category: {
  	padding: theme.spacing(2),
  	
  },

  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
  },

  footer: {
    padding: theme.spacing(2, 2),
    marginTop: theme.spacing(1),
  },

   chip: {
    margin: theme.spacing(1),
  },

  phonetic: {
  	marginTop: theme.spacing(4),

  },

  footer: {
	marginTop: theme.spacing(1),  	
  },

  badge: {
    padding: theme.spacing(0, 2),
  },

}));

function MainDisplay(props) {
	const classes = useStyles();

	const renderItem = item =>{
		return (

				<div>
			 

        			<Badge className={classes.badge} badgeContent={item.header['homograph-index']} color="primary">
				        <Typography variant="h3" component="div">
				     		{item.header['head-word']}
				        </Typography>

        			</Badge>

					<Typography variant="h5" component="span" className={classes.phonetic}>
			     		{item.header['phonetic']}
			        </Typography>
			        

			        {item.header.categories.map(category=>(

						<Chip key={uuid.v4()} label={category} className={classes.chip} variant="outlined" />
						
			        ))}

			        <Divider />

			        <div className = {classes.footer}>
			        {item.footer['word-origin'] ? ( 

						<Typography variant="body2" gutterBottom>
			     			ORIGIN: {item.footer['word-origin']}
			        	</Typography>


			        ) : null} 
			        </div>


		        </div>

		);
	}


	const renderContents = () =>{
		if (!props.search) {

			return (
 	            <Paper className={classes.header}>
			        <Typography component="p">
			          Enter a word!
			        </Typography>
		      	</Paper>
			)
		} else {
			return (
				props.items.map((item, index) =>{

					return (
					<Paper key={index} className={classes.header}>
						{renderItem(item)}
		      		</Paper>
					)
				})
			)
		}

	}
	
	return (
	<MuiThemeProvider theme={theme}>
		<React.Fragment>
	      <CssBaseline />
	      <Container maxWidth="xl">
	      	{renderContents()}
	      </Container>
    	</React.Fragment>
    </MuiThemeProvider>
	)
}



const mapStateToProps = state => ({
    items: state.definitionReducer.items,
    search: state.definitionReducer.search
   
});

export default connect(mapStateToProps, null)(MainDisplay);




