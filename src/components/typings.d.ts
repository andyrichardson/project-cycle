interface MapComponentState {
  error: string;
  latitude: number;
  longitude: number;
}

interface MapComponentProps {
  points: PointState;
  updatePoints: () => any;
}

interface PermissionsMock {
  check: jest.Mock;
  request: jest.Mock;
}
