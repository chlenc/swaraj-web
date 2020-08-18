import {WearsStore} from "./index";
import {reaction} from "mobx";

export class RootStore {

  public wearsStore: WearsStore;

  constructor(initState: any) {
    this.wearsStore = new WearsStore(this);

    this.wearsStore.sync().then()
  }

  public serialize = () => ({
    wearsStore: {}
  });
}

