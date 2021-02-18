// External libs
import { createSelector } from 'reselect';

const selectSelf = (state) => state.MokupReducer;
const selectMokup = createSelector(selectSelf, (state) => state.mokup);

const selectors = {
  selectMokup,
};

export default selectors;
