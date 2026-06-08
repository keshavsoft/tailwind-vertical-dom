import { renderTableHeading } from "./BuildFirstColumn/TableHeading/start.js";
import { initTable } from "./BuildTableVersions/V2/init.js";
import { buildForm } from "./BuildForm/start.js";
import { buildDataLists } from "./BuildDataLists/addToDom.js";
import { hookAllListeners } from "./AddListeners/start.js";
import { afterMutation } from "./afterMutation.js";

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

const buildDeleteHandler = ({
    handleDelete,
    inServices,
    inEndPoints,
    inConfig,
    inDataStore,
    inContainerEl,
    inDom,
    inOptions,
    visibleColumns,
    showActions,
    showSerial,
    showTable,
    isBuildDataLists
}) => {
    return async ({ presentPk }) => {
        const fromDelete = await inServices.actions.table.delete({
            inEndPoint: inEndPoints.delete,
            id: presentPk
        });

        if (fromDelete.ok) {
            if (inConfig?.callbacks?.table?.onDelete) {
                const fromClient = await inConfig.callbacks.table.onDelete({
                    toDeletePk: presentPk
                });

                if (fromClient.ok) {
                    afterMutation({
                        inServices,
                        inEndPoints,
                        inDataStore,
                        inContainerEl,
                        inDom,
                        inOptions,
                        inVisibleColumns: visibleColumns,
                        onDelete: handleDelete,
                        isBuildDataLists,
                        inShowActions: showActions,
                        inShowSerial: showSerial,
                        inShowTable: showTable
                    });
                };
            } else {
                afterMutation({
                    inServices,
                    inEndPoints,
                    inDataStore,
                    inContainerEl,
                    inDom,
                    inOptions,
                    inVisibleColumns: visibleColumns,
                    onDelete: handleDelete,
                    isBuildDataLists,
                    inShowActions: showActions,
                    inShowSerial: showSerial,
                    inShowTable: showTable
                });
            };
        };
    };
};

const renderDataLists = ({
    isBuildDataLists,
    inContainerEl,
    inDataStore,
    inDom,
    visibleColumns,
    data
}) => {
    if (isBuildDataLists) {
        buildDataLists({
            inContainerEl,
            inDataStore,
            inDom,
            inVisibleColumns: visibleColumns,
            inData: data
        });
    };
};

const renderSearchRow = ({
    inOptions,
    inContainerEl,
    inDataStore,
    inDom
}) => {
    if (inOptions.firstRow.showSearch) {
        renderTableHeading({
            inContainerEl,
            inDataStore,
            inDom
        });
    } else {
        const firstRow = inDom.getFirstRowClass(inContainerEl);

        firstRow.style.display = "none";
    };
};

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

const hookDomListeners = ({
    inContainerEl,
    inDataStore,
    inDom,
    inOptions
}) => {
    hookAllListeners({
        inContainerEl,
        inDataStore,
        inDom,
        inOptions
    });
};

const initRender = ({ inContainerEl, inDataStore, inDom, inServices, inOptions, inEndPoints,
    inColumnsConfig, inUiClasses, callbacks, inConfig, inToSaveRow }) => {

    const localData = prepareData({
        inDataStore,
        inOptions
    });

    const {
        data,
        columns,
        visibleColumns,
        visibleColumnsConfig,
        defaultRow,
        toSaveRow,
        isBuildDataLists,
        showActions,
        showSerial,
        showTable
    } = localData;

    const handleDelete = buildDeleteHandler({
        inServices,
        inEndPoints,
        inConfig,
        inDataStore,
        inContainerEl,
        inDom,
        inOptions,
        visibleColumns,
        showActions,
        showSerial,
        showTable,
        isBuildDataLists
    });

    renderDataLists({
        isBuildDataLists,
        inContainerEl,
        inDataStore,
        inDom,
        visibleColumns,
        data
    });

    renderSearchRow({
        inOptions,
        inContainerEl,
        inDataStore,
        inDom
    });

    renderTable({
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
    });

    hookDomListeners({
        inContainerEl,
        inDataStore,
        inDom,
        inOptions
    });
};

export { initRender };
