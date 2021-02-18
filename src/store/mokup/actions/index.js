// Redux
import { createAction } from '@reduxjs/toolkit';

const loadAction = createAction('mokup/load');
const filterAction = createAction('mokup/filter');

const load = () => (dispatch) => {
  dispatch(loadAction());
};

const filterMokup = (search) => (dispatch) => {
  dispatch(filterAction(search));
};

const mokupActions = {
  load,
  loadAction,
  filterMokup,
  filterAction,
};

export default mokupActions;
