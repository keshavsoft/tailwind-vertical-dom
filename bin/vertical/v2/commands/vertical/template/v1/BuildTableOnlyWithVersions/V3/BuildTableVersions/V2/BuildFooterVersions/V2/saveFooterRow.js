import { validateRow } from "./Utils/validateRow.js";
import { afterMutation } from "./afterMutation.js";
import { getFooterPayload } from "./getFooterPayload.js";
import { showErrors } from "./DomManipulation/showErrors.js";
import { clearErrors } from "./DomManipulation/clearErrors.js";
import { clearFooterInputs } from "./DomManipulation/clearFooterInputs.js";

const saveFooterRow = async ({
    tr,
    inDataStore,
    inDom,
    inServices,
    inEndPoints,
    inContainerEl,
    inOptions,
    inColumnsConfig
}) => {

    const payload = getFooterPayload({ tr, inDataStore, inDom });

    clearErrors(tr);

    const errors = validateRow({ payload, inColumnsConfig });
    if (errors.length) {
        showErrors(tr, errors);
        return;
    };

    try {
        await inServices.actions.create({
            inEndPoint: inEndPoints.create,
            payload
        });
    } catch (err) {
        console.error(err);
        return;
    }

    clearFooterInputs(tr);

    await afterMutation({
        inServices,
        inEndPoints,
        inDataStore,
        inContainerEl,
        inDom,
        inOptions,
        focusFn: focusFooter
    });
};

const focusFooter = ({ inContainerEl }) => {
    const el = inContainerEl.querySelector(
        "tfoot input, tfoot select, tfoot textarea"
    );
    el?.focus();
};

export { saveFooterRow };