import {RootStore} from "@stores";
import React from "react";

export const mobXStore = new RootStore()

export const storesContext = React.createContext({
    ...mobXStore
})
