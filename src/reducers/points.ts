import { FETCH_POINTS, RECEIVE_POINTS } from '../actions';
import { createReducer } from './create';

export const receivePoints = (
  state: PointState,
  action: RecievePointsAction
): PointState => {
  return {
    ...state,
    error: false,
    fetching: false,
    lastUpdated: action.receivedAt,
    results: action.data
  };
};

export const fetchPoints = (state: PointState): PointState => {
  return {
    ...state,
    error: false,
    fetching: true
  };
};

export const initialState: PointState = {
  error: false,
  fetching: false,
  lastUpdated: null,
  results: []
};

export const pointsReducer = createReducer(initialState, {
  [RECEIVE_POINTS]: receivePoints,
  [FETCH_POINTS]: fetchPoints
});
