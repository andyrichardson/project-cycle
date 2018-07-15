import { ACTIVATE_SEARCH, DEACTIVATE_SEARCH } from '../actions';
import { createReducer } from './create';

export const initialState: SearchState = {
  active: false,
  query: ''
};

export const activateSearch = (state: SearchState): SearchState => {
  return {
    ...state,
    active: true
  };
};

export const deactivateSearch = (state: SearchState): SearchState => {
  return {
    ...initialState
  };
};

export const filterSearch = (
  state: SearchState,
  action: FilterSearchAction
) => {
  return {
    ...state,
    query: action.query
  };
};

export const searchReducer = createReducer(initialState, {
  ACTIVATE_SEARCH: activateSearch,
  DEACTIVATE_SEARCH: deactivateSearch,
  FILTER_SEARCH: filterSearch
});
