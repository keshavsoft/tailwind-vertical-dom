import { afterMutation } from "../../afterMutation.js";

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
    const deleteFromServer = async ({ presentPk }) => {
        return await inServices.actions.table.delete({
            inEndPoint: inEndPoints.delete,
            id: presentPk
        });
    };

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

    const runDeleteCallback = async ({ presentPk }) => {
        if (inConfig?.callbacks?.table?.onDelete) {
            return await inConfig.callbacks.table.onDelete({
                toDeletePk: presentPk
            });
        };

        return { ok: true };
    };

    const localDeleteHandler = async ({ presentPk }) => {
        const fromDelete = await deleteFromServer({ presentPk });

        if (fromDelete.ok) {
            const fromClient = await runDeleteCallback({
                presentPk
            });

            if (fromClient.ok) {
                refreshAfterDelete();
            };
        };
    };

    return localDeleteHandler;
};

export { buildDeleteHandler };
