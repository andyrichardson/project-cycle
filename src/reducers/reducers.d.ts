interface ApplicationState {
  markers: MarkerState;
  points: PointState;
  search: SearchState;
}

interface BikePoint {
  id: string;
  location: {
    latitude: number;
    longitude: number;
  };
  url: string;
  name: string;
  terminal: number;
  installed: boolean;
  locked: boolean;
  installDate: Date;
  removalDate: Date | undefined;
  temporary: boolean;
  bikes: {
    available: number;
    total: number;
  };
}

interface MarkerState {
  active: number;
  markers: Map<number, import('react-native-maps').Marker>;
}

interface PointState {
  error: boolean;
  lastUpdated: number;
  fetching: boolean;
  results: BikePoint[];
}

interface SearchState {
  active: boolean;
  query: string;
}
