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
    const localDeleteHandler = async ({ presentPk }) => {
        const fromDelete = await inServices.actions.table.delete({
            inEndPoint: inEndPoints.delete,
            id: presentPk
        });
        // debugger;
        if (fromDelete.ok) {
            if (inConfig?.callbacks?.table?.onDelete) {
                const fromClient = await inConfig.callbacks.table.onDelete({
                    toDeletePk: presentPk
                });

                if (fromClient.ok) {
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
            } else {
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
        };
    };

    return localDeleteHandler;
};

export { buildDeleteHandler };
