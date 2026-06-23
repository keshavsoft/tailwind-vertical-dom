const fillInputsFromObject = ({
    container,
    sourceObject,
    skipInput
}) => {
    Object.entries(sourceObject).forEach(([key, value]) => {
        // const selector = `[name="${CSS.escape(key)}"]`;
        const selector = `[data-data-list-fill-name="${CSS.escape(key)}"]`;

        const input = container.querySelector(selector);

        if (!input || input === skipInput) return;

        input.value = value ?? "";
        // input.dispatchEvent(new Event("change", { bubbles: true }));
    });
};

const findDataListRecord = ({ inInputValue, inDataStore, inDataListSource }) => {
    const dataListSource = inDataListSource;

    if (!dataListSource || !inDataStore) return;

    const [dataListName, matchKey] = dataListSource.split(".");

    if (!dataListName || !matchKey) return;

    const dataListArray = inDataStore.getDataList(dataListName) || [];

    return dataListArray.find(element => {
        return element[matchKey] === inInputValue;
    });
};

const onChangeFunc = ({ inDataListSource, inDataStore, inInputValue,
    inCurrentInput
}) => {
    const currentInput = inCurrentInput;

    const localFind = findDataListRecord({
        inInputValue,
        inDataStore, inDataListSource
    });
    console.log("localFind : ", localFind);

    if (!localFind) return;

    const closestVerticalForm = currentInput.closest(".verticalForm");

    if (!closestVerticalForm) return;

    fillInputsFromObject({
        container: closestVerticalForm,
        sourceObject: localFind,
        skipInput: currentInput
    });
};

const startFunc = ({
    inCol,
    inDefaultRow,
    inDataListSource,
    inDataStore
}) => {
    const col = inCol.columnName;
    let row = document.createElement("ks-datalist-input");

    // row.onChange = (value) => {
    //     onChangeFunc({
    //         inDataListSource, inDataStore,
    //         inInputValue: value,
    //         inCurrentInput: row
    //     });
    // };
    const defaultValue = col in inDefaultRow ? inDefaultRow[col] : "";
    row.setAttribute("label", inCol.title);
    row.setAttribute("ksName", col);
    row.setAttribute("list", `${col}List`);
    row.setAttribute("source", col);
    row.setAttribute("ksInValue", defaultValue);
    row.setAttribute("ksDataListSource", inDataListSource);

    row.dataStore = inDataStore;

    return row;
};

export default startFunc;
