import { createButton } from "../Create/CreateButton/createButton.js";

const appendSaveButton = ({
    inFieldset,
    inShowSaveButton,
    inButtonClass,
    inInputs,
    inOnSubmit
}) => {

    if (inShowSaveButton === false) return;

    const localButton = createButton({
        inButtonClass,
        inInputs,
        inOnSubmit
    });

    inFieldset.appendChild(localButton);
};

export { appendSaveButton };