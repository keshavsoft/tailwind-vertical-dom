export const createMetaStore = () => {
    let tableName = "";
    let defaultRow = {};
    let toSaveRow = {};

    return {
        setDefaultRow: (row) => { defaultRow = row; },
        getDefaultRow: () => defaultRow,
        setTableName: (name) => { tableName = name; },
        getTableName: () => tableName,
        setToSaveRow: (row) => { toSaveRow = row; },
        appendToSaveRow: (key, value) => { toSaveRow[key] = value; },
        getToSaveRow: () => toSaveRow,
    };
};