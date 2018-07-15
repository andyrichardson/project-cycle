import { pointsReducer } from './points';
import { searchReducer } from './search';

const initialState = {
  points: undefined,
  search: undefined
};

export const rootReducer = (state = initialState, action) => {
  return {
    points: pointsReducer(state.points, action),
    search: searchReducer(state.search, action)
  };
};
