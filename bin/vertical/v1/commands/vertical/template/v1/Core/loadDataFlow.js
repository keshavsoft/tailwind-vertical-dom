// /Core/loadDataFlow.js

import { loadInitialData } from "../DataLayer/loadInitialData.js";
import { loadDataLists } from "../Services/dataListLoader.js";

export const loadDataFlow = async ({
    config,
    services,
    dataStore,
    endPoints
}) => {
    // debugger;
    await loadInitialData({
        config,
        services,
        dataStore,
        endPoints
    });

    await loadDataLists({
        inDataStore: dataStore,
        inServices: services,
        inEndpoints: endPoints
    });
};