const createInputRow = ({ inCol, inDefaultRow, inInputs, inInputClass,
    inRowClass, inLabelClass }) => {

    const col = inCol;
    const defaultRow = inDefaultRow;
    const inputs = inInputs;
    const inputClass = inInputClass;
    const rowClass = inRowClass;
    const labelClass = inLabelClass;

    const row = document.createElement('div');
    row.className = rowClass;

    const label = document.createElement('label');
    label.textContent = col;
    label.className = labelClass;

    const input = document.createElement('input');
    input.className = inputClass;
    input.name = col;

    input.value = defaultRow?.[col] ?? "";

    inputs[col] = input;

    row.appendChild(label);
    row.appendChild(input);

    return row;
};

export { createInputRow };