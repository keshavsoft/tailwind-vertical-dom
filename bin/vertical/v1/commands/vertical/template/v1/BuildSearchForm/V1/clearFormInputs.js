const clearFormInputs = ({ inInputs }) => {
    const inputs = inInputs;

    Object.values(inputs).forEach(input => {
        input.value = "";

        if ("defaultValue" in input.dataset) {
            input.value = input.dataset.defaultValue;
        };
    });
};

export { clearFormInputs };