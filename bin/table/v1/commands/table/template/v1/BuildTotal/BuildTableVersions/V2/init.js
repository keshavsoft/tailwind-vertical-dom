import { buildHeader } from "./BuildHeaderVersions/V1/start.js";
import { buildFooter } from "./BuildFooterVersions/V3/start.js";
import { pureBuildBody } from "./BuildBodyVersions/V1/pureBuildBody.js";
import { lockTable } from "./lockTable.js";

const initTable = ({ inContainerEl, inDataStore, inDom, inServices, inOptions, inEndPoints, inColumnsConfig,
    inShowFooter, inData, inVisibleColumns, onDelete, inShowActions, inShowSerial, inIsDisabled,
    inDefaultRow, inUiClasses, inShowTable }) => {

    const data = inData;
    const columns = inDataStore.getColumns();
    const visibleColumns = inVisibleColumns;
    const showActions = inShowActions;
    const showSerial = inShowSerial;

    buildHeader({
        inVisibleColumns: visibleColumns,
        inContainerEl,
        inDom,
        options: {
            showActions,
            showSerial
        }
    });

    pureBuildBody({
        inContainerEl,
        inVisibleColumns: visibleColumns,
        inData: data,
        inDom,
        options: {
            showActions,
            showSerial,
            onEdit: ({ item }) => console.log("edit", item),
            onDelete
        }
    });

    if (inShowFooter) {
        buildFooter({
            inContainerEl,
            inDataStore,
            inDom,
            inServices,
            inOptions,
            inEndPoints,
            inColumnsConfig,
            inVisibleColumns,
            inShowActions,
            inShowSerial,
            inDefaultRow,
            inTdClass: inUiClasses.tdClass,
            inSerialClass: inUiClasses.serialClass,
            inShowTable
        });
    };

    lockTable({ inContainerEl, inIsDisabled });
    // hookAllListeners({ inContainerEl, inDataStore, inDom, inOptions });
};

export { initTable };
