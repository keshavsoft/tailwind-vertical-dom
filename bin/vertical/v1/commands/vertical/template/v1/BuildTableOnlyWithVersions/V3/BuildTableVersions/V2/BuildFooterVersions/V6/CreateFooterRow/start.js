import { startFunc as insertRowCells } from "./insertCells.js";
import { appendFooterSaveCell } from "./appendFooterSaveCell.js";

const startFunc = ({ keys, options, inDefaultRow, inTdClass, inSerialClass }) => {
    const tr = document.createElement("tr");

    if (options?.showSerial) tr.appendChild(getSerialColumn({ inSerialClass }));

    insertRowCells({ keys, tr, options, inDefaultRow, inTdClass });

    tr.appendChild(appendFooterSaveCell(options));

    return tr;
};

const getSerialColumn = ({ inSerialClass }) => {
    const thIndex = document.createElement("td");
    thIndex.className = inSerialClass;

    return thIndex
};

export { startFunc };
