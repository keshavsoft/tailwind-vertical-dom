export const createStore = () => {
    let data = [];
    let keys = [];
    let searchConfig = { type: "global", value: "" };
    let tableName = "";
    let visibleColumns = [];

    let defaultRow = {};

    return {
        setDefaultRow: (row) => {
            defaultRow = row;
        },
        getDefaultRow: () => {
            return defaultRow;
        },
        setData(inData) {
            data = inData;
            // keys = Object.keys(inData[0] || {});
        },
        setColumns: (cfg) => {
            keys = cfg.map(c => c.columnName);
            visibleColumns = cfg.filter(c => c.isVisible !== false).map(c => c.columnName);
        },
        setSearchConfig(config) {
            searchConfig = config;
        },
        getSearchConfig(config) {
            return searchConfig;
        },
        getData() {
            return data;
        },
        getColumns() {
            return keys;
        },
        getVisibleColumns() {
            return visibleColumns;
        },
        getTableName() {
            return tableName;
        },
        setTableName(inTableName) {
            tableName = inTableName;
        },
        getFinalData() {
            let result = [...data];

            if (searchConfig.value || searchConfig.filters?.length) {
                if (searchConfig.type === "global") {
                    result = result.filter(row =>
                        Object.values(row).some(val =>
                            val !== undefined && val !== null &&
                            String(val).includes(searchConfig.value)
                        )
                    );
                }

                if (searchConfig.type === "column") {
                    result = result.filter(row =>
                        row[searchConfig.key] !== undefined &&
                        String(row[searchConfig.key]).includes(searchConfig.value)
                    );
                }

                if (searchConfig.type === "multi") {
                    result = result.filter(row =>
                        searchConfig.filters.every(f =>
                            row[f.key] !== undefined &&
                            String(row[f.key]).includes(f.value)
                        )
                    );
                }
            };

            return result;
        }
    };
};