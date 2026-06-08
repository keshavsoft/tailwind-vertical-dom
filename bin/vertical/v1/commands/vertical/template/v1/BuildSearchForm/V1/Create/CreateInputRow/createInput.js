// createInput.js

const createInput = ({
    col,
    inputClass='flex-1 border rounded px-3 py-2',
    value,
    inShowDataList,
    isDate,
    defaultToday,
    isReadonly,
    autoFocus,
    isSearch,
    onChangeFunc,
    inDataListSource
}) => {

    const input = document.createElement("input");

    input.className = inputClass;
    input.name = col;

    if (value !== undefined) {
        input.dataset.defaultValue = value ?? "";
    };

    input.value = value ?? "";

    if (inShowDataList) {
        input.setAttribute("list", `${col}List`);
        input.dataset.dataListSource = inDataListSource;

        // debugger
        input.addEventListener(
            "change",
            onChangeFunc
        );
    };

    if (isDate) {
        input.setAttribute("type", "date");
    };

    if (isDate && defaultToday) {
        input.valueAsDate = new Date();
    };

    if (isReadonly) {
        input.readOnly = true;
    };

    if (autoFocus) {
        input.autofocus = true;
    };

    if (isSearch) {
        input.setAttribute("type", "search");
    };

    return input;
};

export { createInput };