import { highlight } from "./highlight.js";

const createDataCell = ({ value, searchValue }) => {
    const td = document.createElement("td");
    // debugger;
    td.className = "px-4 py-2 border";
    // td.textContent = (value ?? "").toString();

    if (searchValue === "") {
        td.innerHTML = (value ?? "").toString();
    } else {
        td.innerHTML = highlight({ text: (value ?? "").toString(), searchValue });
    };

    return td;
};

export { createDataCell };