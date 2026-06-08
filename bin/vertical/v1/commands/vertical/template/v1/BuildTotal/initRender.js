import { renderTableHeading } from "./BuildFirstColumn/TableHeading/start.js";
import { initTable } from "./BuildTableVersions/V2/init.js";
import { buildForm } from "./BuildForm/start.js";
import { buildDataLists } from "./BuildDataLists/addToDom.js";
import { hookAllListeners } from "./AddListeners/start.js";
import { afterMutation } from "./afterMutation.js";

const initRender = ({ inContainerEl, inDataStore, inDom, inServices, inOptions, inEndPoints,
    inColumnsConfig, inUiClasses, callbacks }) => {

    const data = inDataStore.getData();
    const columns = inDataStore.getColumns();
    const visibleColumns = inDataStore.getVisibleColumns();
    const visibleColumnsConfig = inDataStore.getVisibleColumnsConfig();
    // debugger
    const defaultRow = inDataStore.getDefaultRow();

    const isBuildDataLists = inOptions.dataList.show;
    const showActions = inOptions.table.showRowOptions;
    const showSerial = inOptions.table.showSerial;
    const showTable = inOptions.table.showTable;
    // debugger;
    const handleDelete = async ({ presentPk }) => {
        await inServices.actions.remove({
            inEndPoint: inEndPoints.delete,
            id: presentPk
        })
        debugger;
        afterMutation({
            inServices, inEndPoints, inDataStore, inContainerEl,
            inDom, inOptions, inVisibleColumns: visibleColumns,
            onDelete: handleDelete, isBuildDataLists,
            inShowActions: showActions,
            inShowSerial: showSerial, inShowTable: showTable
        });
    };
    // debugger;
    if (isBuildDataLists) {
        buildDataLists({
            inContainerEl,
            inDataStore,
            inDom,
            inVisibleColumns: visibleColumns,
            inData: data
        });
    };

    if (inOptions.vertical.showVertical) {
        const inIsDisabled = inOptions.vertical.isDisabled;
        const showSaveButton = inOptions.vertical.showSaveButton;
        const findData = inDataStore.getFindData();
        // debugger;
        buildForm({
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
            inVisibleColumnsConfig: visibleColumnsConfig,
            onDelete: handleDelete,
            inShowActions: showActions,
            inShowSerial: showSerial,
            isBuildDataLists,
            inDefaultRow: defaultRow,
            uiClasses: inUiClasses.form,
            inIsDisabled: inIsDisabled,
            showSaveButton,
            inFindData: findData,
            inShowTable: showTable,
            incallbacks: callbacks
        });
    };

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
            inUiClasses: inUiClasses.table,
            inShowTable: showTable
        });
    };

    hookAllListeners({ inContainerEl, inDataStore, inDom, inOptions });
};

export { initRender };
