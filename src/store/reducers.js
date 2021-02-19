import { combineReducers } from 'redux';
import MokupReducer from './mokup/reducers';

const rootReducer = combineReducers({
  MokupReducer,
});

export default rootReducer;
