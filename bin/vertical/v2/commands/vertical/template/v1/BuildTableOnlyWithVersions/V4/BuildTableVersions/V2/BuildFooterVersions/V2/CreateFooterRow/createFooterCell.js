// createFooterCell.js

import { createFooterInput } from "./createFooterInput.js";

const createFooterCell = ({ key, onChangeFunc, showDataList, inColumnsConfig }) => {
    const td = document.createElement("td");
    td.className = "px-4 py-2 border";

    const input = createFooterInput({ key, onChangeFunc, showDataList, inColumnsConfig });
    td.appendChild(input);

    return td;
};

export { createFooterCell };