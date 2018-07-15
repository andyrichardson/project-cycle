// tslint:disable
// @ts-ignore
global.fetch = jest.fn().mockResolvedValue(true);

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn()
};

// @ts-ignore
global.navigator = {
  geolocation: mockGeolocation
};

jest.mock('react-native-maps', () => ({
  default: 'react-native-maps',
  Marker: 'marker'
}));
