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
