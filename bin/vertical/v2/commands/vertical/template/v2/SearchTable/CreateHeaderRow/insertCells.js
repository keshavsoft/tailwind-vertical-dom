import { createHeaderCell } from "./CreateHeaderCell/start.js";

const startFunc = (keys, tr, options = {}) => {
    keys.forEach(key => {
        tr.appendChild(createHeaderCell(key));
    });
};

export { startFunc };