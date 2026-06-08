import { buildRow } from "./buildRow.js";

const pureBuildBody = ({ inData, inVisibleColumns, inContainerEl, inDom, options, searchValue = "" }) => {
    if (!inData || inData.length === 0) return showNoData({ inContainerEl, inDom });

    buildRows({ inData, inVisibleColumns, inContainerEl, inDom, options, searchValue });
};

const pureBuildBody1 = ({ inData, inVisibleColumns, inContainerEl, inDom, options, searchValue = "" }) => {
    const tableBody = inDom.getTableBody(inContainerEl);
    const data = inData;
    // debugger;
    tableBody.innerHTML = "";

    if (!data || data.length === 0) {
        tableBody.innerHTML = `
    <tr>
      <td colspan="100%" style="text-align:center;padding:20px;color:#888;font-style:italic;">
        No records found
      </td>
    </tr>`;
        return;
    };

    data.forEach((item, index) => {
        const row = buildRow({ item, index, inVisibleColumns, options, searchValue });
        tableBody.appendChild(row);
    });
};

const showNoData = ({ inContainerEl, inDom }) => {
    const tableBody = inDom.getTableBody(inContainerEl);
    tableBody.innerHTML = `<tr><td colspan="100%" style="text-align:center;padding:20px;color:#888;font-style:italic;">No records found</td></tr>`;
};

const buildRows = ({ inData, inVisibleColumns, inContainerEl, inDom, options, searchValue }) => {
    const tableBody = inDom.getTableBody(inContainerEl);
    tableBody.innerHTML = "";

    inData.forEach((item, index) => {
        const row = buildRow({ item, index, inVisibleColumns, options, searchValue });
        tableBody.appendChild(row);
    });
    // pureBuildBody({ inData, inVisibleColumns, inContainerEl, inDom, options, searchValue });
};

export { pureBuildBody };