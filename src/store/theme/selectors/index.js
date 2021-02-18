// External libs
import { createSelector } from 'reselect';

const selectSelf = (state) => state.ThemeReducer;
const selectTheme = createSelector(selectSelf, (state) => state.theme);

const selectors = {
  selectTheme,
};

export default selectors;
