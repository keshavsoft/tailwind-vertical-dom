import { buildRow } from "./buildRow.js";

const pureBuildBody = ({ inData, inVisibleColumns, inContainerEl, inDom, options, searchValue = "" }) => {
    const tableBody = inDom.getTableBody(inContainerEl);
    const data = inData;
    // debugger;
    tableBody.innerHTML = "";

    data.forEach((item, index) => {
        const row = buildRow({ item, index, inVisibleColumns, options, searchValue });
        tableBody.appendChild(row);
    });
};

export { pureBuildBody };