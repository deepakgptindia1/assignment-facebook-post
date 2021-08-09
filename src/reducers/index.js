import { combineReducers } from 'redux';
import postReducers from './postReducer';

const reducers=combineReducers({
    posts:postReducers,
})

export default reducers;
