import { markersReducer } from './markers';
import { pointsReducer } from './points';
import { searchReducer } from './search';

const initialState = {
  markers: undefined,
  points: undefined,
  search: undefined
};

export const rootReducer = (state = initialState, action) => {
  return {
    markers: markersReducer(state.markers, action),
    points: pointsReducer(state.points, action),
    search: searchReducer(state.search, action)
  };
};
