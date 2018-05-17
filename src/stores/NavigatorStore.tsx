import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';

export class NavigatorStore {
  @observable private pLatitude: number;
  @observable private pLongitude: number;
  @observable private pError: boolean;

  constructor() {
    this.pError = false;
  }

  public initialize(): void {
    navigator.geolocation.getCurrentPosition(position =>
      this.updatePosition(position)
    );
  }

  @action
  public updatePosition() {}

  @computed
  public get latitude(): number {
    return this.pLatitude;
  }

  @computed
  public get longitude(): number {
    return this.pLongitude;
  }
}
