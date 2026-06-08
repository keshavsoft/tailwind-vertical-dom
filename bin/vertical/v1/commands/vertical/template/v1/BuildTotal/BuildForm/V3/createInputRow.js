// 📁 createInputRow.js

const createLabel = ({ col, labelClass }) => {
    const label = document.createElement('label');
    label.textContent = col;
    label.className = labelClass;
    return label;
};

const createInput = ({ col, inputClass, value, inShowDataList }) => {
    const input = document.createElement('input');
    input.className = inputClass;
    input.name = col;
    input.value = value ?? "";

    if (inShowDataList) {
        input.setAttribute("list", `${col}List`);
    };

    return input;
};

const resolveValue = ({ col, defaultRow }) => {
    return defaultRow?.[col] ?? "";
};

const createRowContainer = ({ rowClass }) => {
    const row = document.createElement('div');
    row.className = rowClass;
    return row;
};

const attachToInputs = ({ inputs, col, input }) => {
    inputs[col] = input;
};

const assembleRow = ({ row, label, input }) => {
    row.appendChild(label);
    row.appendChild(input);
    return row;
};

const createInputRow = ({
    inCol,
    inDefaultRow,
    inInputs,
    inInputClass,
    inRowClass,
    inLabelClass
}) => {
    const col = inCol.columnName;

    const row = createRowContainer({ rowClass: inRowClass });

    const value = resolveValue({ col, defaultRow: inDefaultRow });

    const label = createLabel({ col, labelClass: inLabelClass });

    const input = createInput({
        col,
        inputClass: inInputClass,
        value,
        inShowDataList: inCol.tableFooterDataListShow
    });

    attachToInputs({ inputs: inInputs, col, input });

    return assembleRow({ row, label, input });
};

export { createInputRow };