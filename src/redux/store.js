import { createStore, combineReducers } from 'redux';
import reducer from './reducer';
import stepReducer from './stepReducer';

export default createStore(combineReducers({reducer, stepReducer}));