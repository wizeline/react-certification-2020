import { combineReducers } from 'redux';
import MokupReducer from './mokup/reducers';
import ThemeReducer from './theme/reducers';

const rootReducer = combineReducers({
  MokupReducer,
  ThemeReducer,
});

export default rootReducer;
