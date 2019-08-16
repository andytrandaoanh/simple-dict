import axios from 'axios';
import { FETCH_DEFINITIONS } from './';
import { API_BASE_URL } from './api';




export const fetchDefinitions = (word) => async dispatch => {

	//console.log('fetch definition');
	
	const response = await axios.get(`${API_BASE_URL}/definition/${word}`);

	const data = {search: word, items: response.data};
	
  	dispatch({type: FETCH_DEFINITIONS, payload: data});
};



