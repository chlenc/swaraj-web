import {database} from "./firebaseService";
import {IWear} from "../stores/WearsStore";

export default {
    pushWear(wear: IWear): Promise<string | null> {
        return database.ref(`goods/`).push(wear).then(ref => ref.key)
    },
};
