import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';

export class AuthStore {
  @observable private pEmail: string;
  @observable private password: string;

  constructor() {
    this.pEmail = '';
    this.password = '';
  }

  @computed
  public get email(): string {
    return this.pEmail;
  }

  @action
  public setEmail(email: string) {
    this.pEmail = email;
  }

  @action
  public setPassword(pass: string) {
    this.password = pass;
  }
}
