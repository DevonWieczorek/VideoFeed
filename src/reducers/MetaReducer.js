import { META } from '../actions/types';

const INITIAL_STATE = {
    'title': 'VideoFeed | Clean React UI',
    'description': 'Reuseable React & SASS based components',
    'ogTitle': 'VideoFeed',
    'ogImage': '../../public/favicon.ico'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case META:
            return{...state, ...action.payload}

        default:
            return state;
    }
}
