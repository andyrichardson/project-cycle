import { Marker } from 'react-native-maps';

export const ADD_MARKER = 'ADD_MARKER';
export const VISIT_MARKER = 'VISIT_MARKER';

export const addMarker = (id: number, marker: Marker): AddMarkerAction => {
  if (marker === null) {
    return;
  }

  return {
    id,
    marker,
    type: ADD_MARKER
  };
};

export const visitMarker = (id: number): VisitMarkerAction => ({
  id,
  type: VISIT_MARKER
});
