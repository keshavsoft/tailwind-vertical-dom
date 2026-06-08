import { createInputRow } from "./createInputRow.js";
import { createButton } from "./createButton.js";

const createForm = ({ columns, inDataStore,
    inDefaultRow, onSubmit, uiClasses }) => {

    const defaultRow = inDefaultRow;

    const formClass = uiClasses.formClass;
    const inputClass = uiClasses.inputClass;
    const buttonClass = uiClasses.buttonClass;
    const rowClass = uiClasses.rowClass;
    const labelClass = uiClasses.labelClass;

    const form = document.createElement('div');
    form.className = formClass;

    const inputs = {};

    columns.forEach(col => {
        const row = createInputRow({
            inCol: col,
            inDefaultRow: defaultRow,
            inInputs: inputs,
            inInputClass: inputClass,
            inRowClass: rowClass,
            inLabelClass: labelClass
        });

        form.appendChild(row);
    });

    const button = createButton({
        inButtonClass: buttonClass,
        inInputs: inputs,
        inOnSubmit: onSubmit
    });

    form.appendChild(button);

    return form;
};

export { createForm };