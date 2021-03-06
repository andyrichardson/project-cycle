interface ApplicationState {
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
