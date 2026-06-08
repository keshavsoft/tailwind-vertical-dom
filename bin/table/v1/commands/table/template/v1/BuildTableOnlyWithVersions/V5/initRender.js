import { prepareData } from "./InitFuncs/prepareData.js";
import { renderDataLists } from "./InitFuncs/renderDataLists.js";
import { renderSearchRow } from "./InitFuncs/renderSearchRow.js";
import { renderTable } from "./InitFuncs/renderTable.js";
import { hookDomListeners } from "./InitFuncs/hookDomListeners.js";
import { buildDeleteHandler } from "./handlerFuncs/V6/buildDeleteHandler.js";

const initRender = ({ inContainerEl, inDataStore, inDom, inServices, inOptions, inEndPoints,
    inColumnsConfig, inUiClasses, callbacks, inConfig, inToSaveRow }) => {

    const localData = prepareData({
        inDataStore,
        inOptions
    });

    const {
        data,
        columns,
        visibleColumns,
        visibleColumnsConfig,
        defaultRow,
        toSaveRow,
        isBuildDataLists,
        showActions,
        showSerial,
        showTable
    } = localData;

    const handleDelete = buildDeleteHandler({
        inServices,
        inEndPoints,
        inConfig,
        inDataStore,
        inContainerEl,
        inDom,
        inOptions,
        visibleColumns,
        showActions,
        showSerial,
        showTable,
        isBuildDataLists
    });

    renderDataLists({
        isBuildDataLists,
        inContainerEl,
        inDataStore,
        inDom,
        visibleColumns,
        data
    });

    renderSearchRow({
        inOptions,
        inContainerEl,
        inDataStore,
        inDom
    });

    renderTable({
        showTable,
        inOptions,
        inContainerEl,
        inDataStore,
        inDom,
        inServices,
        inEndPoints,
        inColumnsConfig,
        data,
        visibleColumns,
        handleDelete,
        showActions,
        showSerial,
        defaultRow,
        inUiClasses,
        toSaveRow
    });

    hookDomListeners({
        inContainerEl,
        inDataStore,
        inDom,
        inOptions
    });
};

export { initRender };
