import { createText } from "./createText.js";
import { createSortIcon } from "./createSortIcon.js";

const createWrapper = (key) => {
    const div = document.createElement("div");
    div.className = "flex items-center gap-1 text-base font-bold text-gray-800";

    div.appendChild(createText(key));
    div.appendChild(createSortIcon());

    return div;
};

export { createWrapper };