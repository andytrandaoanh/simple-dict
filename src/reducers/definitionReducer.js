import { FETCH_DEFINITIONS } from '../actions'



const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function wordReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_DEFINITIONS:
     //console.log(action);
		return {
		    ...state,
		    loading: false,
		    items: action.payload
		  };

	default:
		return state;

    }
 }