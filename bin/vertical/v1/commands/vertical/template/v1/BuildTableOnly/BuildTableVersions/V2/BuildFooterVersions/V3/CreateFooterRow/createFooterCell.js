// createFooterCell.js

import { createFooterInput } from "./createFooterInput.js";

const createFooterCell = ({ key, onChangeFunc, showDataList, inColumnsConfig, inDefaultValue, inTdClass }) => {
    const td = document.createElement("td");
    td.className = inTdClass;

    const input = createFooterInput({ key, onChangeFunc, showDataList, inColumnsConfig, inDefaultValue });
    td.appendChild(input);

    return td;
};

export { createFooterCell };