import { buildForm } from "./BuildForm/start.js";
import { buildDataLists } from "./BuildDataLists/addToDom.js";

const initRender = ({ inContainerEl, inDataStore, inDom, inServices, inOptions, inEndPoints,
    inColumnsConfig, inUiClasses, callbacks, inConfig }) => {

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
    if (isBuildDataLists) {
        buildDataLists({
            inContainerEl,
            inDataStore,
            inDom,
            inVisibleColumns: visibleColumns,
            inData: data
        });
    };
// debugger;
    if (inConfig.layout.type === "vertical") {
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

        focusFirstInput({ inContainerEl })
    };
};

const focusFirstInput = ({ inContainerEl }) => {
    const el = inContainerEl.querySelector(
        "input, select, textarea"
    );
    el?.focus();
};

export { initRender };
