import { prepareDefaultRow } from "../../Utils/tableHelpers.js";

export const createColumnStore = () => {
    let keys = [];
    let visibleColumns = [];
    let visibleColumnsConfig = [];
    let dataListColumns = [];

    return {
        setColumns: (inColumns) => {
            keys = inColumns;
        },
        setVisibleColumns: (inVisibleColumns) => {
            visibleColumns = inVisibleColumns;
        }, setVisibleConfig: (inVisibleConfig) => {
            visibleColumnsConfig = inVisibleConfig;
        },
        getColumns: () => keys,
        getVisibleColumns: () => visibleColumns,
        getVisibleColumnsConfig: () => visibleColumnsConfig,
        setDataListColumns: (d) => { dataListColumns = d; },
        getDataListColumns: () => dataListColumns,
    };
};

