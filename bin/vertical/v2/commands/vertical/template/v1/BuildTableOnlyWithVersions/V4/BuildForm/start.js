import { createForm } from "./V3/createForm.js";
import { afterMutation } from "../afterMutation.js";
// import { applyProjection } from "./applyProjection.js";

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
    onDelete,
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
        debugger;
        const res = await inServices.actions.vertical.save({
            inEndPoint: inEndPoints.create,
            payload: newItem
        });
        
        if (res.ok) {
            if (incallbacks?.vertical?.onSuccess) {
                incallbacks?.vertical?.onSuccess(res);
                return; // 🚫 stop library flow
            };
        };

        // afterMutation({
        //     inServices,
        //     inEndPoints,
        //     inDataStore,
        //     inContainerEl,
        //     inDom,
        //     inOptions,
        //     inVisibleColumns,
        //     onDelete,
        //     isBuildDataLists,
        //     inShowActions, inShowSerial,
        //     inDefaultRow,
        //     inShowTable
        // });
    };

    const form = createForm({
        columns: inVisibleColumns,
        inVisibleColumnsConfig,
        inDataStore,
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
