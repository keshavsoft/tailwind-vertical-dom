import { setSort } from "../tableStore.js";
import { buildTableBody } from "../methods.js";
import { updateHeaderUI } from "./updateHeaderUI.js";
import { startFunc as getTHead } from "./getTHead.js";

/**
 * Handles what should happen when a user clicks a column header
 * Flow:
 * 1. Update sort state
 * 2. Rebuild table body based on new sort
 * 3. Reflect UI changes in header (active column + direction)
 */
const handleHeaderSort = (headerCell) => {
    const key = headerCell.dataset.key;

    setSort(key);
    buildTableBody();
    updateHeaderUI(headerCell, key);
};
const getSortableHeaders = () => {
    return getTHead().querySelectorAll("th[data-key]");
};

/**
 * Attaches sorting behavior to a header row (<tr>)
 * Every <th data-key> becomes clickable and triggers sorting
 */
const attachSortHandlers = () => {
    const sortableHeaders = getSortableHeaders();

    sortableHeaders.forEach(headerCell => {
        headerCell.addEventListener("click", (e) => {
            handleHeaderSort(e.currentTarget);
        });
    });
};

export { attachSortHandlers };