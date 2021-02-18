// External libs
import { createReducer } from '@reduxjs/toolkit';
// Actions
import actions from '../actions';
// JSON
import light from '../../../theme/light';
import dark from '../../../theme/dark';

const initialState = {
  theme: light,
};

const load = (state, payload) => {
  return { ...state, theme: payload ? dark : light };
};

const toggle = (state, payload) => {
  return { ...state, theme: payload ? dark : light };
};

const ThemeReducer = createReducer(initialState, {
  [actions.loadAction.type]: (state, { payload }) => load(state, payload),
  [actions.toggleAction.type]: (state, { payload }) => toggle(state, payload),
});

export default ThemeReducer;
