import {RootStore} from "./index";
import {SubStore} from "./SubStore";
import {database, storage} from "../utils/firebase";
import {action, observable} from "mobx";


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
            .ref("goods")
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
    }

    // @action syncImage = async () => {
    //     //let image = new Blob()
    //     storage
    //         .ref(`goods/${Image.name}`)
    //         .put("Blob")
    //         .then((snapshot) => {
    //             try {
    //                 const item = snapshot.val();
    //                 this.item = item;
    //             } catch (e) {
    //                 console.error(e);
    //             }
    //         })
    //         .catch((e) => console.error(e));
    //         // .on("state_changed",
    //         //     snapshot => {},
    //         //     error => {console.log(error)},
    //         //     ()=> storage.ref("goods")
    //         //         .child(Image.name)
    //         //         .getDownloadURL()
    //         //         .then((url)=> ))

    // };

    addItem = async (item: IItem) => new Promise(async (resolve) => {
        database.ref(`goods/`).push(item, (error) => resolve(error))
        await this.syncGood()
    });
    updateItem = async (item: IItem, id: string) => new Promise(async (resolve) => {
        database.ref(`goods/${id}`).update(item, (error) => resolve(error))
        await this.syncGood()
    });
    removeItem = async (id: string) => new Promise(async (resolve) => {
        database.ref(`goods/${id}`).remove((error) => resolve(error))
        await this.syncGood()
    });
    addFile = async (item: Blob & File) => {
        const res = await storage.ref('/').put(item)
        return await res.ref.getDownloadURL()
    }
}
