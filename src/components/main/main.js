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
import Box from '@material-ui/core/Box';

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
    marginTop: theme.spacing(2),
  },

   chip: {
    margin: theme.spacing(1),
  },

  senseholder: {
	marginTop: theme.spacing(1),  	
  },
  
  meaning: {
	margin: theme.spacing(1),  	
  }
  ,

  footer: {
	marginTop: theme.spacing(1),  	
  },

  badge: {
    padding: theme.spacing(0, 1),
  },

  phonetic: {
  	marginLeft: theme.spacing(1),

  },

  example: {
  	marginLeft: theme.spacing(2),

  },
}));

function MainDisplay(props) {
	const classes = useStyles();

	const renderExamples = exObj => {

		return (

			<div key={uuid.v4()}> 


				<Typography variant="body1" component="div" color="primary">
			        <Box component="span" m={1} fontWeight="fontWeightBold">
    				 {exObj.number}
    				 </Box> 
			     </Typography>

			


				{exObj.examples.map(example=>(

					      <Typography key={uuid.v4()} variant="body1" gutterBottom className={classes.example}>
					        
	        				{example} 
	      					
					      </Typography>			

				))}


			</div>

		)

	}



	const renderMeanings = meanings =>{

		return(
			<div key={uuid.v4()} className = {classes.meaning}>
				{
					meanings.map(meaning =>(
					<div key={uuid.v4()}>
				      <Typography variant="body1" component="div">
				        <Box component="span" m={1} fontWeight="fontWeightBold">
        				 {meaning.number}
        				 </Box> 
        				 <Box component="span"  color="primary">
        				 {meaning.notes} 
        				 </Box>
        				 <Box component="span">
        				 {meaning.meaning}
        				 </Box>
				      </Typography>

				      <Typography key={uuid.v4()} variant="body1" component="div">
				         <Box fontStyle="oblique" m={2}>
        					{meaning.example} 
      					</Box>		        
				      </Typography>				      
					</div>
					))
				}
			</div>
		);
	}

	const renderItem = item =>{
		return (

				<div>
			 

        			<Badge className={classes.badge} badgeContent={item.header['homograph-index']} color="primary">
				        <Typography variant="h3" component="div">
				     		{item.header['head-word']}
				        </Typography>

        			</Badge>


			        

			        {item.header.categories.map(category=>(

						<Chip key={uuid.v4()} label={category} className={classes.chip} variant="outlined" />
						
			        ))}



					<Typography variant="h6" color="primary" component="span" className={classes.phonetic}>
						
				     	 {item.header['phonetic']}
				     	      	
			        </Typography>


			        

   			        {item.meanings.map(meaning =>(
   			          <div key={uuid.v4()} className={classes.senseholder}>
	   			        <Divider />
							
						 <Typography  key={uuid.v4()} variant="button" display="block" gutterBottom color="secondary">
	        				{meaning.category}
	      				</Typography>

	      				{renderMeanings(meaning.meanings)}


				      </div>

			        ))}

					
			        
					
			        {item.footer.usage ? ( 

						<div className = {classes.footer}>
							<Divider />
				        	<Typography  variant="button" display="block" gutterBottom color="secondary">
		        				USAGE
		      				</Typography>

							<Typography variant="body2" gutterBottom>
				     			{item.footer.usage}
				        	</Typography>
			        	</div>
			        ) : null} 
			        

					
					
			        {item.footer['word-origin'] ? ( 
			        	<div className = {classes.footer}>
			        	<Divider />
				        <Typography  variant="button" display="block" gutterBottom color="secondary">
		        				ORIGIN
		      			</Typography>
						<Typography variant="body2" gutterBottom>
			     			{item.footer['word-origin']}
			        	</Typography>
			        	</div>
			        ) : null} 
			        


   			        
   			        <div className = {classes.footer}>
	   			        <Divider />
				        <Typography  variant="button" display="block" gutterBottom color="secondary">
		        				MORE EXAMPLES
		      			</Typography>	
						
						{item.examples.map(exampleList => (

							<div key={uuid.v4()}>

								{renderExamples(exampleList)}


							</div>

						))}

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




