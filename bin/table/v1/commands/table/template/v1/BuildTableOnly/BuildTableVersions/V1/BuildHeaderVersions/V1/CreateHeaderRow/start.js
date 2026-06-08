import { startFunc as insertRowCells } from "./insertCells.js";

const startFunc = ({ options, inVisibleColumns }) => {
    const tr = document.createElement("tr");

    if (options.showSerial) tr.appendChild(getSerialColumn());

    insertRowCells({ tr, inVisibleColumns });

    if (options.showActions) {
        tr.appendChild(getOptionsColumn());
    };

    return tr;
};

const getSerialColumn = () => {
    const thIndex = document.createElement("th");
    thIndex.textContent = "#";
    thIndex.className = "px-4 py-2 border";

    return thIndex
};

const getOptionsColumn = () => {
    const thIndex = document.createElement("th");
    thIndex.textContent = "options";

    return thIndex
};

export { startFunc };
