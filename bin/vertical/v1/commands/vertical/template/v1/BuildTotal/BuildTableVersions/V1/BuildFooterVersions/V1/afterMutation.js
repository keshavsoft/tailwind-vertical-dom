import { refreshTable } from "../../refresh.js";

const afterMutation = async ({
    inServices,
    inEndPoints,
    inDataStore,
    inContainerEl,
    inDom,
    focusFn,
    inOptions
}) => {

    // 1. get fresh data
    const freshData = await inServices.actions.getData({
        inEndPoint: inEndPoints.read
    });
    // debugger;
    // 2. update store
    inDataStore.setData(freshData);

    // 3. refresh UI (only body)
    refreshTable({ inContainerEl, inDataStore, inDom, inOptions });

    // 4. restore focus (optional)
    if (focusFn) focusFn({ inContainerEl });
};

export { afterMutation };