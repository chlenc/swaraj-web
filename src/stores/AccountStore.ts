import {SubStore} from "./SubStore";
import {RootStore} from "./RootStore";
import {action, observable} from "mobx";
import firebase, {auth} from "../services/firebaseService";

export class AccountStore extends SubStore {

    @observable user: any | null = null;

    constructor(rootStore: RootStore) {
        super(rootStore);
        auth.onAuthStateChanged(this._onAuthStateChanged.bind(this));
    }

    @action public signIn = (login: string, password: string, remember?: boolean) =>
        auth
            .setPersistence(remember ? firebase.auth.Auth.Persistence.SESSION : firebase.auth.Auth.Persistence.NONE)
            .then(() => auth.signInWithEmailAndPassword(login, password))

    @action public signOut = () => auth.signOut().then().catch()

    @action
    private async _onAuthStateChanged(user: firebase.User | null) {
        user == null ? this.user = null : this.user = user
    }

}
