export const createColumnStore = () => {
    let keys = [];
    let visibleColumns = [];

    return {
        setColumns: (cfg) => {
            keys = cfg.map(c => c.columnName);
            visibleColumns = cfg.filter(c => c.isVisible !== false).map(c => c.columnName);
        },
        getColumns: () => keys,
        getVisibleColumns: () => visibleColumns
    };
};