import { createInputRow } from "./createInputRow.js";
import { createButton } from "./createButton.js";

const createForm = ({
    showSaveButton,
    inDefaultRow,
    onSubmit,
    uiClasses,
    inIsDisabled,
    inVisibleColumnsConfig
}) => {

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

    appendInputRows({
        inFieldset: localFieldset,
        inVisibleColumnsConfig,
        inDefaultRow,
        inInputs: localInputs,
        inUiClasses: uiClasses
    });

    appendSaveButton({
        inFieldset: localFieldset,
        inShowSaveButton: showSaveButton,
        inButtonClass: uiClasses.buttonClass,
        inInputs: localInputs,
        inOnSubmit: onSubmit
    });

    return localForm;
};

const createFormElement = () => {
    const localForm = document.createElement("form");

    localForm.className = "verticalForm";

    return localForm;
};

const createFieldset = ({
    inFormClass,
    inIsDisabled
}) => {

    const localFieldset = document.createElement("fieldset");

    localFieldset.className = inFormClass;
    localFieldset.disabled = inIsDisabled;

    return localFieldset;
};

const appendFieldset = ({
    inForm,
    inFieldset
}) => {

    inForm.appendChild(inFieldset);
};

const appendInputRows = ({
    inFieldset,
    inVisibleColumnsConfig,
    inDefaultRow,
    inInputs,
    inUiClasses
}) => {

    inVisibleColumnsConfig.forEach(localColumn => {
        appendInputRow({
            inFieldset,
            inColumn: localColumn,
            inDefaultRow,
            inInputs,
            inUiClasses
        });
    });
};

const appendInputRow = ({
    inFieldset,
    inColumn,
    inDefaultRow,
    inInputs,
    inUiClasses
}) => {

    const localRow = createInputRow({
        inCol: inColumn,
        inDefaultRow,
        inInputs,
        inInputClass: inUiClasses.inputClass,
        inRowClass: inUiClasses.rowClass,
        inLabelClass: inUiClasses.labelClass,
    });

    inFieldset.appendChild(localRow);
};

const appendSaveButton = ({
    inFieldset,
    inShowSaveButton,
    inButtonClass,
    inInputs,
    inOnSubmit
}) => {

    if (inShowSaveButton === false) return;

    const localButton = createButton({
        inButtonClass,
        inInputs,
        inOnSubmit
    });

    inFieldset.appendChild(localButton);
};

export { createForm };