import { highlightText } from "./highlight.js";

const createCell = ({ value, searchValue }) => {
    const td = document.createElement('td');
    td.className = 'px-4 py-2 border';

    td.innerHTML = highlightText(value, searchValue);

    return td;
};

export { createCell };