// 📁 createInputRow.js

import { createLabel } from "./createLabel.js";
// import { createInput } from "./createInput.js";
import { resolveValue } from "./resolveValue.js";
import { createRowContainer } from "./createRowContainer.js";
import { attachToInputs } from "./attachToInputs.js";
import { assembleRow } from "./assembleRow.js";

import { createInput } from "./CreateInput/V2/createInput.js";

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

    if (!localFind) return;

    const closestVerticalForm = currentInput.closest(".verticalForm");

    if (!closestVerticalForm) return;

    fillInputsFromObject({
        container: closestVerticalForm,
        sourceObject: localFind,
        skipInput: currentInput
    });
};

const createInputRow = ({
    inCol,
    inDefaultRow,
    inInputs,
    inInputClass,
    inRowClass,
    inLabelClass,
    isDate,
    defaultToday,
    isReadonly,
    autoFocus,
    isSearch,
    inDataListSource,
    inVisibleColumnsConfig,
    inServices,
    inConfig,
    inDataStore,
    inUiClassesForEachColumn
}) => {
    const col = inCol.columnName;
    const dataListFillName = inCol.dataListFillName;
    // console.log("caught:", inCol);
    let row;

    if ("verticalConfig" in inCol) {
        row = document.createElement("ks-datalist-input");

        row.onChange = (value) => {
            onChangeFunc({
                inDataListSource, inDataStore,
                inInputValue: value,
                inCurrentInput: row
            });
        };

        row.setAttribute("label", inCol.title);
        row.setAttribute("name", col);
        row.setAttribute("list", `${col}List`);
        row.setAttribute("source", col);

        row.dataset.dataListSource = inDataListSource;

        return row;

    } else {
        switch (col) {
            case "LedgerName":
                row = document.createElement("ks-datalist-input");

                row.onChange = (value) => {
                    // console.log("caught:", value);
                    onChangeFunc({
                        inDataListSource, inDataStore,
                        inInputValue: value,
                        inCurrentInput: row
                    });
                };

                row.setAttribute("label", col);
                row.setAttribute("name", col);
                row.setAttribute("list", `${col}List`);
                row.setAttribute("source", col);

                row.dataset.dataListSource = inDataListSource;

                return row;
                break;
            case "InvoiceDate":
                row = document.createElement("ks-input");

                row.setAttribute("label", "InvoiceDate");
                row.setAttribute("name", "InvoiceDate");
                row.setAttribute("type", "date");

                return row;
                break;

            default:
                row = createRowContainer({ rowClass: inRowClass });

                const value = resolveValue({ col, defaultRow: inDefaultRow });
                // debugger;
                const label = createLabel({ col, labelClass: inLabelClass });

                const input = createInput({
                    col,
                    inputClass: inInputClass,
                    value,
                    inShowDataList: inCol.tableFooterDataListShow || inCol.isSearchable,
                    isDate,
                    defaultToday,
                    isReadonly,
                    autoFocus,
                    isSearch,
                    onChangeFunc,
                    inDataListSource,
                    inDataStore,
                    inDataListFillName: dataListFillName
                });

                attachToInputs({ inputs: inInputs, col, input });

                return assembleRow({ row, label, input });

                break;
        };

    };
};

export { createInputRow };
