// createInput.js

import { applyInputValue } from "./applyInputValue.js";
import { applyInputType } from "./applyInputType.js";
import { applyInputFlags } from "./applyInputFlags.js";
import { attachDataListChange } from "./attachDataListChange.js";

const createInput = ({
    col,
    inputClass = "flex-1 border rounded px-3 py-2",
    value,
    inShowDataList,
    isDate,
    defaultToday,
    isReadonly,
    autoFocus,
    isSearch,
    onChangeFunc,
    inDataListSource,
    inDataStore,
    inDataListFillName
}) => {
    if (col === "InvoiceDate1") {
        const input = document.createElement("date-input");
        return input;
    } else {


        // console.log("col : ", col);

        const input = document.createElement("input");

        input.className = inputClass;
        input.name = col;
        input.dataset.dataListFillName = inDataListFillName || col;

        applyInputValue({ input, value });

        applyInputType({
            input,
            isDate,
            defaultToday,
            isSearch
        });

        applyInputFlags({
            input,
            isReadonly,
            autoFocus
        });

        if (inShowDataList) {
            attachDataListChange({
                input,
                col,
                onChangeFunc,
                inDataListSource,
                inDataStore
            });
        }

        return input;

    };
};

export { createInput };