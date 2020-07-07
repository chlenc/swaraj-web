import { HistoryStore } from "./HistoryStore";

export class RootStore {
  public historyStore: HistoryStore;

  constructor() {
    this.historyStore = new HistoryStore(this)
  }

  public serialize = () => ({
    dataStore: {},
  });
}

