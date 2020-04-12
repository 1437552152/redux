import {combineReducers} from 'redux';
import postReducer from './postReducer';
export default combineReducers({
    posts:postReducer     //将每个reducer合并
})