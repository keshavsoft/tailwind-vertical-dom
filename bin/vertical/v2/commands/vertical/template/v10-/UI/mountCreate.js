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
    callbacks,
    inConfig
}) => {

    const visibleColumnsConfig = dataStore.getVisibleColumnsConfig();

    const data = dataStore.getData();
    const showSearch = options?.firstRow?.showSearch;

    const findDataFromParams = dataStore.getFindFromParams();

    const isFormDisabled = options.vertical.isFormDisabled;
    const showSaveButton = options.vertical.showSaveButton;
    const verticalOptions = options.vertical;

    buildFullUI({
        containerEl: containerEl,
        inTableName: inConfig.tableName,
        inIsShowHeaderRow: showSearch,
        inIsTableNeeded: false,
        inIsShowHeaderRow: false
    });

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