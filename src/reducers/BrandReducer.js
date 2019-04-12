import {
    DEFAULT_BRAND,
    RESET_BRAND,
    RESET_ALL_BRANDS,
    UPDATE_ACTIVE_BRAND,
    UPDATE_ALL_BRAND_INFO
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
    console.log('brand reducer:', action.type, action.payload);
    switch(action.type){
        case UPDATE_ACTIVE_BRAND:
            console.log(state.providers[action.payload].logo);
            return{
                ...state,
                activeBrand: action.payload,
                partnerLogo: state.providers[action.payload].logo,
                page: state.providers[action.payload].page,
                search: state.providers[action.payload].search,
                category: state.providers[action.payload].category,
                queryString: state.providers[action.payload].queryString
            }

        case UPDATE_ALL_BRAND_INFO:
            console.log({
                ...state,
                activeBrand: action.payload.activeBrand,
                page: action.payload.page,
                search: action.payload.search,
                category: action.payload.category,
                queryString: action.payload.queryString,
                providers: {
                    ...state.providers,
                    [action.payload.activeBrand]: {
                        ...state.providers[action.payload.activeBrand],
                        page: action.payload.page,
                        search: action.payload.search,
                        category: action.payload.category,
                        queryString: action.payload.queryString
                    }
                }
            });
            return{
                ...state,
                activeBrand: action.payload.activeBrand,
                page: action.payload.page,
                search: action.payload.search,
                category: action.payload.category,
                queryString: action.payload.queryString,
                providers: {
                    ...state.providers,
                    [action.payload.activeBrand]: {
                        ...state.providers[action.payload.activeBrand],
                        page: action.payload.page,
                        search: action.payload.search,
                        category: action.payload.category,
                        queryString: action.payload.queryString
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
