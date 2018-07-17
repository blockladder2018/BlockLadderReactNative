import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  root: null,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  changeRoot: ['root'],
  clear: null,
});

export default Creators;

/* ------------- Reducers ------------- */
export const changeRootReducer = (state = INITIAL_STATE, { root }) => {
  return state.merge({ root });
};

const clearReducer = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_ROOT]: changeRootReducer,
  [Types.CLEAR]: clearReducer,
});
