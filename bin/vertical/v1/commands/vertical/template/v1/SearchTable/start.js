import { startFunc as createHeaderRow } from "./CreateHeaderRow/start.js";

const startFunc = ({ inColumns, inTableHeader }) => {
    const tr = createHeaderRow(inColumns);

    inTableHeader.appendChild(tr);
};

export { startFunc };