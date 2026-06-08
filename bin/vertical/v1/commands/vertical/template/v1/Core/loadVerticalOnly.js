import { loadDataLists } from "../Services/dataListLoader.js";

export const loadVerticalOnly = async ({
    config,
    services,
    dataStore,
    endPoints
}) => {
    await loadDataLists({
        inDataStore: dataStore,
        inServices: services,
        inEndpoints: endPoints
    });
};