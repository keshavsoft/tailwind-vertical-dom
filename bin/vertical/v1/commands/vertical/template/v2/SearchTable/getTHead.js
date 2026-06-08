import { getHtmlId } from "../tableStore.js";

const startFunc = () => {
    const tableContainerId = getHtmlId();
    const tableContainer = document.getElementById(tableContainerId);

    const thead = tableContainer.querySelector("table thead");

    return thead;
};

export { startFunc };