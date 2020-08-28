import {RootStore} from './index';
import {createBrowserHistory} from "history";
import {observable, reaction} from "mobx";

export default class RouterStore {
    public rootStore: RootStore;
    public history = createBrowserHistory();

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        reaction(() => this.rootStore.accountStore.user, (user) => {
            if (user == null) {
                this.history.replace('/login');
            }
        });
        reaction(() => this.rootStore.privateInitialized, (v) => {
            if (v) {
                this.history.replace((this.history.location?.state as any)?.from ?? {pathname: '/'})
            }
        });
    }

    @observable
    currentPath = '/';

    @observable
    currentHash = '';

}

