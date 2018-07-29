// Markers
interface AddMarkerAction {
  id: number;
  marker: import('react-native-maps').Marker;
  type: string;
}

interface VisitMarkerAction {
  id: number;
  type: string;
}

// Points
interface RecievePointsAction {
  data: BikePoint[];
  receivedAt: number;
  type: string;
}

// Search
interface FilterSearchAction {
  query: string;
  type: string;
}
