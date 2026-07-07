// /Services/setupServices.js

// import { createServices } from "./createServices.js";
import { createServices } from "./V2/createServices.js";

export const setupServices = ({ config, dataStore }) => {
    const { tableName } = config;

    dataStore.setTableName(tableName);

    return createServices({
        tableName: dataStore.getTableName()
    });
};