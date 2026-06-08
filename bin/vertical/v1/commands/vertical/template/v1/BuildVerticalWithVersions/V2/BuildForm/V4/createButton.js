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

    button.addEventListener('click', async (event) => {
        event.preventDefault(); // 🔥 THIS IS THE KEY

        const newItem = collectFormData({ inInputs: inputs });

        const fromSubmit = await onSubmit(newItem);

        if (fromSubmit) {
            clearFormInputs({ inInputs });
            focusFirstInput({ inInputs });
        };
    });

    return button;
};

export { createButton };