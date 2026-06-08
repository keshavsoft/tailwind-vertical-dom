import { startFunc as createHandleSave } from "./CreateHandleSave/start.js";
import { startFunc as createHandleOnChange } from "./CreateHandleOnChange/start.js";
import { startFunc as createFooter } from "./CreateFooter/start.js";
import { appendFooter } from "./DomManipulation/appendFooter.js";

const buildFooter = (inOptions) => {
    const localVisibleColumns =
        inOptions.inVisibleColumns;

    const localHandleSave =
        createHandleSave(inOptions);
    // debugger;
    // const localHandleOnChange =
    //     createHandleOnChange(inOptions);
    const localHandleOnChange = createHandleOnChange({
        inDataStore: inOptions.inDataStore,
        inColumnsConfig: inOptions.inColumnsConfig,
        inToSaveRow: inOptions.inToSaveRow
    });

    const localTr = createFooter({
        inData: inOptions,
        localVisibleColumns,
        localHandleSave,
        localHandleOnChange
    });

    appendFooter({
        inDom: inOptions.inDom,
        inContainerEl: inOptions.inContainerEl,
        inTr: localTr
    });
};

export { buildFooter };