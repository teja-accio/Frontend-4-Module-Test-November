// src/redux/reducers/index.js
import { combineReducers } from 'redux';
// import historyReducer from './historyReducer';
import historyReducer from './historyReducers';

const rootReducer = combineReducers({
  history: historyReducer,
  // Add other reducers as needed
});

export default rootReducer;
