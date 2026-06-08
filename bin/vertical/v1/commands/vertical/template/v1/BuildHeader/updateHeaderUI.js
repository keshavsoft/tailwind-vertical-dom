import { getSortState } from "../tableStore.js";
import { startFunc as getTHead } from "./getTHead.js";

const ICON_DEFAULT = "M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9";
const ICON_UP = "M5 15l7-7 7 7";
const ICON_DOWN = "M19 9l-7 7-7-7";

const getIconPath = (th) => {
    return th.querySelector("[data-sort-icon] path");
};

// 🔹 Reset one column
const resetColumn = (th) => {
    const path = getIconPath(th);
    if (!path) return;

    path.setAttribute("d", ICON_DEFAULT);

    th.classList.remove("text-gray-900");
    th.classList.add("text-gray-700");
};

// 🔹 Activate one column
const activateColumn = (th, asc) => {
    const path = getIconPath(th);
    if (!path) return;

    path.setAttribute("d", asc ? ICON_UP : ICON_DOWN);

    th.classList.remove("text-gray-700");
    th.classList.add("text-gray-900");
};

// 🔹 Orchestration (NOW READABLE)
const updateHeaderUI = (activeTh, key) => {
    const { key: activeKey, asc } = getSortState();

    // 1. Reset everything
    const tableHead = getTHead();

    tableHead.querySelectorAll("th[data-key]").forEach(resetColumn);

    // 2. Activate selected
    if (activeKey === key) {
        activateColumn(activeTh, asc);
    }
};

export { updateHeaderUI };