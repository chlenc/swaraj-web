import Web3Store from "./Web3Store";

export class RootStore {

  public web3Store: Web3Store

  constructor() {
    this.web3Store = new Web3Store(this)
  }

}

