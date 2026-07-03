// /Services/setupServices.js

import { createServices } from "./createServices.js";

export const setupServices = ({ config, dataStore }) => {
    const { tableName } = config;

    dataStore.setTableName(tableName);

    return createServices({
        tableName: dataStore.getTableName()
    });
};