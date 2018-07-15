/* MAP COMPONENT */
interface MapComponentState {
  activePoint: BikePoint;
  activePointVisible: boolean;
  error: string;
  latitude: number;
  longitude: number;
}

interface MapComponentProps {
  points: PointState;
  searchActive: boolean;
  updatePoints: () => any;
}

/* MARKER COMPONENT */
interface MarkerComponentProps {
  point: BikePoint;
  onPress: (e: any) => void;
}

interface MarkerData {
  id: number;
  location: {
    latitude: number;
    longitude: number;
  };
  point: BikePoint;
}

/* POINT INFO COMPONENT */
interface PointInfoComponentProps {
  point: BikePoint;
  visible: boolean;
}

interface PointInfoComponentState {
  animation: any;
}

interface PermissionsMock {
  check: jest.Mock;
  request: jest.Mock;
}

interface SearchComponentProps {
  search: {
    active: boolean;
    query: string;
    results: BikePoint[];
  };
  activateSearch: () => void;
  deactivateSearch: () => void;
  filterSearch: (query: string) => void;
}

interface SearchComponentState {
  leftPosition: any;
  maxHeight: any;
  rightPosition: any;
  topPosition: any;
}
