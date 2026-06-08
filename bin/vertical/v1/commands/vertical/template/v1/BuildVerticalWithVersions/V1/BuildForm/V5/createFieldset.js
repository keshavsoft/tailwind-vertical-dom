const createFieldset = ({
    inFormClass,
    inIsDisabled
}) => {

    const localFieldset = document.createElement("fieldset");

    localFieldset.className = inFormClass;
    localFieldset.disabled = inIsDisabled;

    return localFieldset;
};

export { createFieldset };