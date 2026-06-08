import { createInputRow } from "./createInputRow.js";
import { createButton } from "./createButton.js";

const createForm = ({ columns, inDataStore, showSaveButton,
    inDefaultRow, onSubmit, uiClasses, inIsDisabled, inVisibleColumnsConfig }) => {
    debugger;
    const defaultRow = inDefaultRow;

    const formClass = uiClasses.formClass;
    const inputClass = uiClasses.inputClass;
    const buttonClass = uiClasses.buttonClass;
    const rowClass = uiClasses.rowClass;
    const labelClass = uiClasses.labelClass;
    // debugger;
    const form = document.createElement('form');
    form.className = "verticalForm";

    const fieldset = document.createElement('fieldset');
    fieldset.className = formClass;

    fieldset.disabled = inIsDisabled; // when needed

    form.appendChild(fieldset);
    const inputs = {};

    inVisibleColumnsConfig.forEach(col => {
        const row = createInputRow({
            inCol: col,
            inDefaultRow: defaultRow,
            inInputs: inputs,
            inInputClass: inputClass,
            inRowClass: rowClass,
            inLabelClass: labelClass,
        });

        fieldset.appendChild(row);
    });

    if (showSaveButton) {
        const button = createButton({
            inButtonClass: buttonClass,
            inInputs: inputs,
            inOnSubmit: onSubmit
        });

        fieldset.appendChild(button);
    };

    return form;
};

export { createForm };