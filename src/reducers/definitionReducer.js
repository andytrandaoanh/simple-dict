import { FETCH_DEFINITIONS } from '../actions'



const initialState = {
  items: [],
  search: '',
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
		    items: action.payload.items,
		    search: action.payload.search
		  };

	default:
		return state;

    }
 }