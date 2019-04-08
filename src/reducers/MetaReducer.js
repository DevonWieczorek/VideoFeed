import { META, RESET_META } from '../actions/types';
import { mergeObjects } from '../helpers/objects';

const INITIAL_STATE = {
    'title': 'VideoFeed | Clean React UI',
    'description': 'Reuseable React & SASS based components',
    'keywords': '',
    'subject': '',
    'robots': 'index,follow',
    'ogTitle': 'VideoFeed',
    'ogImage': '../../public/favicon.ico',
    'ogDescription': 'Reuseable React & SASS based components',
    'ogSiteName': 'VideoFeed',
    'ogType': '',
    'ogURL': window.location.href
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case META:
            let metaData = mergeObjects(INITIAL_STATE, action.payload);
            return{...state, ...metaData}

        case RESET_META:
            return{...state, ...INITIAL_STATE}

        default:
            return state;
    }
}
