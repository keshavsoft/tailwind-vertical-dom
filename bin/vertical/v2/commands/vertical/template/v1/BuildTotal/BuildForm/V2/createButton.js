import { collectFormData } from "./collectFormData.js";
import { clearFormInputs } from "./clearFormInputs.js";
import { focusFirstInput } from "./focusFirstInput.js";

const createButton = ({ inButtonClass, inInputs, inOnSubmit }) => {

    const buttonClass = inButtonClass;
    const inputs = inInputs;
    const onSubmit = inOnSubmit;

    const button = document.createElement('button');
    button.textContent = 'Save';
    button.className = buttonClass;

    button.addEventListener('click', () => {

        const newItem = collectFormData({ inInputs: inputs });

        onSubmit(newItem);

        clearFormInputs({ inInputs: inputs });

        focusFirstInput({ inInputs: inputs });
    });

    return button;
};

export { createButton };