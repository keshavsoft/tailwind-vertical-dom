export const prepareColumnsBundle = (columnsConfig = []) => {
    const keys = columnsConfig.map(c => c.columnName);

    const visibleConfig = columnsConfig.filter(c => c.isVisible !== false);

    const visibleColumns = visibleConfig.map(c => c.columnName);

    const defaultRow = columnsConfig.reduce((acc, c) => {
        if ("defaultValue" in c) {
            acc[c.columnName] = c.defaultValue ?? "";
        };

        return acc;
    }, {});

    const toSaveRow = columnsConfig.reduce((acc, c) => {
        if ("defaultValue" in c) {
            acc[c.columnName] = c.defaultValue ?? "";
        };

        return acc;
    }, {});

    const dataListColumns = visibleConfig
        .filter(c => c.tableFooterDataListShow);

    const searchableColumnsConfig = columnsConfig
        .filter(c => c.isSearchable)

    return {
        keys,
        visibleColumns,
        visibleConfig,
        defaultRow,
        dataListColumns,
        toSaveRow,
        searchableColumnsConfig
    };
};