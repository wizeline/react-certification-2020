// External libs
import { createReducer } from '@reduxjs/toolkit';
// Actions
import actions from '../actions';
// JSON
import mokup from '../../../json/youtube-mokup';

const initialState = {
  mokup: mokup.items,
};

const load = (state) => {
  return { ...state, mokup: mokup.items };
};

const filter = (state, payload) => {
  return {
    mokup: mokup.items.filter(
      (item) =>
        item.snippet.title.toLowerCase().includes(payload.toLowerCase()) ||
        item.snippet.description.toLowerCase().includes(payload.toLowerCase())
    ),
  };
};

const MokupReducer = createReducer(initialState, {
  [actions.loadAction.type]: (state) => load(state),
  [actions.filterAction.type]: (state, { payload }) => filter(state, payload),
});

export default MokupReducer;
