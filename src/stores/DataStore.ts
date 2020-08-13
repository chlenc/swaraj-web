import { RootStore } from "./index";
import { SubStore } from "./SubStore";
import { database } from "../utils/firebase";
import { action, observable } from "mobx";


export interface IItem {
    title: string;
    description: string;
    quantity: string;
    vrPreview?: any;
    realWorldPreview?: any;
    png?: any;
    assetPackage?: any;
}


export default class DataStore extends SubStore {
    @observable item: { [key: string]: IItem } = {};

    constructor(rootStore: RootStore, initState: any) {
        super(rootStore);
        this.syncGood();
    }

    @action syncGood = async () => {
        database
            .ref("good")
            .once("value")
            .then((snapshot) => {
                try {
                    const item = snapshot.val();
                    this.item = item;
                } catch (e) {
                    console.error(e);
                }
            })
            .catch((e) => console.error(e));
    };

    addItem = async (item: IItem) => new Promise (async (resolve) =>{
        database.ref(`good/`).push(item, (error) => resolve(error))
        await this.syncGood()
    } );
    updateItem = async (item: IItem, id: string) => new Promise (async (resolve) =>{
        database.ref(`good/${id}`).update(item, (error) => resolve(error))
        await this.syncGood()
    });
    removeItem = async (id: string) => new Promise(async (resolve) => {
        database.ref(`goods/${id}`).remove((error) => resolve(error))
        await this.syncGood()
    });
}