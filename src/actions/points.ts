import { Dispatch } from 'redux';

export const UPDATE_POINTS = 'UPDATE_POINTS';
export const FETCH_POINTS = 'FETCH_POINTS';
export const RECEIVE_POINTS = 'RECEIVE_POINTS';

export const updatePoints = (dispatch: Dispatch) => {
  dispatch(fetchPoints());

  return fetch('https://api.tfl.gov.uk/bikepoint')
    .then(response => response.json())
    .then(json => dispatch(receivePoints(json)));
};

export const fetchPoints = () => ({
  type: FETCH_POINTS
});

export const receivePoints = (json: any): RecievePointsAction => {
  const data = json.map(point => {
    const item: any = {
      id: point.id,
      lat: point.lat,
      lon: point.lon,
      name: point.commonName,
      url: point.url
    };

    point.additionalProperties.forEach(property =>
      parseAdditionalData(property, item)
    );

    return item;
  });

  return {
    data,
    receivedAt: Date.now(),
    type: RECEIVE_POINTS
  };
};

const parseAdditionalData = (property: any, item: any) => {
  switch (property.key) {
    case 'TerminalName':
      item.terminal = parseInt(property.value);
      break;

    case 'Installed':
      item.installed = property.value === 'true';
      break;

    case 'Locked':
      item.locked = property.value === 'true';
      break;

    case 'InstallDate':
      item.installDate = new Date(property.value);
      break;

    case 'RemovalDate':
      item.removalDate =
        property.value === '' ? undefined : new Date(property.value);
      break;

    case 'Temporary':
      item.temporary = property.value === 'true';
      break;

    case 'NbBikes':
      item.bikes = {
        ...item.bikes,
        available: parseInt(property.value)
      };
      break;

    case 'NbDocks':
      item.bikes = {
        ...item.bikes,
        total: parseInt(property.value)
      };
      break;
  }
};
