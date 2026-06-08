import { afterMutation } from "../../afterMutation.js";
import { deleteFromServer } from "./deleteFromServer.js";
import { runDeleteCallback } from "./runDeleteCallback.js";

const buildDeleteHandler = ({
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
}) => {
    const refreshAfterDelete = () => {
        afterMutation({
            inServices,
            inEndPoints,
            inDataStore,
            inContainerEl,
            inDom,
            inOptions,
            inVisibleColumns: visibleColumns,
            onDelete: localDeleteHandler,
            isBuildDataLists,
            inShowActions: showActions,
            inShowSerial: showSerial,
            inShowTable: showTable
        });
    };

    const localDeleteHandler = async ({ presentPk }) => {
        const fromDelete = await deleteFromServer({ presentPk, inEndPoints, inServices });

        if (fromDelete.ok) {
            const fromClient = await runDeleteCallback({
                presentPk, inOnDelete: inConfig?.callbacks?.table?.onDelete
            });

            if (fromClient.ok) {
                refreshAfterDelete();
            };
        };
    };

    return localDeleteHandler;
};

export { buildDeleteHandler };
