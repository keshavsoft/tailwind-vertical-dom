// createForm.js

import { createFormElement } from "./createFormElement.js";
import { createFieldset } from "./createFieldset.js";
import { appendInputRows } from "./Append/appendInputRows.js";
import { appendSaveButton } from "./Append/appendSaveButton.js";
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
        appendSaveButton({
            inFieldset: localFieldset,
            inShowSaveButton: showSaveButton,
            inButtonClass: uiClasses.buttonClass,
            inInputs: localInputs,
            inOnSubmit: onSubmit
        });
    };

    return localForm;
};

export default createForm;