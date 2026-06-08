import { createForm } from "./V5/createForm.js";

const buildForm = ({
    inContainerEl,
    inDataStore,
    inDom,
    inServices,
    inOptions,
    inEndPoints,
    inColumnsConfig,
    inShowFooter,
    inData,
    inVisibleColumns,
    inVisibleColumnsConfig,
    inShowActions,
    inShowSerial,
    isBuildDataLists,
    inDefaultRow,
    inFormClass,
    inButtonClass,
    uiClasses,
    inIsDisabled,
    showSaveButton,
    inFindData,
    inShowTable,
    incallbacks
}) => {
    const handleSave = async (newItem) => {
        const res = await inServices.actions.vertical.save({
            inEndPoint: inEndPoints.create,
            payload: newItem
        });

        if (res.ok) {
            if (incallbacks?.vertical?.onSuccess) {
                incallbacks?.vertical?.onSuccess(res);
                return; // 🚫 stop library flow
            };

            return await true;
        };
    };

    const form = createForm({
        columns: inVisibleColumns,
        inVisibleColumnsConfig,
        inGetDataLists: inDataStore.getDataList,
        inDefaultRow,
        onSubmit: handleSave,
        uiClasses,
        inIsDisabled,
        showSaveButton
    });

    inContainerEl.prepend(form);
    // debugger;
    applyProjectionToTableRow({ tr: form, projection: inFindData })
};

const applyProjectionToTableRow = ({ tr, projection }) => {
    Object.entries(projection).forEach(([key, value]) => {
        const cell = tr.querySelector(`[name="${key}"]`);
        if (cell) {
            cell.value = value;
        }
    });
};

export { buildForm };
