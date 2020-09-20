import {SubStore} from "./SubStore";
import {RootStore} from "./RootStore";
import Web3 from "web3";
import {computed, observable} from "mobx";
import {getWeb3} from "../services/we3service";

export default class Web3Store extends SubStore {

    @observable web3?: Web3
    @observable network?: string
    @observable initialized: boolean = false

    constructor(public rootStore: RootStore) {
        super(rootStore);
        getWeb3()
            .then(({web3, network}) => {
                this.web3 = web3
                this.network = network
                this.initialized = true
            })
            .catch(e => console.error(e));
    }

}


