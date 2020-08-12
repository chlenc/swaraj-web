import {RootStore} from "../stores/index";
import React from "react";

export const mobXStore = new RootStore(null)

export const storesContext = React.createContext({
    ...mobXStore
})