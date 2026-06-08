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
        const fromDelete = await inServices.actions.table.delete({
            inEndPoint: inEndPoints.delete,
            id: presentPk
        });

        if (fromDelete.ok) {
            if (inConfig?.callbacks?.table?.onDelete) {
                const fromClient = await inConfig.callbacks.table.onDelete({
                    toDeletePk: presentPk
                });

                if (fromClient.ok) {
                    refreshAfterDelete();
                };
            } else {
                refreshAfterDelete();
            };
        };
    };

    return localDeleteHandler;
};

export { buildDeleteHandler };
