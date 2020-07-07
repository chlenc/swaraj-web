import { SubStore } from './SubStore';
import { createBrowserHistory } from "history";
import { RootStore } from "./RootStore";
import { computed, observable } from "mobx";


export class HistoryStore extends SubStore {
    @observable
    public history = createBrowserHistory();

    @observable
    private location: Location = window.location;

    @computed
    get currentPath() {
        return this.location.pathname.replace('/', '')
    }
    @computed
    get currentHash() {
        return this.location.hash.replace('#', '')
    }

    constructor(rootStore: RootStore) {
        super(rootStore);
        this.history.listen((location) => {
            this.location = location as any
        });
    }

}


