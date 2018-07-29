import { Marker } from 'react-native-maps';
import { ADD_MARKER, VISIT_MARKER } from '../actions';
import { createReducer } from './create';

export const initialState: MarkerState = {
  active: null,
  markers: new Map<number, Marker>()
};

export const addMarker = (state: MarkerState, action: AddMarkerAction) => {
  const markers = new Map<number, Marker>(state.markers);
  markers.set(action.id, action.marker);

  return {
    ...state,
    markers
  };
};

export const visitMarker = (state: MarkerState, action: VisitMarkerAction) => {
  return {
    ...state,
    active: state.markers.get(action.id)
  };
};

export const markersReducer = createReducer(initialState, {
  [ADD_MARKER]: addMarker,
  [VISIT_MARKER]: visitMarker
});
