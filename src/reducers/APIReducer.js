import { SEARCH_BY_QUERY } from '../actions/types';

const INITIAL_STATE = {searchResults: null}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SEARCH_BY_QUERY:
            console.log('Got Search Results:', action.payload)
            return{...state, searchResults: action.payload}

        default:
            return state;
    }
}
