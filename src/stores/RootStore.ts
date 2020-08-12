import {AdminStore} from "./index";

export class RootStore {

  public dataStore: AdminStore;

  constructor(initState: any) {
    this.dataStore = new AdminStore(
        this,
        initState && initState.dataStore ? initState.dataStore : null
    );
  }

  public serialize = () => ({
    dataStore: {}
  });
}

