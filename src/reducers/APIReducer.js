import {
    SEARCH_BY_QUERY
} from '../actions/types';
import HookStore from '../Hooks';

const INITIAL_STATE = {
    searchResults: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_BY_QUERY:
            console.log('Got Search Results:', action.payload)
            let payload = HookStore.applyFilters('search_results', action.payload);
            return {
                ...state,
                searchResults: payload
            }

        default:
            return state;
    }
}