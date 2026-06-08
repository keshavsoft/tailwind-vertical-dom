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
        input.dataset.dataListSource = findColumn.dataListSource;
    };

    if (inDefaultValue !== undefined) {
        // default value is inserted in input value
        input.value = inDefaultValue;
        //need to add to dataset also for further use, like clear values
        input.dataset.defaultValue = inDefaultValue;
    };

    if (onChangeFunc) {
        input.addEventListener(
            "change",
            onChangeFunc
        );
    };

    return input;
};

export { createFooterInput };