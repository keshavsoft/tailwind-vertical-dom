import { buildRows } from './orchestrator.js';

const buildBodyAtThatState = ({
    inColumns,
    inDataToShow,
    inContainerEl,
    inDom,
    searchValue = ""
}) => {

    const tableBody = inDom.getTableBody(inContainerEl);
    tableBody.innerHTML = '';

    const rows = buildRows({
        data: inDataToShow,
        columns: inColumns,
        searchValue
    });

    rows.forEach(tr => tableBody.appendChild(tr));
};

export { buildBodyAtThatState };