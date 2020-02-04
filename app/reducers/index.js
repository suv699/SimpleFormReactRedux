import { combineReducers } from 'redux'
//todo import reducers
import TimeFunc from './TimeReducer';
import Counter from './Counter';

export default combineReducers({
	//todo reducers
	curTime: TimeFunc,
	Counter
});