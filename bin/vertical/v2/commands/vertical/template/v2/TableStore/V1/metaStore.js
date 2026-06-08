export const createMetaStore = () => {
    let tableName = "";
    let defaultRow = {};

    return {
        setDefaultRow: (row) => { defaultRow = row; },
        getDefaultRow: () => defaultRow,
        setTableName: (name) => { tableName = name; },
        getTableName: () => tableName
    };
};