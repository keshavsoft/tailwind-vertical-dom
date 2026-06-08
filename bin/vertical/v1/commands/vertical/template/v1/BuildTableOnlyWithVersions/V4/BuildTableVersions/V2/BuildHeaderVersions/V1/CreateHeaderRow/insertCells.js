import { createHeaderCell } from "./CreateHeaderCell/start.js";

const startFunc = ({ inVisibleColumns, tr, inClassName }) => {
    inVisibleColumns.forEach(key => {
        tr.appendChild(createHeaderCell({
            inKey: key,
            inClassName
        }));
    });
};

export { startFunc };