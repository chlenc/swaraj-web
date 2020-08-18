import React from "react";
import {RootStore} from "../stores";

export const mobXStore = new RootStore()

export const storesContext = React.createContext({
    ...mobXStore
})
