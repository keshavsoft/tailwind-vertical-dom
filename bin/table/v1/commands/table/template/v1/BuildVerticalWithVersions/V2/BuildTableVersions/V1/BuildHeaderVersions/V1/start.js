import { startFunc as createHeaderRow } from "./CreateHeaderRow/start.js";

const buildHeader = ({ inContainerEl, inDom, options, inVisibleColumns }) => {
    const containerEl = inContainerEl;

    const tr = createHeaderRow({ options, inVisibleColumns });
    const tableHeader = inDom.getTableHeader(containerEl);

    tableHeader.appendChild(tr);
};

export { buildHeader };