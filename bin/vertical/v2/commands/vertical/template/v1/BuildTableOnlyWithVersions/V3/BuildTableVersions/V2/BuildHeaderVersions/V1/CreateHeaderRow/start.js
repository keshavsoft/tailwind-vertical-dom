import { startFunc as insertRowCells } from "./insertCells.js";

const startFunc = ({ options, inVisibleColumns, inThClassName, inTrClassName,
    inThSerialClassName
}) => {
    const tr = document.createElement("tr");

    if (inTrClassName) {
        tr.className = inTrClassName;
    };

    if (options.showSerial) tr.appendChild(getSerialColumn({ inClassName: inThSerialClassName }));

    insertRowCells({
        tr, inVisibleColumns,
        inClassName: inThClassName
    });

    if (options.showActions) {
        tr.appendChild(getOptionsColumn());
    };

    return tr;
};

const getSerialColumn = ({ inClassName }) => {
    const thIndex = document.createElement("th");
    thIndex.textContent = "#";

    if (inClassName) {
        thIndex.className = inClassName;
    } else {
        thIndex.className = "px-4 py-2 border";
    };
    // thIndex.className = "px-4 py-2 border";

    return thIndex
};

const getOptionsColumn = () => {
    const thIndex = document.createElement("th");
    thIndex.textContent = "options";

    return thIndex
};

export { startFunc };
