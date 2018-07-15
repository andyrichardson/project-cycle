import { SET_ACTIVE, SET_INACTIVE } from '../actions';
import { createReducer } from './create';

export const initialState: SearchState = {
  active: false,
  query: '',
  results: []
};

export const setActive = (state: SearchState): SearchState => {
  return {
    ...state,
    active: true
  };
};

export const setInactive = (state: SearchState): SearchState => {
  return {
    ...initialState
  };
};

export const searchReducer = createReducer(initialState, {
  SET_ACTIVE: setActive,
  SET_INACTIVE: setInactive
});
