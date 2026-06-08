import { buildDataLists } from "./BuildDataLists/addToDom.js";
import { pureBuildBody } from "./BuildTableVersions/V2/BuildBodyVersions/V1/pureBuildBody.js";

const refreshTable = ({ inContainerEl, inDataStore, inDom, inOptions, inVisibleColumns,
    inServices, inEndPoints, onDelete, isBuildDataLists = false, inShowActions, inShowSerial }) => {
    const data = inDataStore.getData();
    const visibleColumns = inVisibleColumns;

    if (isBuildDataLists) {
        buildDataLists({
            inContainerEl,
            inDataStore,
            inDom
        });
    };

    pureBuildBody({
        inContainerEl,
        inData: data,
        inVisibleColumns: visibleColumns,
        inDom,
        options: {
            showActions: inShowActions,
            showSerial: inShowSerial,
            onEdit: ({ item }) => console.log("edit", item),
            onDelete
        }
    });
};

export { refreshTable };
