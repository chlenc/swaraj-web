import {database, storage} from "./firebaseService";
import {IWear} from "../stores/WearsStore";

export default {
    addFile(item: Blob | File): Promise<string> {
        return storage.ref('/').put(item).then(res => res.ref.getDownloadURL())
    },
};
