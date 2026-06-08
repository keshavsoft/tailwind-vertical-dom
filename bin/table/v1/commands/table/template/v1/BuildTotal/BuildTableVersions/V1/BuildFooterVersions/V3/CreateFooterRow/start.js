import { startFunc as insertRowCells } from "./insertCells.js";
import { appendFooterSaveCell } from "./appendFooterSaveCell.js";

const startFunc = ({ keys, options }) => {
    const tr = document.createElement("tr");

    if (options?.showSerial) tr.appendChild(getSerialColumn());

    insertRowCells(keys, tr, options);

    tr.appendChild(appendFooterSaveCell(options));

    return tr;
};

const getSerialColumn = () => {
    const thIndex = document.createElement("td");
    thIndex.className = "px-4 py-2 border";

    return thIndex
};

export { startFunc };
