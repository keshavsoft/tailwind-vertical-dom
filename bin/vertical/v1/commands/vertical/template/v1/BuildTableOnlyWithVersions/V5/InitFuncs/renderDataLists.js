import { buildDataLists } from "../BuildDataLists/addToDom.js";

const renderDataLists = ({
    isBuildDataLists,
    inContainerEl,
    inDataStore,
    inDom,
    visibleColumns,
    data
}) => {
    if (isBuildDataLists) {
        buildDataLists({
            inContainerEl,
            inDataStore,
            inDom,
            inVisibleColumns: visibleColumns,
            inData: data
        });
    };
};

export { renderDataLists };
