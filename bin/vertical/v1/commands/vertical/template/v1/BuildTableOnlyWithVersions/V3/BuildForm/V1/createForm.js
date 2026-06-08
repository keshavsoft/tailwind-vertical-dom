const collectFormData = (inputs) => {
    const newItem = {};

    Object.keys(inputs).forEach(key => {
        newItem[key] = inputs[key].value;
    });

    return newItem;
};

const createInputRow = ({ col, defaultRow, inputs, inputClass, rowClass, labelClass }) => {
    const row = document.createElement('div');
    row.className = rowClass;

    const label = document.createElement('label');
    label.textContent = col;
    label.className = labelClass;

    const input = document.createElement('input');
    input.className = inputClass;
    input.name = col;

    // auto-fill
    input.value = defaultRow?.[col] ?? "";

    inputs[col] = input;

    row.appendChild(label);
    row.appendChild(input);

    return row;
};

const createForm = ({ columns, onSubmit, inDefaultRow, uiClasses }) => {
    const { formClass, inputClass, buttonClass, rowClass, labelClass } = uiClasses;   // ✅ correct

    const form = document.createElement('div');
    form.className = formClass;

    const inputs = {};

    columns.forEach(col => {
        const row = createInputRow({
            col, defaultRow: inDefaultRow,
            inputs,
            inputClass, rowClass, labelClass
        });
        form.appendChild(row);
    });

    const button = document.createElement('button');
    button.textContent = 'Save';
    button.className = buttonClass;

    button.onclick = () => {
        const newItem = collectFormData(inputs);
        onSubmit(newItem);
    };

    form.appendChild(button);

    return form;
};

export { createForm };