import { observable, action, computed } from 'mobx';

export class HomeStore {
  @observable
  public count: number = 0

  @action
  public plus = () => {
    this.count++;
  }

  @action
  public reduce = () => {
    this.count--;
  }
}

export default new HomeStore();