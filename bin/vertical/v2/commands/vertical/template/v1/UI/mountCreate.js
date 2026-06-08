import createForm from "../BuildSearchForm/V2/createForm.js";
import buildDataLists from "../BuildDataLists/V2/addToDom.js";

import SearchFuncs from "../TableFirstRow/V3/SearchFuncs/V4/index.js";

import setFocus from "../UI/SetFocus/V2/index.js";

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
    const showBalance = options.table.showBalance;
    const showFilterVerticalForm = options.showFilterVerticalForm;
    const showSearch = options?.firstRow?.showSearch;
    const showTotalsForSearch = options?.table?.showTotalsForSearch;
    const showBalanceForSearch = options?.table?.showBalanceForSearch;
    const showFooterRows = options?.table?.showFooterRows;

    const findData = dataStore.getFindData();
    const findDataFromParams = dataStore.getFindFromParams();

    const isFormDisabled = options.vertical.isFormDisabled;
    const showSaveButton = options.vertical.showSaveButton;

    // debugger

    buildFullUI({
        containerEl: containerEl,
        inTableName: inConfig.tableName,
        inIsShowHeaderRow: showSearch,
        inIsTableNeeded: false,
        inIsShowHeaderRow: false
    });

    if (true) {
        const handleSave = async (newItem) => {
            const res = await services.actions.vertical.save({
                inEndPoint: endPoints.create,
                payload: newItem
            });

            if (res.ok) {
                if (callbacks?.vertical?.onSuccess) {
                    callbacks?.vertical?.onSuccess(res);
                    return; // 🚫 stop library flow
                };

                return await true;
            };
        };

        const searchForm = createForm({
            inVisibleColumnsConfig: visibleColumnsConfig,
            inSearchableColumnsConfig: visibleColumnsConfig,
            inServices: services,
            inConfig,
            inShowButton: false,
            uiClasses: uiClasses.form,
            inDataStore: dataStore,
            showSaveButton: showSaveButton,
            onSubmit: handleSave,
            inDefaultRow: findDataFromParams,
            inIsDisabled: isFormDisabled
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

    // debugger;
    if (showSearch) {
        // for search vertical
        SearchFuncs({ inContainerEl: containerEl });
    };

    setFocus({ inContainerEl: containerEl });
};

export default startFunc;

