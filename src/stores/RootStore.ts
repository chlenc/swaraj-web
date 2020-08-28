import {AccountStore, RouterStore, WearsStore} from "./index";
import {computed, reaction} from "mobx";

export class RootStore {

    public wearsStore: WearsStore;
    public accountStore: AccountStore;
    public routerStore: RouterStore;

    constructor(initState: any) {
        this.wearsStore = new WearsStore(this);
        this.accountStore = new AccountStore(this)
        this.routerStore = new RouterStore(this)

        this.wearsStore.sync().then()
    }

    public serialize = () => ({
        wearsStore: {}
    });

    @computed
    get privateInitialized() {
        return this.accountStore.user != null && this.wearsStore.initialized;
    }
}

