import { createHeaderCell } from "./CreateHeaderCell/start.js";

const startFunc = ({ inVisibleColumns, tr }) => {
    inVisibleColumns.forEach(key => {
        tr.appendChild(createHeaderCell(key));
    });
};

export { startFunc };