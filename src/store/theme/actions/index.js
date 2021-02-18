// Redux
import { createAction } from '@reduxjs/toolkit';
// Utils
import { THEME_SELECTED } from '../../../utils/constants';
import { storage } from '../../../utils/storage';

const loadAction = createAction('theme/load');
const toggleAction = createAction('theme/toggle');

const load = () => (dispatch) => {
  const theme = storage.get(THEME_SELECTED);
  dispatch(loadAction(theme));
};

const toggle = (search) => (dispatch) => {
  storage.set(THEME_SELECTED, search);
  dispatch(toggleAction(search));
};

const themeActions = {
  load,
  loadAction,
  toggle,
  toggleAction,
};

export default themeActions;
