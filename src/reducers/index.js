import {combineReducers} from 'redux';
import MetaReducer from './MetaReducer';
import APIReducer from './APIReducer';

export default combineReducers({
    meta: MetaReducer,
    api: APIReducer
});
