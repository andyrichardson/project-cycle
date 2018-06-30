/* MAP COMPONENT */
interface MapComponentState {
  activePoint: BikePoint;
  error: string;
  latitude: number;
  longitude: number;
}

interface MapComponentProps {
  points: PointState;
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
}

interface PermissionsMock {
  check: jest.Mock;
  request: jest.Mock;
}
