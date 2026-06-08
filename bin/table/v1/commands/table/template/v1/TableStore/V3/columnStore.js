import { prepareDefaultRow } from "../../Utils/tableHelpers.js";

export const createColumnStore = () => {
    let keys = [];
    let visibleColumns = [];
    let visibleColumnsConfig = [];
    let dataListColumns = [];
    let searchableColumnsConfig = [];

    return {
        setColumns: (inColumns) => {
            keys = inColumns;
        },
        setVisibleColumns: (inVisibleColumns) => {
            visibleColumns = inVisibleColumns;
        },
        setVisibleConfig: (inVisibleConfig) => {
            visibleColumnsConfig = inVisibleConfig;
        },
        setSearchableColumnsConfig: (inColumns) => {
            searchableColumnsConfig = inColumns;
        },
        getColumns: () => keys,
        getVisibleColumns: () => visibleColumns,
        getVisibleColumnsConfig: () => visibleColumnsConfig,
        setDataListColumns: (d) => { dataListColumns = d; },
        getDataListColumns: () => dataListColumns,
        getSearchableColumnsConfig: () => searchableColumnsConfig
    };
};

