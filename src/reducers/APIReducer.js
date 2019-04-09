import { GET_DATA } from '../actions/types';

const INITIAL_STATE = {data: null}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_DATA:
            console.log('Got Data:', action.payload)
            return{...state, data: action.payload}

        default:
            return state;
    }
}
