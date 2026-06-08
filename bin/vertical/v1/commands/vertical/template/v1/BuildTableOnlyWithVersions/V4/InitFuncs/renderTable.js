import { initTable } from "../BuildTableVersions/V2/init.js";

const renderTable = ({
    showTable,
    inOptions,
    inContainerEl,
    inDataStore,
    inDom,
    inServices,
    inEndPoints,
    inColumnsConfig,
    data,
    visibleColumns,
    handleDelete,
    showActions,
    showSerial,
    defaultRow,
    inUiClasses,
    toSaveRow
}) => {
    if (showTable) {
        const inIsDisabled = inOptions.table.isDisabled;

        initTable({
            inContainerEl,
            inDataStore,
            inDom,
            inServices,
            inOptions,
            inEndPoints,
            inColumnsConfig,
            inShowFooter: inOptions.table.showFooter,
            inData: data,
            inVisibleColumns: visibleColumns,
            onDelete: handleDelete,
            inShowActions: showActions,
            inShowSerial: showSerial,
            inIsDisabled: inIsDisabled,
            inDefaultRow: defaultRow,
            inUiClasses: inUiClasses?.tableComplete,
            inShowTable: showTable,
            inToSaveRow: toSaveRow
        });
    };
};

export { renderTable };
