import { inputFuncToRun } from "./inputFunc.js";
import { inputFuncToRun as singleColumn } from "./singleColumn.js";
import { inputFuncToRun as multiColumn } from "./multiColumn.js";

const funcToRun = ({ inContainerEl, inDataStore, inDom, inColumns, inVisibleColumns, inOptions }) => {
    const htmlElement = inDom.getSearchInput(inContainerEl);
    // debugger;
    if (htmlElement.classList.contains('ks-search-allColumns')) {
        htmlElement.addEventListener("input", (e) => {
            inputFuncToRun({ e, inDataStore, inVisibleColumns, inContainerEl, inDom, inOptions });
        });
    };

    if (htmlElement.classList.contains('singleColumn')) {
        htmlElement.addEventListener("input", (e) => {
            singleColumn({ e, inDataStore, inColumns, inContainerEl, inDom });
        });
    };

    if (htmlElement.classList.contains('multiColumn')) {
        htmlElement.addEventListener("input", (e) => {
            multiColumn({ e, inDataStore, inColumns, inContainerEl, inDom });
        });
    };
};

export { funcToRun };