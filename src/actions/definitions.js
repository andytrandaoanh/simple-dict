import axios from 'axios';
import { FETCH_DEFINITIONS } from './'


export const fetchDefinitions = (word) => async dispatch => {

	//console.log('fetch definition');
	
	const response = await axios.get("http://localhost:5000/definition/" + word);

	const data = {search: word, items: response.data};
	
  	dispatch({type: FETCH_DEFINITIONS, payload: data});
};



