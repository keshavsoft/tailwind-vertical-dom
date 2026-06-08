// createFooterCell.js

import { createFooterInput } from "./createFooterInput.js";

const createFooterCell = ({ key, onChangeFunc, showDataList, inColumnsConfig, inDefaultValue, inTdClass }) => {
    let localChangeFunc;

    const td = document.createElement("td");
    td.className = inTdClass;

    const findColumn = inColumnsConfig.find(element => {
        return element.columnName === key;
    });

    if (findColumn.allowOnChange) {
        localChangeFunc = onChangeFunc;
    };

    const input = createFooterInput({
        key, onChangeFunc: localChangeFunc,
        showDataList, inColumnsConfig, inDefaultValue
    });

    td.appendChild(input);

    return td;
};

export { createFooterCell };