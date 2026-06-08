import { startFunc as insertRowCells } from "./insertCells.js";

const startFunc = (keys) => {
    const tr = document.createElement("tr");

    tr.appendChild(getSerialColumn());

    insertRowCells(keys, tr);

    return tr;
};

const getSerialColumn = () => {
    const thIndex = document.createElement("th");
    thIndex.textContent = "#";
    thIndex.className = "px-4 py-2 border";

    return thIndex
};

export { startFunc };
