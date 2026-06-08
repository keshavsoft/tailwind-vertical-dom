import { startFunc as createHandleSave } from "./CreateHandleSave/start.js";
import { startFunc as createHandleOnChange } from "./CreateHandleOnChange/start.js";
import { startFunc as createFooter } from "./CreateFooter/start.js";
import { appendFooter } from "./DomManipulation/appendFooter.js";

const buildFooter = (inData) => {
    const localVisibleColumns =
        inData.inVisibleColumns;

    const localHandleSave =
        createHandleSave(inData);

    const localHandleOnChange =
        createHandleOnChange(inData);

    const localTr = createFooter({
        inData,
        localVisibleColumns,
        localHandleSave,
        localHandleOnChange
    });

    appendFooter({
        inDom: inData.inDom,
        inContainerEl: inData.inContainerEl,
        inTr: localTr
    });
};

export { buildFooter };