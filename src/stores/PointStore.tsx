import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';

export class PointStore {
  @observable private error: boolean;
  @observable private fetching: boolean;
  @observable private pPoints: BikePoint[];
  @observable private valid: Date;

  constructor() {
    this.error = false;
    this.fetching = false;
  }

  @action
  public fetchAll() {
    this.fetching = true;
    return fetch('https://api.tfl.gov.uk/bikepoint')
      .then(resp => resp.json())
      .then(json =>
        json.map(point => {
          const item: any = {
            id: point.id,
            lat: point.lat,
            lon: point.lon,
            name: point.commonName,
            url: point.url
          };

          point.additionalProperties.forEach(property =>
            this.parseAdditionalData(property, item)
          );

          console.log(item);
          return item as BikePoint;
        })
      )
      .then(points => {
        this.pPoints = points;
        this.fetching = false;
      });
  }

  @computed
  public get points() {
    return this.pPoints || [];
  }

  @computed
  public get isFetching() {
    return this.fetching;
  }

  @computed
  public get isError() {
    return this.error;
  }

  // private expired(): boolean {
  //   return (this.valid === undefined || Date.now() - this.valid.getMilliseconds > 1000)
  // }

  private parseAdditionalData(property: any, item: any) {
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
  }
}

interface BikePoint {
  id: string;
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
