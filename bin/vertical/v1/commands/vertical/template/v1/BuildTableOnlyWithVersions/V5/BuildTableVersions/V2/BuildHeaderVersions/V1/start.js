import { startFunc as createHeaderRow } from "./CreateHeaderRow/start.js";

const buildHeader = ({ inContainerEl, inDom, options, inVisibleColumns, inThClassName,
    inTrClassName, inThSerialClassName }) => {
    const containerEl = inContainerEl;

    const tr = createHeaderRow({
        options, inVisibleColumns, inThClassName,
        inTrClassName, inThSerialClassName
    });
    
    const tableHeader = inDom.getTableHeader(containerEl);

    tableHeader.innerHTML = "";

    tableHeader.appendChild(tr);
};

export { buildHeader };