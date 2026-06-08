// createFooterInput.js

const createFooterInput = ({ key, onChangeFunc, showDataList, inColumnsConfig,
    inDefaultValue, inClasses
}) => {
    const input = document.createElement("input");

    input.type = "text";
    input.placeholder = key;
    input.name = key;
    input.className = "w-full px-2 py-1 border rounded text-md";

    const findColumn = inColumnsConfig.find(element => {
        return element.columnName === key;
    });

    if (showDataList && findColumn?.tableFooterDataListShow) {
        input.setAttribute("list", `${key}List`);
    };

    if (inDefaultValue !== undefined) {
        input.value = inDefaultValue;
    };

    return input;
};

export { createFooterInput };