import createForm from "../BuildHtmlForm/V4/index.js";
import buildDataLists from "../BuildDataLists/V2/addToDom.js";
import FocusSet from "../FocusSet/V3/focusSet.js";

import { buildFullUI } from "./compose/buildFullUI.js";

const startFunc = ({
    containerEl,
    dataStore,
    dom,
    services,
    options,
    endPoints,
    columnsConfig,
    uiClasses,
    callbacks,
    inConfig,
    inShowFooter = false
}) => {

    // debugger;
    const visibleColumns = dataStore.getVisibleColumns();
    const visibleColumnsConfig = dataStore.getVisibleColumnsConfig();
    const searchableColumnsConfig = dataStore.getSearchableColumnsConfig();

    const data = dataStore.getData();
    const showSerial = options.table.showSerial;
    const serialWidth = options.table.serialWidth;

    const dataListArray = dataStore.getDataList("ledgers");
    // debugger
    const dataListColumns = dataStore.getDataListColumns();

    const showTotals = options.table.showTotals;
    const showFilterVerticalForm = options.showFilterVerticalForm;
    const showSearch = options?.firstRow?.showSearch;

    const findData = dataStore.getFindData();
    const findDataFromParams = dataStore.getFindFromParams();

    const isFormDisabled = options.vertical.isFormDisabled;
    const showSaveButton = options.vertical.showSaveButton;
    const verticalOptions = options.vertical;

    console.log("verticalOptions------------ : ", visibleColumnsConfig);

    debugger

    buildFullUI({
        containerEl: containerEl,
        inTableName: inConfig.tableName,
        inIsShowHeaderRow: showSearch,
        inIsTableNeeded: false,
        inIsShowHeaderRow: false
    });
    // console.log("uiClasses-----------11111111 : ", uiClasses);

    if (true) {
        const searchForm = createForm({
            inVisibleColumnsConfig: visibleColumnsConfig,
            inColumnsConfig: visibleColumnsConfig,
            inServices: services,
            inConfig,
            inShowButton: false,
            // uiClasses: uiClasses.form,
            inDataStore: dataStore,
            showSaveButton: showSaveButton,
            inDefaultRow: findDataFromParams,
            inIsDisabled: isFormDisabled,
            inVerticalOptions: verticalOptions,
            inCallBacks: callbacks
        });

        containerEl.prepend(searchForm);
    };

    // debugger;
    buildDataLists({
        inContainerEl: containerEl,
        inDataStore: dataStore,
        inDom: dom,
        inData: data,
        inDataListColumns: visibleColumnsConfig
    });

    FocusSet({
        inContainerEl: containerEl,
        inPriority: ["vertical"]
    })
};

export default startFunc;