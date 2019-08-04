import { combineReducers } from 'redux';
import superheroeReducer from './superheroeReducer';
import TabReducer from './TabReducer';
import dataReduces from './dataReduces';
export default combineReducers({
    superheroes: superheroeReducer,
    tabId: TabReducer,
    dataReducer: dataReduces
});