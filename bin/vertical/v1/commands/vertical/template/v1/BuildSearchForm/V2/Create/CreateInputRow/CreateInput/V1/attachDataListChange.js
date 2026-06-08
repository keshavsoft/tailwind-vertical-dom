import { findDataListRecord } from "./findDataListRecord.js";
import { fillInputsFromObject } from "./fillInputsFromObject.js";

const attachDataListChange = ({
    input,
    col,
    onChangeFunc,
    inDataListSource,
    inDataStore
}) => {
    input.setAttribute("list", `${col}List`);
    input.dataset.dataListSource = inDataListSource;

    if (onChangeFunc) {
        input.addEventListener("change", onChangeFunc);
        return;
    }

    input.addEventListener("change", (event) => {
        const currentInput = event.currentTarget;

        const localFind = findDataListRecord({
            input: currentInput,
            inDataStore
        });

        if (!localFind) return;

        const closestVerticalForm = currentInput.closest(".verticalForm");

        if (!closestVerticalForm) return;

        fillInputsFromObject({
            container: closestVerticalForm,
            sourceObject: localFind,
            skipInput: currentInput
        });
    });
};

export { attachDataListChange };