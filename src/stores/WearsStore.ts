import {SubStore} from "./SubStore";
import {database, storage} from "../services/firebaseService";
import {action, observable, runInAction} from "mobx";
import {wearsService} from "../services";


export interface IWear {
    title: string;
    description: string;
    quantity: string;
    vrPreview?: any;
    realWorldPreview?: any;
    png?: any;
    assetPackage?: any;
}


export default class WearsStore extends SubStore {

    @observable initialized = false

    @observable wears: { [key: string]: IWear } = {};


    @action sync = async () => {
        const snapshot = await database.ref("goods").once("value")
        try {
            runInAction(() => {
                this.wears = snapshot.val();
                this.initialized = true
            })

        } catch (e) {
            console.error(e);
        }

        // })
        // .catch((e) => console.error(e));
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
    @action
    addItem = async (item: IWear) => {

        //todo push all of the files to storage and get a download link to each of them
        // use filesService.addFile

        const key = await wearsService.pushWear(item)
        if (key) {
            this.wears[key] = item
        }else {
            //todo show error
        }
    }

    //todo make same logic with this shit 👇🏻
    // @action
    // updateItem = async (item: IWear, id: string) => new Promise(async (resolve) => {
    //     database.ref(`goods/${id}`).update(item, (error) => resolve(error))
    //     await this.syncGood()
    // });
    // @action
    // removeItem = async (id: string) => new Promise(async (resolve) => {
    //     database.ref(`goods/${id}`).remove((error) => resolve(error))
    //     await this.syncGood()
    // });
}
