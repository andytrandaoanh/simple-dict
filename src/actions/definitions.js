import axios from 'axios';
import { FETCH_DEFINITIONS } from './'


export const fetchDefinitions = (word) => async dispatch => {

	console.log('fetch definition');
	
	const response = await axios.get("http://localhost:5000/definition/" + word);
	//console.log('response:', response);
  dispatch({type: FETCH_DEFINITIONS, payload: response.data})
};



