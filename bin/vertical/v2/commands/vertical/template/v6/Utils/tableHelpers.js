const prepareDefaultRow = (columnsConfig) => {
    const row = {};

    columnsConfig.forEach((col) => {
        if (col.defaultValue !== undefined) {
            row[col.columnName] = col.defaultValue;
        }
    });

    return row;
};

const getColumnsMeta = (columnsConfig) => ({
    columns: columnsConfig.map(c => c.columnName),
    columnsConfig: columnsConfig.map(c => c.columnName),
    visibleColumns: columnsConfig
        .filter(c => c.isVisible !== false)
        .map(c => c.columnName)
});

export {
    prepareDefaultRow,
    getColumnsMeta
}