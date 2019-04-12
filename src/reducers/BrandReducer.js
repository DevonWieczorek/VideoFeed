import {
    DEFAULT_BRAND,
    RESET_BRAND,
    RESET_ALL_BRANDS,
    UPDATE_BRAND_PAGE,
    UPDATE_BRAND_SEARCH,
    UPDATE_BRAND_CATEGORY,
    UPDATE_BRAND_QUERY_STRING,
    UPDATE_ACTIVE_BRAND
} from '../actions/types';
import * as brands from '../data/brand-defaults';

const INITIAL_STATE = {
    activeBrand: DEFAULT_BRAND,
    page: 1,
    search: '',
    category: '',
    queryString: '',
    partnerLogo: null,
    providers: {
        youtube: brands.youtube,
        vimeo: brands.vimeo,
        metacafe: brands.metacafe
    }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UPDATE_ACTIVE_BRAND:
            return{
                ...state,
                activeBrand: action.payload,
                partnerLogo: state.providers[action.payload].logo,
                page: state.providers[action.payload].page,
                search: state.providers[action.payload].search,
                category: state.providers[action.payload].category,
                queryString: state.providers[action.payload].queryString
            }

        case UPDATE_BRAND_PAGE:
            return{
                ...state,
                page: action.payload,
                providers: {
                    [state.activeBrand]: {
                        page: action.payload
                    }
                }
            }

        case UPDATE_BRAND_SEARCH:
            return{
                ...state,
                search: action.payload,
                providers: {
                    [state.activeBrand]: {
                        search: action.payload
                    }
                }
            }

        case UPDATE_BRAND_CATEGORY:
            return{
                ...state,
                category: action.payload,
                providers: {
                    [state.activeBrand]: {
                        category: action.payload
                    }
                }
            }

        case UPDATE_BRAND_QUERY_STRING:
            return{
                ...state,
                queryString: action.payload,
                providers: {
                    [state.activeBrand]: {
                        queryString: action.payload
                    }
                }
            }

        case RESET_BRAND:
            return{
                ...state,
                providers: {
                    [action.payload]: INITIAL_STATE.providers[action.payload]
                }
            }

        case RESET_ALL_BRANDS:
            return{...state, ...INITIAL_STATE}

        default:
            return state;
    }
}
