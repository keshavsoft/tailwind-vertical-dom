// createForm.js

import { createFormElement } from "./createFormElement.js";
import { createFieldset } from "./createFieldset.js";
import { appendInputRows } from "./Append/appendInputRows.js";
import { appendFieldset } from "./appendFieldset.js";

const createForm = ({
    showSaveButton = false,
    inDefaultRow,
    onSubmit,
    uiClasses = {},
    inIsDisabled,
    inVisibleColumnsConfig = [],
    inGetDataLists,
    inServices,
    inConfig,
    inSearchableColumnsConfig,
    inShowButton,
    inDataStore
}) => {
    // debugger
    const localForm = createFormElement();

    const localFieldset = createFieldset({
        inFormClass: uiClasses.formClass,
        inIsDisabled
    });

    const localInputs = {};

    appendFieldset({
        inForm: localForm,
        inFieldset: localFieldset
    });
    // debugger;
    appendInputRows({
        inFieldset: localFieldset,
        inVisibleColumnsConfig,
        inDefaultRow,
        inInputs: localInputs,
        inUiClasses: uiClasses,
        inGetDataLists,
        inServices,
        inConfig,
        inSearchableColumnsConfig,
        inShowButton,
        inDataStore
    });

    if (showSaveButton) {
        const button = document.createElement("ks-button");

        button.onClick = async (data) => {
            const fromService = await inServices.actionsFetchOnly.create({
                inEndPoint: inConfig.endPoints.create,
                payload: data
            });

            // console.log("data : ", data, fromService);

            inConfig.callbacks.vertical.onSuccess(fromService);
            // configJson.callbacks.vertical.onSuccess = onSuccessFunc;

        };

        localForm.appendChild(button);
    };

    return localForm;
};

export default createForm;