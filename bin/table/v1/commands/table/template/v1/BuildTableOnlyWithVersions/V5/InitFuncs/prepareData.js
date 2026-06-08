const prepareData = ({ inDataStore, inOptions }) => {
    return {
        data: inDataStore.getData(),
        columns: inDataStore.getColumns(),
        visibleColumns: inDataStore.getVisibleColumns(),
        visibleColumnsConfig: inDataStore.getVisibleColumnsConfig(),

        defaultRow: inDataStore.getDefaultRow(),
        toSaveRow: inDataStore.getToSaveRow(),

        isBuildDataLists: inOptions.dataList.show,
        showActions: inOptions.table.showRowOptions,
        showSerial: inOptions.table.showSerial,
        showTable: inOptions.table.showTable
    };
};

export { prepareData };
