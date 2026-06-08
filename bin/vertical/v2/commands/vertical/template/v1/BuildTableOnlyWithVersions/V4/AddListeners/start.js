import { funcToRun as funcToRunFortableSearch } from "./tableSearch/start.js";

const hookAllListeners = ({ inContainerEl, inDataStore, inDom, inOptions }) => {
    const columns = inDataStore.getColumns();
    const visibleColumns = inDataStore.getVisibleColumns();

    funcToRunFortableSearch({
        inContainerEl, inDataStore,
        inDom, inColumns: columns,
        inVisibleColumns: visibleColumns,
        inOptions
    });
};

export { hookAllListeners };