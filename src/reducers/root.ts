import { pointsReducer } from './points';

const initialState = {
  points: undefined
};

export const rootReducer = (state = initialState, action) => {
  return {
    points: pointsReducer(state.points, action)
  };
};
