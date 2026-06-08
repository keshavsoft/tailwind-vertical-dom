const createFieldset = ({
    inFormClass = 'grid grid-cols-3 gap-x-8 gap-y-4 p-6 verticalForm',
    inIsDisabled
}) => {

    const localFieldset = document.createElement("fieldset");

    localFieldset.className = inFormClass;
    localFieldset.disabled = inIsDisabled;

    return localFieldset;
};

export { createFieldset };