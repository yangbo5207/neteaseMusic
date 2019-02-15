import { observable, action, computed } from 'mobx';
import * as api from './api';


export class HomeStore {
  @observable
  public recommended: Array<home.album> = []

  @action
  public getRecommended = async () => {
    const res = await api.getRecommendedApi();

    console.log(res);
    this.recommended = res.result;
  }
}

export default new HomeStore();