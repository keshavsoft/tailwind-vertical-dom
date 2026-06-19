import { createDataStore } from "./dataStore.js";
import { createColumnStore } from "./columnStore.js";
import { createMetaStore } from "./metaStore.js";

export const createStore = () => ({
    ...createDataStore(),
    ...createColumnStore(),
    ...createMetaStore()
});