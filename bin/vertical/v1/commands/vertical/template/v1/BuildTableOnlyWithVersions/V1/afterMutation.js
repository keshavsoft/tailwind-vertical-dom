import { refreshTable } from "./refresh.js";

const afterMutation = async ({
    inServices,
    inEndPoints,
    inDataStore,
    inContainerEl,
    inDom,
    inOptions,
    inVisibleColumns,
    onDelete,
    isBuildDataLists,
    inShowActions, inShowSerial,
    inShowTable
}) => {

    // 1. get fresh data
    const freshData = await inServices.actions.getData({
        inEndPoint: inEndPoints.read
    });

    // 2. update store
    inDataStore.setData(freshData);

    if (inShowTable) {
        // 3. refresh UI (only body)
        refreshTable({
            inContainerEl, inDataStore, inDom, inOptions,
            inVisibleColumns, inServices, inEndPoints,
            onDelete, isBuildDataLists, inShowActions,
            inShowSerial
        });

        // 4. restore focus (optional)
        focusFooter({ inContainerEl });
    };
};

const focusFooter = ({ inContainerEl }) => {
    const el = inContainerEl.querySelector(
        "tfoot input, tfoot select, tfoot textarea"
    );
    el?.focus();
};

export { afterMutation };