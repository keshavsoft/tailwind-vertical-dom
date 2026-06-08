const collectFormData = ({ inInputs }) => {
    const inputs = inInputs;

    const newItem = {};

    Object.keys(inputs).forEach(key => {
        newItem[key] = inputs[key].value;
    });

    return newItem;
};

export { collectFormData };